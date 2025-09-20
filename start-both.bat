@echo off
echo Starting LearnFlow AI - Both Applications...
echo.
echo Application A (LearnflowBarracks) will run on: http://localhost:8081
echo Application B (LearnFlow) will run on: http://localhost:8080
echo.
echo Press Ctrl+C to stop both applications
echo.

REM Install dependencies if needed
if not exist "node_modules" (
    echo Installing root dependencies...
    npm install
)

if not exist "A-main\A-main\node_modules" (
    echo Installing dependencies for Application A...
    cd A-main\A-main
    npm install
    cd ..\..
)

if not exist "B-main\B-main\node_modules" (
    echo Installing dependencies for Application B...
    cd B-main\B-main
    npm install
    cd ..\..
)

echo Starting both applications...
npm run dev




