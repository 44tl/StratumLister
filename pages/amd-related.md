# AMD Related

Official AMD drivers are the safest default for modern AMD systems.

Use official sources for GPU drivers, chipset drivers, firmware notes, and release documentation.

Official source: [AMD drivers](https://www.amd.com/en/support/download/drivers.html)

## Official Driver Path

### Radeon GPU Drivers

Use AMD Software Adrenalin Edition from AMD's support page.

Use this when:

- You have a supported Radeon GPU.
- You want normal game compatibility and update support.
- You are troubleshooting crashes, timeouts, black screens, or display issues.

### AMD Chipset Drivers

Install chipset drivers from AMD's support page for Ryzen systems.

Use this when:

- You installed Windows fresh.
- You changed motherboard or CPU.
- You have sleep, wake, USB, scheduler, or power-management issues.

## Recommended Install Order

For a clean AMD setup:

1. Update Windows.
2. Install AMD chipset drivers.
3. Reboot.
4. Install Radeon GPU drivers.
5. Reboot again.
6. Test stability before changing tuning settings.

For driver swaps or repeated crashes:

1. Download Display Driver Uninstaller from [Wagnardsoft](https://www.wagnardsoft.com/).
2. Disconnect from the internet if Windows keeps auto-installing display drivers.
3. Boot into Safe Mode.
4. Run DDU for the current GPU vendor.
5. Reboot normally.
6. Install official AMD drivers.

## Quick Fixes

### Sleep, Wake, or USB Issues

- Install the current AMD chipset driver.
- Update motherboard firmware from the board vendor.
- Disable unstable overclocks while testing.
- Test without third-party RGB, fan, and monitoring tools.

### Driver Timeouts or Game Crashes

- Return GPU tuning to default.
- Clear shader cache in AMD Software.
- Disable overlays while testing.
- Reinstall official drivers cleanly.
- Check game-specific known issues before assuming hardware failure.

### Stutter After Driver Updates

- Let shader compilation finish.
- Reboot after driver installation.
- Test one game at a time.
- Avoid changing multiple tuning settings at once.

## Laptop Notes

For laptops:

- Prefer OEM GPU and chipset drivers if the laptop has hybrid graphics, a MUX switch, or vendor-specific power modes.
- Use AMD drivers when the OEM page is outdated and the laptop is known to support generic drivers safely.
- Keep the OEM control utility if it controls fan curves, MUX mode, charging limits, or performance profiles.

## AMD Software Settings

Good defaults:

- Keep global graphics settings conservative.
- Enable features per game instead of globally when possible.
- Avoid automatic overclocking until the system is stable.
- Document any tuning changes so they can be reverted.

## Modded Drivers

Modded drivers should be a last resort.

Consider them only for:

- Legacy GPUs no longer served well by official drivers.
- Niche hardware support problems.
- Test systems where rollback is easy.

**Tradeoff:** instability, no official support, and harder troubleshooting.

## Avoid

- Driver booster utilities.
- Repacked GPU drivers.
- Random registry performance packs.
- Overclocking before baseline stability testing.
- Mixing old chipset drivers with new GPU drivers.
