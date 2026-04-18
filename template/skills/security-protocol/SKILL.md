---
name: security-protocol
description: Advanced protocols for rate-limiting, zero-trust, and robust infrastructure stability.
---

# Security Protocol Skill

## 🛡️ Core Directives
1. **Secret Scanning**: Before any `git add` or `git commit`, scan the files for potential secrets (e.g., `sk-`, `AIza`, `ghp_`).
2. **Environment Isolation**: Always use `.env` files for configuration. Never hardcode sensitive values.
3. **Input Validation**: Treat all external inputs (User requests, API responses) as potentially malicious.
4. **Error Masking**: Ensure error messages do not leak stack traces or system environment information to the end-user.

## 🚀 Infrastructure Security
- **Rate-Limiting**: Implement Nginx or Application-layer rate limiting by default.
- **Payload Limits**: Restrict request body size to prevent DoS attacks.
- **CORS Handling**: Only allow trusted origins. Never use `Access-Control-Allow-Origin: *` in production.

## ✅ Security Checklist
- [ ] Are secrets excluded from version control?
- [ ] Does the UI sanitize all user-contributed content (防止 XSS)?
- [ ] Is information leakage minimized in logs?
- [ ] Are third-party dependencies scanned for vulnerabilities?
