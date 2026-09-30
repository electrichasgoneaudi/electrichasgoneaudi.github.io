#!/usr/bin/env python3

import json
import sys

import ctranslate2
from argostranslate import package

sys.stdin.reconfigure(encoding="utf-8")
sys.stdout.reconfigure(encoding="utf-8")
sys.stderr.reconfigure(encoding="utf-8")


def main() -> None:
    inputs = json.load(sys.stdin)
    target_language = sys.argv[1] if len(sys.argv) > 1 else "de"
    if target_language not in {"de", "fr"}:
        raise ValueError(f"Unsupported target language: {target_language}")
    installed = [item for item in package.get_installed_packages() if item.from_code == "en" and item.to_code == target_language]
    if not installed:
        raise RuntimeError(f"The Argos English-to-{target_language} package is not installed.")

    language_package = installed[0]
    translator = ctranslate2.Translator(
        str(language_package.package_path / "model"),
        device="cpu",
        compute_type="int8",
        inter_threads=1,
        intra_threads=0,
    )

    translations = []
    chunk_size = 1024
    for offset in range(0, len(inputs), chunk_size):
        chunk = inputs[offset : offset + chunk_size]
        tokenized = [language_package.tokenizer.encode(value) for value in chunk]
        target_prefix = None
        if language_package.target_prefix:
            target_prefix = [[language_package.target_prefix]] * len(tokenized)
        results = translator.translate_batch(
            tokenized,
            target_prefix=target_prefix,
            replace_unknowns=True,
            max_batch_size=64,
            batch_type="tokens",
            beam_size=1,
            num_hypotheses=1,
        )
        for result in results:
            value = language_package.tokenizer.decode(result.hypotheses[0])
            if language_package.target_prefix and value.startswith(language_package.target_prefix):
                value = value[len(language_package.target_prefix) :]
            translations.append(value.lstrip())
        print(f"Translated {min(offset + chunk_size, len(inputs))}/{len(inputs)} segments", file=sys.stderr, flush=True)

    json.dump(translations, sys.stdout, ensure_ascii=False)


if __name__ == "__main__":
    main()
