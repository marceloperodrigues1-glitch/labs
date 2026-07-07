Write-Host ""
Write-Host "========================================="
Write-Host "      L.A.B.S. Setup"
Write-Host " AI Product Engineering Framework"
Write-Host "========================================="
Write-Host ""

# Verifica Node.js
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js não encontrado."
    exit 1
}

# Verifica pnpm
if (-not (Get-Command pnpm -ErrorAction SilentlyContinue)) {
    Write-Host "❌ pnpm não encontrado."
    exit 1
}

Write-Host "✅ Node.js encontrado: $(node -v)"
Write-Host "✅ pnpm encontrado: $(pnpm -v)"
Write-Host ""

$folders = @(
    "apps",
    "apps/cli",
    "packages",
    "packages/core",
    "packages/shared",
    "docs",
    "examples",
    "scripts",
    ".github",
    ".github/workflows"
)

foreach ($folder in $folders) {
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder | Out-Null
        Write-Host "📁 Criado: $folder"
    } else {
        Write-Host "✔ Já existe: $folder"
    }
}

Write-Host ""
Write-Host "Projeto preparado com sucesso!"
# Arquivos base
$files = @{
    "package.json" = @'
{
  "name": "labs",
  "version": "0.1.0",
  "private": true,
  "packageManager": "pnpm@11.10.0",
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev"
  },
  "devDependencies": {
    "turbo": "^2.5.6",
    "typescript": "^5.9.2"
  }
}
'@

    "pnpm-workspace.yaml" = @'
packages:
  - apps/*
  - packages/*
'@

    "turbo.json" = @'
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
'@

    ".gitignore" = @'
node_modules
dist
.turbo
.env
'@

    "README.md" = @'
# L.A.B.S.

AI Product Engineering Framework

🚧 Em desenvolvimento.
'@
}

foreach ($file in $files.Keys) {
    if (!(Test-Path $file)) {
        $files[$file] | Set-Content $file -Encoding UTF8
        Write-Host "📄 Criado: $file"
    } else {
        Write-Host "✔ Já existe: $file"
    }
}