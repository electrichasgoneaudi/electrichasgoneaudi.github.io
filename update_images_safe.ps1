# PowerShell script to update image URLs while preserving file encoding
# Changes domain from media.electrichasgoneaudi.net to media.evkx.net
# Changes path from /multimedia/ to /ehga/
# Changes file extension from various formats to .webp
# PRESERVES original file encoding

Write-Host "Starting image URL update with encoding preservation..."

# Get all markdown and HTML files
$files = Get-ChildItem -Recurse -Include "*.md","*.html" | Where-Object { 
    $content = Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue
    $content -and $content.Contains("media.electrichasgoneaudi.net")
}

Write-Host "Found $($files.Count) files to update"
$totalReplacements = 0

foreach ($file in $files) {
    Write-Host "Processing: $($file.FullName)"
    
    # Read content as bytes to preserve encoding
    $bytes = [System.IO.File]::ReadAllBytes($file.FullName)
    $content = [System.Text.Encoding]::UTF8.GetString($bytes)
    $originalContent = $content
    
    # Only perform URL replacements - no encoding changes
    # Replace domain and path
    $content = $content -replace "https://media\.electrichasgoneaudi\.net/multimedia/", "https://media.evkx.net/ehga/"
    
    # Change image extensions to .webp (only for the new domain)
    $content = $content -replace "https://media\.evkx\.net/ehga/([^`"'\s]+)\.jpg", "https://media.evkx.net/ehga/`$1.webp"
    $content = $content -replace "https://media\.evkx\.net/ehga/([^`"'\s]+)\.jpeg", "https://media.evkx.net/ehga/`$1.webp"
    $content = $content -replace "https://media\.evkx\.net/ehga/([^`"'\s]+)\.png", "https://media.evkx.net/ehga/`$1.webp"
    
    if ($content -ne $originalContent) {
        $fileReplacements = ([regex]::Matches($originalContent, "https://media\.electrichasgoneaudi\.net/multimedia/")).Count
        $totalReplacements += $fileReplacements
        Write-Host "  - Updated $fileReplacements URLs in this file"
        
        # Write back preserving original encoding
        $newBytes = [System.Text.Encoding]::UTF8.GetBytes($content)
        [System.IO.File]::WriteAllBytes($file.FullName, $newBytes)
    }
}

Write-Host ""
Write-Host "Update complete!"
Write-Host "Total files processed: $($files.Count)"
Write-Host "Total URL replacements: $totalReplacements"