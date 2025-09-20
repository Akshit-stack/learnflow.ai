# LearnFlow AI - Dual Application Workspace

This workspace contains two complementary React applications that work together to provide a complete AI-powered learning platform.

## Applications

### Application A - LearnflowBarracks (Port 8081)
- **Features**: Flashcards, Smart Notes, Interactive Quizzes, Flowcharts, YouTube Integration, PDF Processing
- **URL**: http://localhost:8081
- **Description**: Main learning platform with AI-enhanced study tools

### Application B - LearnFlow (Port 8080)  
- **Features**: Quiz Creation, User Management, Authentication, Leaderboards, 3D Models
- **URL**: http://localhost:8080
- **Description**: Companion application for quiz management and user features

## Quick Start

### Option 1: Using the Batch Script (Windows)
```bash
# Double-click start-both.bat or run:
start-both.bat
```

### Option 2: Using the Shell Script (Linux/Mac)
```bash
# Make executable and run:
chmod +x start-both.sh
./start-both.sh
```

### Option 3: Manual Setup
```bash
# 1. Install root dependencies
npm install

# 2. Install dependencies for both applications
npm run install:all

# 3. Start both applications
npm run dev
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start both applications concurrently |
| `npm run dev:a` | Start only Application A (LearnflowBarracks) |
| `npm run dev:b` | Start only Application B (LearnFlow) |
| `npm run install:all` | Install dependencies for all applications |
| `npm run build` | Build both applications for production |
| `npm run clean` | Remove all node_modules folders |

## URLs After Starting

- **Application A**: http://localhost:8081
- **Application B**: http://localhost:8080

## Architecture

Both applications are independent React + Vite applications that can communicate through:
- Shared Supabase database
- API endpoints
- Cross-origin requests (if needed)

## Development Notes

- Each application has its own `package.json` and dependencies
- Applications run on different ports to avoid conflicts
- Use `Ctrl+C` to stop both applications when running concurrently
- Hot reload works independently for each application

## Troubleshooting

### Port Already in Use
If you get port conflicts:
- Check if other applications are using ports 8080 or 8081
- Kill processes using these ports or modify the vite.config.ts files

### Dependencies Issues
```bash
# Clean and reinstall everything
npm run clean
npm run install:all
```

### Windows PowerShell Execution Policy
If you can't run the batch file:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```


