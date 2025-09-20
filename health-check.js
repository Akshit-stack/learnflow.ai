#!/usr/bin/env node

const { spawn } = require('child_process');
const http = require('http');

console.log('🔍 Running LearnFlow AI Health Check...\n');

// Check if dependencies are installed
const fs = require('fs');

function checkDependencies() {
  const checks = [
    { path: 'node_modules', name: 'Root dependencies' },
    { path: 'A-main/A-main/node_modules', name: 'Application A dependencies' },
    { path: 'B-main/B-main/node_modules', name: 'Application B dependencies' }
  ];

  let allGood = true;
  
  checks.forEach(check => {
    if (fs.existsSync(check.path)) {
      console.log(`✅ ${check.name} - Installed`);
    } else {
      console.log(`❌ ${check.name} - Missing`);
      allGood = false;
    }
  });

  return allGood;
}

function checkPorts() {
  return new Promise((resolve) => {
    let checks = 0;
    let results = { 8080: false, 8081: false };

    [8080, 8081].forEach(port => {
      const req = http.request({
        hostname: 'localhost',
        port: port,
        method: 'GET',
        timeout: 1000
      }, (res) => {
        results[port] = true;
        checks++;
        if (checks === 2) resolve(results);
      });

      req.on('error', () => {
        results[port] = false;
        checks++;
        if (checks === 2) resolve(results);
      });

      req.on('timeout', () => {
        req.destroy();
        results[port] = false;
        checks++;
        if (checks === 2) resolve(results);
      });

      req.end();
    });
  });
}

async function main() {
  // Check dependencies
  console.log('📦 Checking dependencies...');
  const depsOk = checkDependencies();
  
  if (!depsOk) {
    console.log('\n❌ Some dependencies are missing. Run: npm run install:all');
    process.exit(1);
  }

  console.log('\n🌐 Checking if applications are running...');
  const portResults = await checkPorts();

  if (portResults[8080]) {
    console.log('✅ Application B (LearnFlow) - Running on http://localhost:8080');
  } else {
    console.log('❌ Application B (LearnFlow) - Not running on port 8080');
  }

  if (portResults[8081]) {
    console.log('✅ Application A (LearnflowBarracks) - Running on http://localhost:8081');
  } else {
    console.log('❌ Application A (LearnflowBarracks) - Not running on port 8081');
  }

  if (!portResults[8080] && !portResults[8081]) {
    console.log('\n💡 To start both applications, run: npm run dev');
  }

  console.log('\n🎉 Health check complete!');
}

main().catch(console.error);