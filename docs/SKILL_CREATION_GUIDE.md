# 🧩 Skill Creation Guide

How to build a high-performance skill module for Antigravity OS.

## 1. Structure
Every skill must be a folder containing a `SKILL.md` file.

```text
skills/
└── your-skill-name/
    └── SKILL.md
```

## 2. SKILL.md Template
Use the following format to ensure the AI agent understands the instructions perfectly.

```markdown
---
name: your-skill-name
description: A high-level premium description of what this skill achieves.
---

# Skill Title

## 📋 Methodology
Step-by-step instructions on how the agent should approach the task.
1. Scan for X...
2. Optimize Y...
3. etc.

## ✅ Surgical Checklist
A list of points the agent must verify before calling the task "done."
- [ ] Is the code minimal?
- [ ] Does it match the existing style?
- [ ] etc.

## 🛡️ Security Protocol
Specific security constraints for this domain.
```

## 3. Writing Rules
- **Be Specific**: Avoid vague words like "better" or "faster." Use "reduce O(n) to O(log n)" or "ensure WCAG 2.1 compliance."
- **Focus on Discipline**: A skill is not just a prompt; it's a **behavioral constraint**.
- **Premium Tone**: Keep descriptions elegant and professional.

## 4. How to Contribute
1. Create your skill folder in `template/skills/`.
2. Test it with your AI agent.
3. Open a Pull Request!
