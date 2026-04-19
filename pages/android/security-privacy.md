# Android Security & Privacy

Android security is strongest when the device is updated, locked, using verified software, and not overloaded with untrusted apps.

## Baseline Rules

- Keep Android system updates current.
- Keep Google Play system updates current on Google-certified devices.
- Keep apps updated from their original source.
- Use a strong screen lock.
- Use a password manager and 2FA.
- Review permissions monthly.
- Keep Play Protect enabled.
- Avoid root on the phone used for banking, work, or primary accounts.
- Replace or repurpose phones that no longer receive security patches.

## Update Checks

Check:

- Android version.
- Android security update.
- Google Play system update.
- Build number.

On many devices this is under Settings > About phone > Android version, then Settings > System > Software update. Vendor menus vary.

For sensitive use, a current or recent security patch matters more than a new-looking Android skin.

## Permission Controls

Use the privacy dashboard and permission manager to review:

- Camera.
- Microphone.
- Location.
- Contacts.
- Calendar.
- Call logs.
- SMS.
- Nearby devices.
- Files and media.

Prefer approximate location unless the app needs turn-by-turn navigation, ride pickup, delivery precision, or similar.

## High-Risk Permissions

Treat these as admin-level trust:

- Accessibility access.
- Notification access.
- Device admin apps.
- VPN services.
- Install unknown apps.
- Usage access.
- Manage all files.
- SMS and call log access.

Malicious apps often ask for these to read screens, intercept codes, control other apps, or hide behavior.

## Network Privacy

- Private DNS can reduce passive DNS exposure, but it does not hide traffic from websites or apps.
- A VPN changes who can observe network traffic; it does not make malware, phishing, or unsafe APKs safe.
- Avoid free VPNs with unclear ownership.
- Disable 2G if your phone and carrier support it and you do not need 2G fallback.
- Be careful with public Wi-Fi captive portals and fake login pages.

## Root And ROM Security

- Unlocking the bootloader changes the device trust model.
- A locked stock device verifies the OS at boot.
- A custom OS can be strong if it supports verified boot and relocking correctly.
- A rooted device can be useful, but it increases the damage a bad app or module can do.
- Hiding root from apps is not a security feature. It is an app-compatibility workaround and can break.

## Avoid

- Cleaner, booster, battery saver, and RAM optimizer apps.
- Antivirus apps that ask for broad permissions without a clear need.
- Keyboard apps from unknown developers.
- Cracked APKs and modded social apps.
- Turning off security warnings to install one app.
- Leaving a no-longer-updated phone connected to important accounts.

## Official Sources

- Check and update Android version: [support.google.com/android/answer/7680439](https://support.google.com/android/answer/7680439)
- Android Security Bulletins: [source.android.com/docs/security/bulletin/asb-overview](https://source.android.com/docs/security/bulletin/asb-overview)
- Android privacy controls: [android.com/safety/privacy](https://www.android.com/safety/privacy/)
- Privacy dashboard: [support.google.com/android/answer/13530434](https://support.google.com/android/answer/13530434)
- Google Play Protect: [support.google.com/work/android/answer/15162069](https://support.google.com/work/android/answer/15162069)
- Android Verified Boot: [source.android.com/docs/security/features/verifiedboot](https://source.android.com/docs/security/features/verifiedboot)
