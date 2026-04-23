# Passkeys & Passwordless Authentication

Passkeys are a modern replacement for passwords that provide faster, easier, and more secure sign-ins to websites and apps. They are built on WebAuthn technology.

## How Passkeys Work

Instead of typing a password, you use your device's built-in security—like your fingerprint, face scan, or screen lock PIN—to authenticate.

Behind the scenes, a passkey consists of a cryptographic key pair:
1. **Public Key:** Registered with the website or app.
2. **Private Key:** Stored securely on your device (or in your password manager).

When you sign in, the website challenges your device to prove it has the private key. Your device asks for your biometric approval, signs the challenge, and logs you in. The private key never leaves your device.

## Why They Are Better
- **Phishing Resistant:** Passkeys are bound to the specific website's domain. A fake login page cannot trick your device into using the passkey.
- **No Data Breaches:** Since servers only store the public key, there are no passwords for hackers to steal from server breaches.
- **Convenience:** No more remembering complex passwords or typing them out.

## Where to Store Passkeys
- **Hardware Security Keys:** YubiKey or Google Titan. Most secure, but less convenient if lost.
- **Password Managers:** 1Password, Bitwarden, and Apple iCloud Keychain support storing and syncing passkeys across your devices.
- **Device Native:** Android and iOS can store passkeys natively.

Start adopting passkeys on major platforms like Google, Apple, GitHub, and Amazon!
