# Linux Drivers & Hardware

Most Linux driver work should be handled by the distribution. Manual driver installers are the exception, not the default.

## Kernel Status

kernel.org currently lists:

- Mainline: Linux 7.0.
- Stable: Linux 6.19.13.
- Longterm: Linux 6.18, 6.12, 6.6, 6.1, 5.15, and 5.10 branches.

Use your distro kernel unless:

- Your hardware is too new for the shipped kernel.
- A vendor or distro support page tells you to use an HWE, OEM, or newer kernel.
- You can recover if the new kernel fails.

## GPU Guidance

### AMD

AMD desktop GPUs usually work best with the distro kernel, Mesa, and firmware packages. If a very new GPU acts broken on an older LTS distro, the fix is usually a newer kernel, Mesa, or firmware stack, not a random installer.

### Intel

Intel integrated GPUs and Arc cards depend heavily on kernel, Mesa, and firmware freshness. Fedora, Arch, openSUSE Tumbleweed, and recent Ubuntu HWE stacks are usually better for new Intel hardware than older LTS images.

### NVIDIA

Use the distro's NVIDIA packaging path.

- Ubuntu and Mint: use Driver Manager or the distro-supported driver flow.
- Fedora: use the documented Fedora/RPM Fusion path if you need proprietary NVIDIA drivers.
- Arch: read Arch News before upgrading NVIDIA systems.
- openSUSE: use the documented openSUSE repository path.

Important current note: Arch's NVIDIA 590 update drops Pascal and older support from the main NVIDIA packages and moves Turing/newer users to open kernel modules. GTX 10xx and older users need the legacy path described by Arch.

## Linux Mint 22.3 Caveat

Mint 22.2 and 22.3 ship HWE Kernel 6.14 for newer AMD processor support. Mint documents issues with VirtualBox and old NVIDIA cards using the 470 driver. If you are affected, Mint recommends installing 22.1 first, then upgrading to 22.3 without switching to the HWE kernel.

## Wi-Fi and Bluetooth

Before installing on a laptop:

- Search the exact adapter model.
- Test Wi-Fi in the live session.
- Keep a USB Ethernet or USB tethering fallback.
- Avoid replacing the whole distro before checking firmware packages.

Common fix order:

1. Update system packages.
2. Reboot.
3. Install missing firmware from distro repositories.
4. Check Secure Boot if a DKMS module is involved.
5. Check logs with `dmesg` and `journalctl`.

## Firmware Updates

Many systems can update firmware through fwupd / LVFS if the vendor participates.

```bash
fwupdmgr get-devices
fwupdmgr refresh
fwupdmgr get-updates
fwupdmgr update
```

Do firmware updates on AC power. Do not interrupt them.

## Secure Boot

Secure Boot can work on Linux, but unsigned third-party kernel modules can complicate NVIDIA, VirtualBox, and some Wi-Fi drivers.

Do not blindly disable Secure Boot as a first step. Check your distro's signed driver path first. If you disable it, document the change and understand the Windows BitLocker impact.

## Laptop Checklist

Test these before committing to a distro:

- Suspend and resume.
- Lid close behavior.
- External monitor hotplug.
- Hybrid graphics switching.
- Battery drain during sleep.
- Function keys.
- Fingerprint reader.
- Webcam.
- Touchpad gestures.

## Official Sources

- Kernel releases: [kernel.org](https://www.kernel.org/)
- Kernel release categories: [kernel.org/releases.html](https://www.kernel.org/releases.html)
- Mesa release notes: [docs.mesa3d.org/relnotes](https://docs.mesa3d.org/relnotes.html)
- Linux Mint 22.3 release notes: [linuxmint.com/rel_zena.php](https://www.linuxmint.com/rel_zena.php)
- Arch NVIDIA 590 note: [archlinux.org/news](https://archlinux.org/news/nvidia-590-driver-drops-pascal-support-main-packages-switch-to-open-kernel-modules/)
- fwupd project: [fwupd.org](https://fwupd.org/)
