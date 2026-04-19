# Android Apps & Sideloading

Android lets users install apps from multiple sources. That flexibility is useful, but it is also where a lot of Android malware risk starts.

## App Source Order

| Source | Use when | Notes |
| :--- | :--- | :--- |
| Google Play | Normal apps, banking, identity, password managers, mainstream tools | Play Protect and app updates are the safest default for most users. |
| Device vendor store | Samsung, Xiaomi, Oppo, or other vendor-specific apps | Useful for vendor apps and firmware-adjacent tools. Watch duplicate apps. |
| F-Droid | Open-source apps you understand | Good for many utilities, but still check project activity and permissions. |
| Official developer website | App is not in a store and the developer is trusted | Verify the URL, signature, checksums, and update path. |
| Random APK mirror | Almost never | Do not use for sensitive apps. |

## Sideloading Rules

- Install from the official project site when possible.
- Check the package name, developer, signing history, and release notes.
- Prefer reproducible, open-source, or widely reviewed projects for non-store apps.
- Keep Play Protect enabled on Google-certified devices.
- Grant "Install unknown apps" only to the browser or file manager you are using, then turn it off after install.
- Do not install APKs sent through Discord, Telegram, DMs, comments, or shortened links.
- Do not disable Play Protect because a random app tells you to.

## Current Developer Verification Change

Google is rolling out Android developer verification tooling. According to Google's Android Developers Blog:

- User-facing install changes are planned first for Brazil, Indonesia, Singapore, and Thailand.
- Broader rollout is planned after the first wave.
- Apps from unregistered developers can still be installed through ADB or an advanced flow for power users.
- A limited distribution account path is planned for students and hobbyists.

Practical meaning: sideloading is not gone, but users should expect stronger warnings and more friction for apps from unverified developers.

## Permission Review

Be careful with apps asking for:

- Accessibility access.
- Notification access.
- SMS access.
- Contacts access.
- Device admin.
- VPN profile.
- Usage access.
- Install unknown apps.
- Manage all files.
- Battery optimization exemptions.

If a flashlight, wallpaper, cleaner, or video downloader asks for these, uninstall it.

## APK Safety Checklist

Before installing:

1. Confirm the app's official website.
2. Confirm the package name.
3. Read the release notes.
4. Check whether the app has an automatic update path.
5. Scan the file if you are unsure, but do not treat scanning as proof of safety.
6. Install on a secondary profile or spare device first for risky apps.

After installing:

- Review permissions.
- Disable "Install unknown apps" for the source app.
- Watch battery, data use, and notification behavior.
- Remove the app if it asks you to disable security features.

## Official Sources

- Android developer verification updates: [android-developers.googleblog.com](https://android-developers.googleblog.com/)
- Advanced flow for unverified apps: [android-developers.googleblog.com](https://android-developers.googleblog.com/)
- Google Play Protect: [support.google.com/work/android/answer/15162069](https://support.google.com/work/android/answer/15162069)
- Android privacy and permissions: [android.com/safety/privacy](https://www.android.com/safety/privacy/)
- Privacy dashboard: [support.google.com/android/answer/13530434](https://support.google.com/android/answer/13530434)
- F-Droid documentation: [f-droid.org/en/docs](https://f-droid.org/en/docs/)
