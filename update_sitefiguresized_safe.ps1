# PowerShell script to update sitefiguresized shortcode image paths and formats
# This script preserves file encoding by using byte-level operations

$files = Get-ChildItem -Path "." -Include "*.md", "*.html" -Recurse | Where-Object { $_.Length -gt 0 }
$totalUpdates = 0
$totalFilesProcessed = 0

foreach ($file in $files) {
    Write-Host "Processing: $($file.FullName)"
    
    # Read file as bytes to preserve encoding
    $originalBytes = [System.IO.File]::ReadAllBytes($file.FullName)
    $content = [System.Text.Encoding]::UTF8.GetString($originalBytes)
    $originalContent = $content
    
    # Pattern to match sitefiguresized shortcodes with relative paths (no https://)
    # This matches: {{< sitefiguresized thumb="models/..." or {{< sitefiguresized thumb="articles/..." or {{< sitefiguresized thumb="technology/..."
    $pattern = '(\{\{<\s*sitefiguresized\s+thumb=")([^"]+?)(\.(jpg|jpeg|png))(".*?\>\})'
    
    $matches = [regex]::Matches($content, $pattern, 'IgnoreCase')
    $fileUpdateCount = 0
    
    foreach ($match in $matches) {
        $fullMatch = $match.Groups[0].Value
        $prefix = $match.Groups[1].Value  # {{< sitefiguresized thumb="
        $imagePath = $match.Groups[2].Value  # the path without extension
        $oldExtension = $match.Groups[3].Value  # .jpg, .jpeg, or .png
        $suffix = $match.Groups[5].Value  # " width="..." title="..." >}}
        
        # Only process if it's a relative path (doesn't start with http)
        if ($imagePath -notlike "http*") {
            # Create the new URL with webp format
            $newUrl = "https://media.evkx.net/ehga/$imagePath.webp"
            $newShortcode = $prefix + $newUrl + $suffix
            
            # Replace in content
            $content = $content -replace [regex]::Escape($fullMatch), $newShortcode
            $fileUpdateCount++
        }
    }
    
    if ($fileUpdateCount -gt 0) {
        Write-Host "  - Updated $fileUpdateCount sitefiguresized shortcodes in this file"
        
        # Convert back to bytes using UTF8 encoding and write
        $newBytes = [System.Text.Encoding]::UTF8.GetBytes($content)
        [System.IO.File]::WriteAllBytes($file.FullName, $newBytes)
        
        $totalUpdates += $fileUpdateCount
    }
    
    $totalFilesProcessed++
}

Write-Host ""
Write-Host "Update complete!"
Write-Host "Total files processed: $totalFilesProcessed"
Write-Host "Total sitefiguresized shortcodes updated: $totalUpdates"