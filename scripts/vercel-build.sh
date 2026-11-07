#!/usr/bin/env bash
set -euo pipefail
if ! command -v dotnet >/dev/null 2>&1 || ! dotnet --version >/dev/null 2>&1; then
  curl --fail --silent --show-error --location https://dot.net/v1/dotnet-install.sh -o /tmp/zodiac-dotnet-install.sh
  bash /tmp/zodiac-dotnet-install.sh --channel 10.0 --install-dir /tmp/zodiac-dotnet
  export DOTNET_ROOT=/tmp/zodiac-dotnet
  export PATH="$DOTNET_ROOT:$PATH"
fi
dotnet publish BlazorWasm.Zodiac/BlazorWasm.Zodiac.csproj -c Release -o artifacts/publish -p:WasmBuildNative=false
