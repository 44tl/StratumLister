# Emergency Recovery Path

Use this when Windows is unstable, a tweak broke core behavior, a driver install failed, or a game/system component stopped launching.

## First Rule

Do not apply more optimizers. Stabilize first.

## Quick Triage

| Symptom | First Move |
| --- | --- |
| Boot loop | Use Windows Recovery Environment |
| Black screen after GPU driver | Boot Safe Mode, remove driver |
| Store apps broken | Run DISM and SFC, then reset Store |
| Network gone | Re-enable adapter, reset network stack |
| Windows Update broken | Undo update blockers, reset update components |
| Game launch failure | Disable overlays and restore services |

## Recovery Order

1. Reboot once.
2. Uninstall the last tool, driver, or tweak.
3. Use System Restore if you made a restore point.
4. Run `DISM /Online /Cleanup-Image /RestoreHealth`.
5. Run `sfc /scannow`.
6. Use a full image backup if system files or boot state remain broken.
7. Reset or reinstall Windows only after data is backed up.

## When To Stop Troubleshooting

If core services were removed, permissions were damaged, or an unknown custom ISO is involved, a clean install from an official ISO is often faster and safer than continuing repair attempts.
