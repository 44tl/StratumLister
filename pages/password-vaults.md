# Password Vaults / Recommended Password Managers

Password managers enforce unique, strong credentials with zero-knowledge end-to-end encryption (AES-256+).

**Priorities:** audited code, no major breaches, passkey support, breach alerts, TOTP, secure sharing, cross-device sync.

Massive credential leaks (16B+ in 2025, ongoing exploitation) make unique passwords non-negotiable.

---

## Core Requirements

- AES-256-GCM or stronger zero-knowledge encryption
- Independent security audits (published reports)
- Passkey / WebAuthn / FIDO2 support (phishing-resistant)
- Breach/credential monitoring (Have I Been Pwned integration)
- TOTP generation + secure notes/cards
- Encrypted sharing (individuals/teams)
- No history of catastrophic breaches
- Regular updates + transparent vuln disclosure
- Open-source preferred for transparency

---

## Top Recommendations by Emy

### Bitwarden – Best Overall / Free / Open-Source King

Fully open-source (client + server), audited regularly

Unlimited free tier: devices, sync, TOTP, breach alerts

Premium ($10/yr): 2FA options, emergency access, 1 GB encrypted storage

Families/org plans scale well

Vaultwarden (Rust rewrite) for lightweight self-hosting

Strong passkey support and expanding enterprise access governance features

Native apps: Windows/macOS/Linux/iOS/Android + all browsers

**Latest:** Recent desktop releases include runtime updates and encryption-related maintenance.

**Why first choice:** Price-to-feature ratio unbeatable, transparent, no breaches, community + enterprise momentum.

---

### 1Password – Best Premium / Polished / Apple-Heavy

Closed-source but audited, excellent reputation

Watchtower: advanced breach + weak/duplicate alerts, phishing protection

Passkey-first focus, seamless autofill/biometrics

Families ($60/yr), business plans strong

Unified Access governance helps fight credential sprawl

Native Apple Watch + deep macOS/iOS integration

Promos are common; check current pricing before paying full price.

**Why pick:** Smoothest UX, best for Apple users, proactive security features justify $36–60/yr.

---

### KeePassXC – Best Offline / Maximum Control / Local-Only

100% offline, open-source (GPLv3), no cloud by default

**Latest:** 2.7.11 (Nov 2025) – attachment viewer/editor, merge dialog, KeeShare groups, ANSSI CSPN cert on 2.7.9

AES-256 + Twofish/Serpent options, key files + YubiKey

Mobile: KeePassium (iOS, Face ID), Keepass2Android (Android, autofill)

Plugins/extensible: TOTP, auto-type, hardware keys

Cross-platform desktop + browser via KeeWeb

**Why pick:** Zero cloud risk, full sovereignty – ideal paranoia/max privacy setups.

---

### Proton Pass – Rising Free/Privacy Contender

From Proton (Mail/VPN), open-source clients, audited

Free tier strong: unlimited passwords/devices, TOTP, hide-my-email

Passkey support, breach monitoring

PCMag Editors' Choice free pick (late 2025)

Solid alternative if you want Proton ecosystem.

---

### NordPass / Keeper / RoboForm – Premium Contenders

**NordPass:** PCMag paid Editors' Choice – clean UI, business features

**Keeper:** Enterprise-grade, zero-trust, high Gartner scores

**RoboForm:** Affordable ($0.99/mo), local option, form-filling king – some rate #1 overall

All audited, passkey support, no recent breaches.

---

## Avoid

- **LastPass** – Multiple breaches (2022+), trust eroded, poor privacy moves
- Any without audits, passkey support, or recent vuln fixes

---

## Team / Self-Hosted

**Passbolt** > Team-first: granular permissions, sharing, self-hosted (Docker), open-source

**Psono** > Feature-heavy org alternative: folders, tagging, enterprise sharing

**Vaultwarden** > Bitwarden-compatible self-host (lightweight, popular)

Passbolt edges for pure collaboration; Vaultwarden for personal/server Bitwarden parity.

---

## Quick Setup Path

1. Start here > **Bitwarden free** (bitwarden.com) – import from browser/CSV
2. Premium feel > **1Password trial** (1password.com)
3. Offline > **KeePassXC 2.7.11** (keepassxc.org) + mobile clients
4. Self-host > **Vaultwarden** (Docker) or **Passbolt**

Test autofill/sync, enable TOTP, set strong master (20+ chars or passphrase)

---

## Hard Rules

- Master password: diceware 6–8 words minimum, unique
- Enable 2FA/passkey on manager account
- Monitor breaches via integrated tools + https://haveibeenpwned.com
- Export encrypted backups regularly
- Migrate gradually, verify every critical login
- Use passkeys where possible (FIDO2 kills phishing)

No manager is perfect – but Bitwarden + 1Password + KeePassXC cover 95% of real needs cleanly.
