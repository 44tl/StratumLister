# Android Setup Checklist

Use this after buying a new phone, factory resetting, or moving to a different Android device.

## Before Setup

- Back up photos, files, contacts, authenticator recovery codes, password manager emergency access, and chat app backups.
- Save 2FA backup codes outside the phone.
- If you use Signal, WhatsApp, or another messenger with its own backup system, export or enable that backup separately.
- Charge the phone and connect to a trusted Wi-Fi network.
- If this is a used phone, make sure the previous owner removed their Google account and screen lock before the reset.

## First Boot

1. Install the latest Android system update.
2. Install the latest Google Play system update if the device uses Google services.
3. Update apps from Play Store or the device vendor store.
4. Reboot after major system or Play system updates.
5. Set a strong screen lock before adding sensitive accounts.
6. Add biometrics only after the PIN, password, or pattern is strong.

## Security Baseline

- Enable Find My Device or the equivalent vendor service if you want remote locate and wipe.
- Keep Google Play Protect enabled on Google-certified devices.
- Review Security and Privacy settings after updates, not only during setup.
- Turn on theft, scam, spam, and unsafe app warnings if your device provides them.
- Use a password manager instead of saving passwords in notes or screenshots.
- Use phishing-resistant 2FA or app-based 2FA for important accounts.

## Privacy Baseline

- Review location access before opening every app.
- Prefer "while using" or "ask every time" permissions when possible.
- Give precise location only to apps that genuinely need it.
- Deny contacts, SMS, notification access, accessibility access, and usage access unless the app has a clear reason.
- Disable ad personalization and reset advertising ID if your device exposes those controls.
- Remove apps you do not use instead of leaving them with background permissions.

## Install Apps

Good order:

1. Password manager.
2. Authenticator or hardware-key companion app.
3. Banking and identity apps from official stores only.
4. Messaging apps from official stores or official websites.
5. Cloud sync and backup apps.
6. Everything else.

Avoid restoring every old app automatically. Reinstall intentionally so old permissions and abandoned apps do not follow you.

## Before Root, ROM, Or Debloat

- Finish all stock updates first.
- Back up everything important.
- Record the exact model number, build number, Android version, and security patch level.
- Download official factory images or recovery packages when available.
- Test ADB connection before you need it for recovery.
- Do not unlock the bootloader until you understand that unlocking wipes data.

## Official Sources

- Check and update Android version: [support.google.com/android/answer/7680439](https://support.google.com/android/answer/7680439)
- Google Play Protect: [support.google.com/work/android/answer/15162069](https://support.google.com/work/android/answer/15162069)
- Android privacy controls: [android.com/safety/privacy](https://www.android.com/safety/privacy/)
- Android privacy dashboard: [support.google.com/android/answer/13530434](https://support.google.com/android/answer/13530434)
- Android Debug Bridge: [developer.android.com/studio/command-line/adb](https://developer.android.com/studio/command-line/adb)
