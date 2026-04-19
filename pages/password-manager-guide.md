# Introduction to Passwords

Password Security Guide

## Overview

Despite the growth of passkeys and biometrics, passwords remain the primary defense for most accounts.

Most breaches still occur due to:

- Password reuse.
- Weak predictable patterns.
- Lack of password manager usage.
- Credential stuffing attacks.
- Dictionary and brute force attacks.

This guide aligns with modern recommendations from [NIST](https://www.nist.gov) <span class="verified-icon"></span>.

## Core Best Practices

Never reuse passwords.

## The Problem

- Credential stuffing exploits reused email and password combinations.
- A single breach can compromise multiple accounts.
- Automated attack tools make reuse extremely dangerous.

## The Solution

- Use a unique password for every account.
- Use a password manager to generate and store them.
- Eliminate manual tracking and memory reliance.

## Use Randomly Generated Passwords

Standard:

- Minimum 20 characters.
- Use maximum length allowed by service.
- Mixed case letters.
- Numbers.
- Special characters.
- Pure random generation via password manager.

Example:

```text
kX9#vP2$mL8qW3!rT5uY7
```

Entropy is more important than cosmetic complexity rules.

## Strategic Password Rotation

### Master Password

- Do not rotate unless compromise is suspected.
- Avoid forced periodic changes.
- Maintain long term stability.

### High Value Accounts

Rotate every 3 to 6 months if:

- No multi factor authentication is enabled.
- The account controls sensitive data.

Change immediately if breach exposure occurs.

## Breach Monitoring

### Have I Been Pwned

Official site: [haveibeenpwned.com](https://haveibeenpwned.com) <span class="verified-icon"></span>

Use for:

- Email breach checking.
- Password hash lookup.
- Monitoring new breaches.

Enable built in breach monitoring within your password manager when available.

## Creating Strong Passwords

### Random Password Standard

- 20 to 128 characters.
- All character classes enabled.
- Generated via password manager.

### Diceware Passphrases

Official word list from EFF: [eff.org/dice](https://www.eff.org/dice) <span class="verified-icon"></span>

Best for:

- Master password.
- Disk encryption.
- Frequently typed credentials.

Requirements:

- 6 to 7 words minimum.
- 7 to 8+ words for master passwords.

Entropy reference:

- 6 words: approximately 77 bits.
- 7 words: approximately 90 bits.

Proper generation:

- Roll five six sided dice per word.
- Lookup using official list.
- Never reroll for better sounding phrases.

## Password Managers

A password manager is mandatory for modern security hygiene.

### Bitwarden

Official site: [bitwarden.com](https://bitwarden.com) <span class="verified-icon"></span>

- Free unlimited tier.
- Open source.
- Independently audited.
- Passkey support.
- Cross platform.
- Optional self hosting.

### 1Password

Official site: [1password.com](https://1password.com) <span class="verified-icon"></span>

- Premium user experience.
- Advanced breach monitoring.
- Family plans.

### KeePassXC

Official site: [keepassxc.org](https://keepassxc.org) <span class="verified-icon"></span>

- Fully local storage.
- No cloud requirement.
- Open source.
- Plugin ecosystem.

### Additional Options

Passbolt

Official site: [passbolt.com](https://www.passbolt.com) <span class="verified-icon"></span>

Team focused password manager.

Psono

Official site: [psono.com](https://psono.com) <span class="verified-icon"></span>

Self hosted team password manager.

## TOTP Separation Rule

Do not store TOTP seeds inside your password manager.

If the manager is compromised, multi factor becomes single factor.

## Recommended Authenticators

### Ente Auth

Official site: [ente.io/auth](https://ente.io/auth) <span class="verified-icon"></span>

End to end encrypted sync.

### Aegis Authenticator

Official site: [getaegis.app](https://getaegis.app) <span class="verified-icon"></span>

Android focused open source authenticator.

### YubiKey

Official site: [yubico.com](https://www.yubico.com) <span class="verified-icon"></span>

Hardware security key with strong phishing resistance.

## Recovery Code Storage

Use encrypted containers for backup storage.

### VeraCrypt

Official site: [veracrypt.fr](https://www.veracrypt.fr) <span class="verified-icon"></span>

Disk and container encryption.

### Cryptomator

Official site: [cryptomator.org](https://cryptomator.org) <span class="verified-icon"></span>

Encrypted cloud storage protection.

### Proton Drive

Official site: [proton.me/drive](https://proton.me/drive) <span class="verified-icon"></span>

End to end encrypted cloud storage.

Store recovery codes:

- Offline.
- In encrypted containers.
- In physically secure printed copies.

Never store recovery codes in your password manager.

## Backup Strategy

- Perform encrypted vault exports regularly.
- Store copies on multiple encrypted drives.
- Keep at least one offline USB backup.
- Periodically test restore process.

Backups must be tested to be valid.

## Implementation Checklist

- Unique password per account.
- 20+ character random passwords.
- 7+ word diceware master password.
- Enable multi factor authentication everywhere.
- Monthly breach checks.
- Rotate critical accounts when necessary.
- Maintain encrypted multi location backups.

## Recommended Starter Setup

Balanced and powerful configuration:

- Bitwarden for password management.
- Ente Auth or Aegis for TOTP.
- Optional YubiKey for hardware based second factor.

This setup protects against:

- Credential stuffing.
- Brute force attacks.
- Password reuse exploitation.
- Dictionary attacks.
- Most automated phishing attempts when combined with proper MFA.
