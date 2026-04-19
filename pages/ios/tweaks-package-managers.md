# iOS Tweaks & Package Managers

Jailbreak quality depends less on the jailbreak button and more on repo hygiene, tweak compatibility, and rollback discipline.

## Package Managers

| Manager | Notes |
| :--- | :--- |
| Sileo | Common modern package manager, default or common option on current jailbreaks. |
| Zebra | Lightweight package manager, also common on modern setups. |
| Cydia | Legacy. Many modern rootless setups do not center around it. |

Use the package manager recommended by the jailbreak project first. Mixing package managers is possible, but it adds troubleshooting complexity.

## Repo Rules

- Start with default repos.
- Add one repo at a time.
- Prefer developer-owned repos.
- Avoid piracy repos.
- Avoid "all tweaks free" mirrors.
- Read tweak descriptions and compatibility notes.
- Check whether a tweak supports rootless before installing on a rootless jailbreak.

## Tweak Categories

| Category | Risk |
| :--- | :--- |
| Theme icons and UI accents | Usually lower risk, but can still break SpringBoard. |
| Control Center and Lock Screen tweaks | Medium risk; can cause resprings or layout issues. |
| Keyboard, password, notification, and clipboard tweaks | High privacy risk. |
| Banking bypass and jailbreak hiding tweaks | High account risk and unreliable. |
| Daemon, filesystem, bootstrap, and security tweaks | High bootloop risk. |

## Install Discipline

1. Install one tweak.
2. Respring or reboot as required.
3. Test core apps.
4. Wait before installing more.
5. Keep a note of what changed.
6. Remove the last tweak first when troubleshooting.

Do not install 20 tweaks at once and then ask why the device bootloops.

## Troubleshooting Flow

If SpringBoard crashes or loops:

1. Enter safe mode if available.
2. Remove the most recent tweak.
3. Disable tweak injection if the jailbreak supports it.
4. Check package manager logs.
5. Restore root filesystem or remove the jailbreak only after simpler rollback fails.

If an app detects jailbreak:

- Assume the app may never work reliably on that setup.
- Do not install random bypasses for banking or government ID apps.
- Use a stock device for critical accounts.

## Useful Knowledge

- Rootless tweaks are not automatically compatible with old rootful tweaks.
- A tweak built for iOS 15 may not work on iOS 16 or later.
- "Works on my device" is not compatibility proof.
- Theming engines can affect battery and stability if overloaded.
- Some app crashes are caused by injected tweaks, not the app itself.

## Official Sources

- palera1n official site: [palera.in](https://palera.in/)
- palera1n compatibility chart: [docs.palera.in](https://docs.palera.in/docs/reference/compatibility-chart/)
- Dopamine GitHub: [github.com/opa334/Dopamine](https://github.com/opa334/Dopamine)
- Sileo: [getsileo.app](https://getsileo.app/)
- Zebra: [getzbra.com](https://getzbra.com/)
