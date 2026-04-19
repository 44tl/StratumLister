# 2FA Basics

Two-factor authentication protects accounts when a password is leaked. Authenticator apps generate time-based one-time passwords (TOTP), which are usually safer than SMS codes because they avoid SIM-swap and carrier-interception risks.

## Overview

Modern 2FA apps prioritize:

- Open-source development for transparency and auditability.
- Encrypted backup and synchronization across devices.
- Cross-platform compatibility across mobile, desktop, and web.
- Independent security audits where available.
- Better usability through search, tagging, previews, and easier migration.

## Best Options

| Method | Security | Notes |
| --- | --- | --- |
| Security key | Best | Strong phishing resistance |
| Passkey | Strong | Good where supported |
| Authenticator app | Good | Better than SMS |
| Email code | Medium | Depends on email security |
| SMS code | Weak fallback | Vulnerable to SIM swap and interception |

## Top Recommendation: Ente Auth

[Ente Auth](https://ente.io/auth/) is the best default recommendation for most users who want an open-source authenticator with encrypted sync and broad platform support.

### Why Ente Auth Leads

Core features:

- Free and open-source under the AGPL-3.0 license.
- End-to-end encrypted cloud synchronization across devices.
- No dependency on Google, Apple, or Microsoft ecosystems.
- Mobile, desktop, and web access.
- Offline mode with encrypted backup support.

Security and privacy:

- Zero-knowledge architecture.
- No telemetry-focused product model.
- Passkey protection options.
- Public security review material, including Cure53/Symbolic Software cryptography review material and Cure53 platform audit material documented by Ente.

User experience:

- Next-code preview without waiting for the timer to expire.
- Tagging and search.
- Multi-select bulk actions.
- QR code import from saved images.
- Encrypted HTML export.

Platform availability:

- Android through Google Play and F-Droid.
- iOS through the App Store.
- Desktop apps for macOS, Windows, and Linux.
- Web access at [auth.ente.io](https://auth.ente.io/).

### Quick Setup

1. Install Ente Auth from official sources.
2. Create an account, or use offline mode if you do not want sync.
3. Scan QR codes or add accounts manually.
4. Confirm every account shows working codes.
5. Save recovery codes for each service outside the authenticator app.

## Alternative Open-Source Solutions

### 2FAS Authenticator

[2FAS](https://2fas.com/) is a clean mobile-focused authenticator with browser extension support.

Strengths:

- Clean user interface.
- Easy export and import.
- Browser extension support.
- Minimal data collection.
- Manual encrypted export capability.

Limitations:

- No native desktop app.
- Primarily mobile-focused.

Best for: iOS and Android users who want browser integration.

### Aegis Authenticator

[Aegis](https://getaegis.app/) is a strong Android-only choice for users who prefer local control.

Strengths:

- Lightweight and highly customizable.
- Password-encrypted vault.
- Excellent offline security model for Android users.
- Available through F-Droid.

Limitations:

- Android-only.
- No native iOS or desktop app.

Best for: Android users focused on offline security.

### Bitwarden Authenticator

[Bitwarden Authenticator](https://bitwarden.com/products/authenticator/) works well for users already inside the Bitwarden ecosystem.

Strengths:

- Strong integration with Bitwarden.
- End-to-end encrypted cloud storage in the Bitwarden ecosystem.
- Broad cross-platform support.

Limitations:

- Some Bitwarden TOTP workflows require premium features.
- Tied to the Bitwarden ecosystem.

Best for: Existing Bitwarden users who want integrated password and 2FA workflows.

### Proton Authenticator

[Proton Authenticator](https://proton.me/authenticator) is most useful for users already committed to Proton services.

Strengths:

- End-to-end encryption.
- Integration with Proton Mail and Proton Pass.
- Solid security direction for Proton ecosystem users.

Limitations:

- Less compelling as a standalone authenticator if you do not use Proton services.
- Ecosystem fit matters more than raw feature count.

Best for: Proton Mail, Proton Pass, and Proton VPN subscribers.

## Proprietary Options

### Google Authenticator

Strengths:

- Simple interface.
- Google account synchronization.
- Easy for mainstream users.

Limitations:

- Google ecosystem lock-in.
- Weaker fit for privacy-focused users.

### Duo Mobile And Microsoft Authenticator

Strengths:

- Push notification support.
- Enterprise-friendly workflows.
- Strong fit for workplace-managed accounts.

Limitations:

- Increased account and ecosystem dependency.
- More data collection and administrative integration than privacy-first apps.

## Avoid

Avoid Authy for new setups. Twilio has announced end-of-life for Authy desktop apps, and the product direction is not a good fit for users who need long-term portability and transparent migration.

Also avoid:

- Enabling 2FA without saving recovery codes.
- Reusing the same weak password because 2FA is enabled.
- Keeping old trusted devices forever.
- Storing recovery codes only inside the authenticator account they recover.
- Using SMS as the only factor when app-based TOTP, passkeys, or security keys are available.

## Security Best Practices

Immediate setup actions:

- Export or record backup seeds immediately after setup where the service allows it.
- Enable encrypted backups for recovery.
- Save service backup codes in a separate secure location.
- Verify each account after adding it.

Enhanced security:

- Use hardware security keys such as YubiKey for critical accounts.
- Use a reputable password manager with unique passwords.
- Periodically verify that your backups and recovery codes still work.

Account recovery planning:

- Store backup codes in more than one secure place.
- Maintain multiple recovery options for important accounts.
- Test recovery procedures before you actually need them.

## Platform-Specific Considerations

### Mobile

- Prefer official app stores or F-Droid for Android.
- Verify developer names before installing lookalike apps.
- Review app permissions.
- Use biometric unlock only with a strong device passcode.

### Desktop

- Prefer native desktop apps if you frequently need codes while working.
- Evaluate browser extension permissions carefully.
- Confirm sync behavior before relying on desktop access.

### Web Access

- Confirm HTTPS is active before signing in.
- Enable 2FA or passkeys on the authenticator service account itself.
- Confirm that cloud synchronization is end-to-end encrypted.

## Evaluation Criteria

Security:

- Open-source code availability.
- Independent audit history.
- Encryption design.
- Backup and recovery mechanisms.
- Clear migration path.

Usability:

- Cross-platform availability.
- Interface quality.
- Search and tagging.
- Sync reliability.
- Import and export support.

Privacy:

- Data collection practices.
- Telemetry and analytics.
- Jurisdiction.
- Third-party integrations.
- Whether the product depends on a larger advertising or identity ecosystem.

## Migration Strategy

From legacy apps:

1. Export all existing accounts before switching.
2. Add accounts to the new app.
3. Verify codes work before deleting the old app.
4. Update backup codes where necessary.
5. Keep the old app installed until every important account is confirmed.

Bulk import:

- Use QR code scanning from gallery images where supported.
- Use official import features for existing backups.
- Confirm account sync across devices.
- Test recovery before wiping the old authenticator.

## Final Recommendation

Use Ente Auth as the default for most users. Use Aegis if you want Android-only offline control. Use 2FAS if you want a simple mobile app with browser integration. Use Bitwarden or Proton Authenticator when you already depend on those ecosystems.
