# Security Toolkit

Verified tools for practical account, browser, device, and file security.

## Use This List Correctly

This is not a ranking and it is not a yearly list. Pick tools based on your threat model, platform, and tolerance for maintenance.

Rules:

- Download from official project sites only.
- Prefer open-source tools when the security model benefits from public review.
- Avoid stacking tools that do the same job unless you understand the overlap.
- Test changes one at a time.
- Keep recovery codes and backups outside the account or vault they recover.

## Browser and Web Protection

### Firefox

Official site: [mozilla.org/firefox](https://www.mozilla.org/firefox/)

Good default browser for users who want broad compatibility, extension support, and strong update discipline.

Use when:

- You want a mainstream browser that is not Chromium-based.
- You rely on extensions such as uBlock Origin.
- You need reliable site compatibility.

### LibreWolf

Official site: [librewolf.net](https://librewolf.net/)

Firefox-based browser focused on privacy, reduced telemetry, and stronger defaults.

Use when:

- You want hardened defaults without hand-editing many browser settings.
- You can tolerate occasional site compatibility adjustments.
- You want uBlock Origin included by default.

### Tor Browser

Official site: [torproject.org/download](https://www.torproject.org/download/)

Use Tor Browser for anonymity-focused browsing, censorship resistance, and separating sensitive browsing from normal accounts.

Important:

- Do not install random extensions into Tor Browser.
- Do not use it as your normal logged-in browser.
- Download it only from the Tor Project or official mirrors.

### uBlock Origin

Official project: [github.com/gorhill/uBlock](https://github.com/gorhill/uBlock)

Wide-spectrum content blocker for ads, trackers, malware domains, coin miners, and abusive web behavior.

Use one content blocker at a time. Stacking blockers can cause breakage and weaker filtering.

## Accounts and Authentication

### Bitwarden

Official site: [bitwarden.com](https://bitwarden.com/)

Password manager with open-source transparency, cross-platform support, and zero-knowledge vault design.

Use when:

- You need sync across devices.
- You want a simple setup for personal or family use.
- You want browser, desktop, and mobile support.

### KeePassXC

Official site: [keepassxc.org](https://keepassxc.org/)

Local-first password manager with no required cloud account.

Use when:

- You want full control of the vault file.
- You prefer offline storage.
- You already have a separate backup strategy.

### Ente Auth

Official site: [ente.io/auth](https://ente.io/auth/)

Authenticator app with encrypted sync.

Use when:

- You want TOTP codes synced across devices.
- You want an authenticator separate from your password manager.

### YubiKey

Official site: [yubico.com](https://www.yubico.com/)

Hardware security key for phishing-resistant multi-factor authentication.

Use when:

- You want strong protection for email, password manager, domain registrar, banking, or admin accounts.
- You can buy and register at least two keys so one can be kept as backup.

## Communication

### Signal

Official site: [signal.org/download](https://signal.org/download/)

Encrypted messaging for personal communication.

Use when:

- You need end-to-end encrypted chats and calls.
- The other person can also use Signal.
- You want a mainstream private messenger with simple onboarding.

## DNS and Network Filtering

### Quad9

Official site: [quad9.net](https://quad9.net/)

Security-focused DNS resolver with malware and phishing domain blocking.

### Cloudflare DNS

Official site: [one.one.one.one](https://one.one.one.one/)

Fast public DNS resolver with optional malware and family filtering endpoints.

### AdGuard DNS

Official site: [adguard-dns.io](https://adguard-dns.io/)

DNS resolver focused on ad, tracker, and security filtering.

### NextDNS

Official site: [nextdns.io](https://nextdns.io/)

Configurable DNS filtering with blocklists, per-device profiles, and logs you can control.

## File and Disk Protection

### VeraCrypt

Official site: [veracrypt.io](https://veracrypt.io/en/Home.html)

Disk and container encryption for local files, external drives, and sensitive archives.

Use when:

- You need offline encrypted containers.
- You need full-disk or removable-drive encryption.
- You can safely store the password and recovery material.

### Cryptomator

Official site: [cryptomator.org](https://cryptomator.org/)

Client-side encryption for files stored in cloud sync folders.

Use when:

- You want cloud storage encryption without managing a full encrypted disk.
- You need individual vaults for projects, documents, or recovery codes.

## Backup and Sync

### Syncthing

Official site: [syncthing.net](https://syncthing.net/)

Peer-to-peer file synchronization between your own devices.

Important: sync is not backup by itself. Deleted or corrupted files can sync too.

### FreeFileSync

Official site: [freefilesync.org](https://freefilesync.org/)

Folder comparison and synchronization tool for local and external-drive backups.

### restic

Official site: [restic.net](https://restic.net/)

Encrypted, deduplicated backup tool for local, remote, and cloud storage targets.

### BorgBackup

Official site: [borgbackup.org](https://www.borgbackup.org/)

Deduplicating backup tool with compression and authenticated encryption.

## Baseline Setup

Good default stack:

- Firefox or LibreWolf.
- uBlock Origin.
- Bitwarden or KeePassXC.
- Ente Auth plus backup codes stored outside the vault.
- Quad9, Cloudflare, AdGuard DNS, or NextDNS.
- VeraCrypt or Cryptomator for sensitive recovery material.
- FreeFileSync, Syncthing, restic, or BorgBackup for backups.

## Avoid

- Repacked installers.
- Browser extension clones.
- One-click security packs.
- Unknown VPN bundles.
- Password managers with unclear export or recovery behavior.
- Tools promoted mostly through ads, scare pages, or affiliate lists.
