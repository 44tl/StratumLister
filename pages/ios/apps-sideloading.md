# iOS Apps & Sideloading

iOS app installation depends heavily on region, signing method, account type, and whether the device is stock or jailbroken.

## App Source Order

| Source | Use when | Notes |
| :--- | :--- | :--- |
| App Store | Normal apps, banking, password managers, work apps | Safest default and easiest update path. |
| TestFlight | Beta testing apps from trusted developers | Official Apple beta distribution, but slots expire and builds can disappear. |
| Alternative app distribution | EU or Japan users who understand marketplace risk | Region-limited, notarized baseline, Apple support is limited. |
| AltStore Classic / Sideloadly | Personal IPA testing on stock devices | Apps can expire; Apple ID and signing limitations apply. |
| TrollStore | Compatible iOS 14.0 beta 2 through 16.6.1, 16.7 RC, and 17.0 only | Not a jailbreak, but powerful. Not for current iOS. |
| Jailbreak package managers | Jailbroken devices only | Repo quality matters. Tweak compatibility can break boot or apps. |

## Alternative App Distribution

Apple says alternative app distribution is available only in supported regions, currently the European Union or Japan, with features varying by country or region.

Important notes:

- Your Apple Account country or region and physical location must be eligible.
- Apps go through Apple Notarization, but not the full App Store review standard.
- Apple support for purchases, refunds, app quality, marketplace issues, and privacy concerns is limited.
- If a marketplace is deleted or stops operating, apps from that marketplace can stop receiving updates or stop working.
- In the EU, Apple documents alternative marketplaces and web distribution for iPhone and iPad.
- In Japan, Apple documents alternative marketplaces for iPhone.

## Developer Signing

Developer Mode is for local development installs, such as Xcode, Apple Configurator, and development-signed IPA workflows. Apple says it does not affect normal App Store or TestFlight installs.

Rules:

- Only use trusted computers.
- Use a throwaway Apple Account for risky signing tools.
- Do not enter your primary Apple Account password into tools you do not trust.
- Understand free developer signing limits before relying on a sideloaded app.

## AltStore, SideStore, And Sideloadly

Common limitations:

- Free Apple ID signing usually has app and refresh limits.
- Apps may need periodic refresh before they expire.
- JIT, extensions, VPN tricks, and background refresh behavior vary by iOS version.
- Installing an IPA does not make the IPA trustworthy.

Use these for hobby apps, emulators, and personal tools. Do not use random IPAs for banking, crypto, password managers, keyboards, VPNs, or 2FA.

## Red Flags

- Enterprise certificate stores selling pirated apps.
- Profiles that ask you to trust unknown organizations.
- "No revokes forever" claims on current iOS without explaining the signing method.
- Apps asking you to disable security settings.
- IPA files from Telegram, Discord, shortened links, or fake GitHub releases.

## Official Sources

- About alternative app distribution: [support.apple.com/118110](https://support.apple.com/en-us/118110)
- Installing apps through alternative app distribution: [support.apple.com/117767](https://support.apple.com/en-us/117767)
- Apple Developer Mode: [developer.apple.com](https://developer.apple.com/documentation/xcode/enabling-developer-mode-on-a-device)
- AltStore Classic getting started: [faq.altstore.io](https://faq.altstore.io/altstore-classic/your-altstore)
- AltStore PAL: [faq.altstore.io](https://faq.altstore.io/altstore-pal/what-is-altstore-pal)
- Sideloadly: [sideloadly.io](https://sideloadly.io/)
- TrollStore official GitHub: [github.com/opa334/TrollStore](https://github.com/opa334/TrollStore)
