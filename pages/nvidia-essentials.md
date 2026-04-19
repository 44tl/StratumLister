# Nvidia Essentials

Essential NVIDIA setup without random driver packs or registry tweaks.

Official driver source: [NVIDIA GeForce drivers](https://www.nvidia.com/en-us/geforce/drivers/)

## Clean Driver Path

Use the official NVIDIA driver page for downloads. Avoid mirrors, repacked installers, and driver booster utilities.

Use Display Driver Uninstaller only when:

- You are switching GPU vendors.
- A driver install is broken.
- You have repeated display crashes or black screens.
- You need to remove old vendor leftovers.

Official DDU links:

- [wagnardsoft.com](https://www.wagnardsoft.com/)
- [guru3d.com](https://www.guru3d.com/)

## Clean Install Steps

1. Download the official NVIDIA driver.
2. Create a restore point.
3. Boot into Safe Mode if using DDU.
4. Run DDU and select NVIDIA > Clean and restart.
5. Install the NVIDIA driver.
6. Choose clean installation when available.
7. Reboot and test before changing overlays or tuning.

## Optional Components

Install only what you use.

Common choices:

- NVIDIA graphics driver.
- NVIDIA App if you use game profiles, driver notifications, capture, or overlay features.
- HD Audio only if you use audio over HDMI or DisplayPort.
- PhysX when included.

Skip components you do not use.

## Overlay Configuration

Overlays can add background hooks and make troubleshooting harder.

Test with these disabled:

- NVIDIA overlay.
- Discord overlay.
- Steam overlay.
- Launcher overlays.
- Third-party monitoring overlays.

Re-enable only what you need.

## Shader and Cache Notes

After driver updates:

- Reboot before testing.
- Let games rebuild shader caches.
- Do not judge stutter during the first launch after a major driver change.
- Test the same area or benchmark path before comparing results.

## Laptop Notes

For laptops:

- Prefer OEM drivers if the laptop depends on vendor-specific power modes, MUX switching, or hybrid graphics behavior.
- Keep OEM utilities that control fan curves, MUX mode, charging limits, and performance profiles.
- Use NVIDIA drivers directly when the OEM driver is outdated and the laptop is known to support generic drivers.

## Troubleshooting

### Driver Crashes

- Remove GPU overclocks.
- Disable overlays.
- Clean-install the official driver.
- Check power cables and PSU stability on desktops.
- Test with a known-stable game or benchmark.

### Stutter

- Reboot after driver updates.
- Wait for shader compilation.
- Disable capture and overlays.
- Test without frame generation or upscaling first.
- Compare frame times, not only average FPS.

### Black Screen After Install

- Boot into Safe Mode.
- Run DDU.
- Install the official driver again.
- If the issue repeats, test another cable, monitor port, or previous official driver from NVIDIA.

## Avoid

- Repacked NVIDIA drivers.
- Driver booster utilities.
- Registry packs that disable large service groups.
- Removing NVIDIA services without knowing which feature uses them.
- Combining multiple overlay and capture tools while troubleshooting.
