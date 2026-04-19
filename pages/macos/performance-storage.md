# macOS Performance & Storage

Do the boring checks before deleting system files or installing "cleaners." Most slow Macs are dealing with low storage, login items, browser load, thermal limits, old batteries, or one runaway process.

## Fast Triage

| Symptom | First check |
| :--- | :--- |
| Fans loud / hot | Activity Monitor > CPU and Energy. |
| App opens slowly | Free storage, app updates, login items. |
| Beachballs | Memory pressure, failing external drive, cloud sync loops. |
| Battery drains | Battery settings, Energy tab, browser extensions, background apps. |
| Update fails | Free storage and stable network. |
| Storage full | System Settings > General > Storage, then user files first. |

## Activity Monitor Basics

| Tab | What to look for |
| :--- | :--- |
| CPU | Processes stuck high for minutes. |
| Memory | Red memory pressure, huge swap use. |
| Energy | Apps preventing sleep or draining battery. |
| Disk | Heavy writes from sync tools, logs, or broken apps. |
| Network | Unexpected upload/download loops. |

Do not kill random system processes as a maintenance routine. Restart first, update the app causing load, then investigate.

## Storage Cleanup Order

1. Empty Trash after checking it.
2. Remove old installers from Applications and Downloads.
3. Move large videos, VM images, game libraries, and archives to external storage.
4. Delete old iPhone/iPad backups only if you know you have newer backups.
5. Clear browser downloads and unused browser profiles.
6. Run package manager cleanup:

```bash
brew cleanup
```

Avoid deleting files from `/System`, `/Library`, or hidden app support folders unless you know exactly what owns them.

## Login Items and Background Items

Check System Settings > General > Login Items & Extensions:

- Disable apps you do not need at every boot.
- Remove unknown background items.
- Keep security, backup, cloud sync, and hardware helper tools only if you still use them.

## Battery and Thermals

- Keep macOS updated for firmware and power fixes.
- Use Safari or a lighter browser profile if battery life matters.
- Reduce browser extensions.
- Replace old batteries instead of chasing software tweaks forever.
- Keep vents clear on Intel laptops.
- On Apple silicon, sustained heat is often from a specific app, browser tab, VM, or external display workload.

## What Not To Use

- One-click "RAM cleaners."
- Scripts that delete caches every boot.
- Registry-style tweak packs copied from Windows advice.
- Apps that request Full Disk Access only to show scary cleanup numbers.
- Commands that recursively delete caches while apps are running.

## Official Sources

- If an error occurred while updating or installing macOS: [support.apple.com/102531](https://support.apple.com/en-us/102531)
- Download and install macOS: [support.apple.com/102662](https://support.apple.com/en-us/102662)
- Protecting against malware in macOS: [support.apple.com/guide/security/sec469d47bd8/web](https://support.apple.com/guide/security/protecting-against-malware-sec469d47bd8/web)
- Homebrew FAQ: [docs.brew.sh/FAQ](https://docs.brew.sh/FAQ)

