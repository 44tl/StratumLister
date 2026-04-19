# Linux Maintenance

Linux maintenance should be boring: update, reboot when needed, keep backups, read release notes, and avoid mixing package sources.

## Weekly Routine

- Apply updates.
- Reboot if kernel, driver, firmware, systemd, Mesa, or libc changed.
- Update Flatpak apps.
- Confirm backups ran.
- Check available disk space.
- Read official news for rolling releases.

## Update Commands

```bash
# Debian, Ubuntu, Mint
sudo apt update
sudo apt upgrade
sudo apt autoremove

# Fedora
sudo dnf upgrade --refresh
sudo dnf autoremove

# Arch
sudo pacman -Syu

# openSUSE Leap
sudo zypper refresh
sudo zypper update

# openSUSE Tumbleweed
sudo zypper dup

# Flatpak
flatpak update
flatpak uninstall --unused
```

## Snapshot Strategy

Snapshots are not backups, but they are useful rollback points.

| Tool | Best fit |
| :--- | :--- |
| Timeshift | Mint and simple desktop rollback workflows. |
| Snapper | openSUSE and Btrfs-heavy systems. |
| Btrfs snapshots | Fedora and advanced setups. |
| Full image backup | Major distro upgrades, repartitioning, and risky driver work. |

Keep at least one external backup. Snapshots on the same disk do not help if the disk dies.

## Logs and Diagnostics

Useful commands:

```bash
# Current boot warnings and errors
journalctl -p warning..alert -b

# Kernel messages
dmesg --level=err,warn

# Disk usage by filesystem
df -h

# Biggest directories under current path
du -h --max-depth=1 | sort -h

# System information
uname -a
```

## Broken Update Flow

1. Stop installing more tools.
2. Reboot into the previous kernel if the boot menu offers one.
3. Use a snapshot rollback if configured.
4. Check distro news for required manual intervention.
5. Remove recently added third-party repositories.
6. Ask in the distro's official forum with logs and exact package manager output.

## Major Upgrade Rules

- Read release notes first.
- Back up first.
- Remove unused third-party repositories first.
- Update the current release fully before upgrading.
- Reboot before and after.
- Do not upgrade over a broken system and expect the upgrade to fix it.

## Rolling Release Rules

For Arch and Tumbleweed:

- Do not do partial upgrades.
- Read official news before large updates.
- Keep a live USB available.
- Keep package cache or snapshots long enough to roll back.
- Expect occasional manual intervention.

## Official Sources

- Arch News: [archlinux.org/news](https://archlinux.org/news/)
- Fedora upgrade docs: [docs.fedoraproject.org](https://docs.fedoraproject.org/en-US/quick-docs/upgrading-fedora-offline/)
- Debian release notes: [debian.org/releases/stable/releasenotes](https://www.debian.org/releases/stable/releasenotes)
- Linux Mint release notes: [linuxmint.com/rel_zena.php](https://www.linuxmint.com/rel_zena.php)
- openSUSE Leap release notes: [doc.opensuse.org/release-notes](https://doc.opensuse.org/release-notes/x86_64/openSUSE/Leap/16.0/html/release-notes-leap-160/index.html)
