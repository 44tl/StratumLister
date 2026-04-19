# Linux Overview

Current Linux notes for desktop installs, gaming, hardware support, security, and maintenance.

## Start Here

- New to Linux: read [Linux Distro Picker](#linux-distro-picker), then [Linux Install Checklist](#linux-install-checklist).
- Gaming PC or handheld-style setup: read [Linux Gaming](#linux-gaming), then [Linux Drivers & Hardware](#linux-drivers-hardware).
- Existing Linux user: read [Linux Package Management](#linux-package-management), then [Linux Maintenance](#linux-maintenance).
- Privacy or security focused setup: read [Linux Security & Privacy](#linux-security-privacy) before installing random tools.

## Current Snapshot

| Area | Current state | Practical call |
| :--- | :--- | :--- |
| Ubuntu | Ubuntu 24.04.4 LTS is the current LTS download. Ubuntu 25.10 is the current interim release. Ubuntu 26.04 LTS is still in development until final images are published. | Use 24.04 LTS for stable installs today. Wait for published final 26.04 images before using it on a main machine. |
| Debian | Debian 13.4 "trixie" is current stable. Debian 13.0 first shipped August 9, 2025. | Best for predictable base systems, servers, and users who do not need the newest desktop stack. |
| Linux Mint | Linux Mint 22.3 "Zena" is the recommended Mint release and is supported until April 2029. | Best Windows-to-Linux default for normal desktops and older laptops. |
| Fedora | Fedora Workstation 43 is the stable download. Fedora Linux 44 Beta is available for testing. | Use Fedora 43 for stable installs until Fedora's download pages switch to 44 final. |
| Arch | Arch is rolling. The current installer snapshot ships a recent kernel and install environment. | Good for advanced users who read update notes and can repair breakage. |
| openSUSE Leap | Leap 16.0 is current. Leap 16.1 Alpha is available for testing, not normal daily use. | Good fixed-release option for users who like YaST, Btrfs snapshots, and enterprise-style defaults. |
| Kernel | kernel.org lists Linux 7.0 as mainline, 6.19.13 as stable, and 6.18/6.12/6.6/6.1/5.15/5.10 as longterm branches. | Do not chase kernel.org manually on a normal desktop. Use the kernel shipped by your distribution unless you have a specific hardware need. |

## What To Pick Quickly

| Use case | Pick | Why |
| :--- | :--- | :--- |
| First Linux desktop | Linux Mint 22.3 Cinnamon | Familiar layout, conservative base, easy Driver Manager, straightforward updates. |
| Newer laptop or developer workstation | Fedora Workstation 43 | Newer desktop stack and kernel than LTS distros without going rolling. |
| Gaming appliance or handheld-style PC | Bazzite stable | Fedora Atomic base, gaming defaults, rollback-friendly updates. |
| Server or lab machine | Debian 13 | Stable package base and long support path. |
| Learning Linux deeply | Arch | Forces you to understand the system, but it expects maintenance discipline. |
| KDE fixed-release desktop | openSUSE Leap 16.0 | Stable base, strong admin tooling, snapshot-friendly defaults. |

## Maintenance Rules

- Keep system packages from your distribution repositories when possible.
- Use Flatpak for desktop apps that need fresher versions than your distro ships.
- Check whether a Flathub app is verified before trusting it with sensitive data.
- Avoid random `curl | sh` installers unless the official project documents the command and you read it first.
- On rolling releases, read official news before major upgrades.
- Keep a backup before kernel, driver, bootloader, or filesystem changes.

## Official Sources

- Ubuntu releases: [releases.ubuntu.com](https://releases.ubuntu.com/)
- Ubuntu release schedule: [documentation.ubuntu.com](https://documentation.ubuntu.com/release-notes/26.04/schedule/)
- Fedora Workstation download: [fedoraproject.org/workstation/download](https://fedoraproject.org/workstation/download/)
- Fedora 44 schedule: [fedorapeople.org/groups/schedule/f-44](https://fedorapeople.org/groups/schedule/f-44/f-44-key-tasks.html)
- Debian stable: [debian.org/releases/stable](https://www.debian.org/releases/stable/)
- Linux Mint releases: [linuxmint.com/download_all.php](https://www.linuxmint.com/download_all.php)
- Arch releases: [archlinux.org/releng/releases](https://archlinux.org/releng/releases/)
- openSUSE Leap 16.0: [get.opensuse.org/leap/16.0](https://get.opensuse.org/leap/16.0/)
- Kernel releases: [kernel.org](https://www.kernel.org/)
