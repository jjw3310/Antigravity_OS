#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const command = process.argv[2];

if (command !== 'setup') {
    console.log('Usage: npx antigravity-os setup');
    process.exit(1);
}

const templateDir = path.join(__dirname, '../template');
const targetDir = process.cwd();

console.log('🌌 Initializing Antigravity OS...');

function copyFolderSync(from, to) {
    if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
    fs.readdirSync(from).forEach(element => {
        if (fs.lstatSync(path.join(from, element)).isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
}

try {
    // Copy ANTIGRAVITY.md
    fs.copyFileSync(path.join(templateDir, 'ANTIGRAVITY.md'), path.join(targetDir, 'ANTIGRAVITY.md'));
    
    // Copy Skills to _agents/skills
    const targetSkillsDir = path.join(targetDir, '_agents/skills');
    copyFolderSync(path.join(templateDir, 'skills'), targetSkillsDir);

    console.log('✅ Antigravity OS successfully installed!');
    console.log('------------------------------------------------');
    console.log('1. ANTIGRAVITY.md added to root.');
    console.log('2. Modular skills added to _agents/skills/.');
    console.log('------------------------------------------------');
    console.log('Your AI agent is now operating with Senior Engineering Discipline.');
} catch (err) {
    console.error('❌ Error during setup:', err.message);
    process.exit(1);
}
