# Linux Install Checklist

Use this before replacing Windows, dual booting, or reinstalling an existing Linux system.

## Before You Download

- Back up personal files to an external drive.
- Export browser bookmarks, password manager vault data, recovery codes, and 2FA backup codes.
- If Windows uses BitLocker, save the recovery key before changing partitions or firmware settings.
- Check whether your Wi-Fi, Bluetooth, fingerprint reader, webcam, and GPU are known to work.
- Download the ISO only from the official distro website.
- Verify checksums or signatures when the distro provides them.
- Read the distro release notes before installing.

## Download Rules

| Distro | Use this path | Notes |
| :--- | :--- | :--- |
| Ubuntu | Official release pages | 24.04.4 LTS is the stable LTS download. Do not treat 26.04 as stable until final images are published. |
| Debian | Debian installer or live images | Debian 13.4 "trixie" is the current stable release. |
| Fedora | Fedora Workstation download page or Fedora Media Writer | Fedora 43 is the stable Workstation download; Fedora 44 Beta is for testing. |
| Linux Mint | Mint download page | Mint 22.3 "Zena" is the recommended Mint release. |
| Arch | Arch download page | The monthly ISO is an installer snapshot; existing installs update through `pacman`. |
| openSUSE | openSUSE Leap or Tumbleweed download pages | Leap 16.0 is fixed release; Tumbleweed is rolling. |

## USB Creation

Recommended sources:

- Fedora: use [Fedora Media Writer](https://fedoraproject.org/workstation/download/) from Fedora's download flow.
- Ubuntu: use the official Ubuntu download and verification instructions from [releases.ubuntu.com](https://releases.ubuntu.com/).
- Debian: use Debian's installer or live images from [debian.org](https://www.debian.org/distrib/).
- Arch: use the current Arch ISO from [archlinux.org/download](https://archlinux.org/download/).
- openSUSE: use checksums and signatures from the openSUSE download page.

Rules:

- Do not reuse a mystery USB made by someone else.
- Do not download ISOs from forum attachments, Discord, Telegram, or SEO download mirrors.
- If the installer fails to boot, remake the USB before blaming the distro.

## Live Session Test

Boot the live environment and test:

- Wi-Fi and Ethernet.
- Keyboard, touchpad, mouse, touchscreen.
- Display scaling and external monitors.
- Audio input and output.
- Bluetooth.
- Suspend and resume.
- Webcam.
- GPU acceleration.
- Printer or scanner if required.

If multiple basics fail in the live session, stop and check hardware notes before installing.

## Partitioning Choices

### Single-boot beginner install

Use the guided installer only after backup. This is simplest and usually safest.

### Dual boot

Dual boot is higher risk than it looks.

- Back up first.
- Shrink Windows from Windows Disk Management, not from a random partition tool.
- Disable Windows Fast Startup.
- Keep Windows and Linux boot entries separate when possible.
- Expect Windows feature updates or firmware changes to occasionally disturb boot order.

### Filesystem

| Filesystem | Use when | Notes |
| :--- | :--- | :--- |
| ext4 | You want simple and reliable | Best default for most users. |
| Btrfs | You want snapshots and rollback | Good with Timeshift, Snapper, Fedora, and openSUSE workflows. |
| XFS | Large Linux data volumes | Good server filesystem, not ideal for beginners who want shrink support. |
| NTFS | Shared Windows data only | Do not use NTFS as a Linux system or Proton game library filesystem. |

## Post-Install Basics

Update first:

```bash
# Debian, Ubuntu, Mint
sudo apt update
sudo apt upgrade

# Fedora
sudo dnf upgrade --refresh

# Arch
sudo pacman -Syu

# openSUSE Leap
sudo zypper refresh
sudo zypper update
```

Then:

- Reboot after kernel, Mesa, NVIDIA, firmware, or bootloader updates.
- Install GPU drivers through distro tools, not random driver bundle sites.
- Enable automatic security updates if the distro supports it and you understand the behavior.
- Set up backups before customizing.
- Save a list of installed apps.
- Test restore or snapshot rollback while the install is still clean.

## Official Sources

- Ubuntu downloads: [releases.ubuntu.com](https://releases.ubuntu.com/)
- Debian downloads: [debian.org/distrib](https://www.debian.org/distrib/)
- Fedora downloads: [fedoraproject.org/workstation/download](https://fedoraproject.org/workstation/download/)
- Linux Mint installation guide: [linuxmint-installation-guide.readthedocs.io](https://linuxmint-installation-guide.readthedocs.io/)
- Arch installation guide: [wiki.archlinux.org/title/Installation_guide](https://wiki.archlinux.org/title/Installation_guide)
- openSUSE Leap 16.0: [get.opensuse.org/leap/16.0](https://get.opensuse.org/leap/16.0/)
