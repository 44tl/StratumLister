# Windows Update Survival Guide

Windows Update should usually stay enabled. The goal is to reduce surprise breakage, not permanently block servicing.

## Safe Update Routine

1. Reboot before installing a large update.
2. Pause active downloads, games, and capture tools.
3. Confirm BitLocker recovery info is available if BitLocker is enabled.
4. Install updates.
5. Reboot.
6. Test networking, GPU driver, audio, Store apps, and your main games.

## When To Pause Updates

Pause briefly when:

- You are in the middle of work and cannot risk a reboot.
- A known bad update affects your hardware.
- You need time to make a backup before a feature update.

Do not use permanent update blockers as a normal maintenance plan.

## If An Update Breaks Something

- Check update history.
- Uninstall the latest quality update if the timing matches.
- Roll back the driver if a driver update was installed.
- Use System Restore if uninstalling the update does not help.

## Avoid

- Disabling update services permanently.
- Removing Windows Update components.
- Blocking updates through random scripts.
- Staying unpatched because one previous update was annoying.
