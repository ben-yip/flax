::run in project root directory.

@echo off

::run browser-sync
start cmd /k browser-sync start --server --port 8000 --ui-port 8001 --no-open --no-notify --files "*.*, page/*.html, page.m/*.html, test/*.html, ./*/*.*, ./*/*/*.*"
echo - browser-sync started.

::run compass watch
start cmd /k compass watch
echo - compass is watching for changes...

::run html-imports.js
echo - html-imports is watching for changes...
node .\src\html-imports.js .\pagesrc .\page
