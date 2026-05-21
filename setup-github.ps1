# Run this script in PowerShell (right-click -> Run with PowerShell, or paste in terminal)
$ErrorActionPreference = "Stop"

$gh = "C:\Program Files\GitHub CLI\gh.exe"
if (-not (Test-Path $gh)) {
    Write-Host "GitHub CLI not found. Install with: winget install GitHub.cli"
    exit 1
}

# Add gh to PATH for this session
$env:Path = "C:\Program Files\GitHub CLI;" + $env:Path

Set-Location $PSScriptRoot

Write-Host "`n=== Step 1: GitHub login (browser will open) ===" -ForegroundColor Cyan
& $gh auth login

Write-Host "`n=== Step 2: Create repo and push ===" -ForegroundColor Cyan
& $gh repo create expression-orale-delf-b2 --public --source=. --remote=origin --push

Write-Host "`nDone! Repo: https://github.com/agremi123/expression-orale-delf-b2" -ForegroundColor Green
