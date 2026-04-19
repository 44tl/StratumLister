# Self-Hosting Starter Guide

Self-hosting gives you full control over your data, services, and privacy. This guide covers everything needed to get started safely and effectively - from choosing hardware and configuring Docker to securing services with reverse proxies and automated SSL certificates.

---

## Prerequisites

Before starting, ensure you have:

- **Basic networking knowledge** - understand IP addresses, DNS, ports, and firewalls
- **Command-line comfort** - you'll work with terminals, config files, and logs
- **Time for learning** - self-hosting is an ongoing process, not a one-time setup
- **Backup strategy** - know where your data lives and how to restore it
- **Risk tolerance** - you're responsible for security, updates, and reliability

Self-hosting is rewarding but requires active maintenance. If you need fully managed services, consider commercial alternatives first.

---

## Architecture Basics

Understand these core concepts before deploying anything:

| Component | Purpose | Common Choices |
|-----------|---------|----------------|
| **OS** | Foundation for everything | Ubuntu Server 24.04 LTS, Debian 12 |
| **Container runtime** | Isolates and runs services | Docker 27+ (most beginner-friendly) |
| **Orchestration** | Manages multi-service apps | Docker Compose v2 (start here), Kubernetes (advanced) |
| **Reverse proxy** | Routes external traffic, handles TLS | Traefik v3 (auto-config), Caddy 2 (simple), Nginx Proxy Manager (GUI) |
| **DNS** | Maps domain names to IP addresses | Cloudflare (free tier), Porkbun, Namecheap |
| **TLS/SSL** | Encrypts traffic | Let's Encrypt (free, automated) via reverse proxy |

**Simplest working architecture:**

```
Internet >  DNS (example.com) >  Your IP >  Router port forward / Tunnel >  Reverse proxy >  Docker container
```

Store all configuration files in version control (Git) from day one. Document every change you make.

---

## Choosing Your Host

### 1. Homelab (Local Hardware)

**Use when:** You want maximum control, have spare hardware, and don't need 100% uptime.

**Pros:** Full hardware control, no monthly fees, excellent learning environment.

**Cons:** You're responsible for power outages and hardware failures. Residential ISPs often block inbound ports or use dynamic IPs. Upload speeds are typically slower than download.

**Hardware recommendations:**
- **Entry level:** Intel N100 or N150 mini PC (16GB RAM, 512GB SSD) - widely available for $100-150
- **Balanced:** Used Dell OptiPlex 7090/7080 or Lenovo ThinkCentre M75q - excellent value on the used market
- **Storage:** Use ZFS (OpenZFS 2.2+) for redundancy and snapshot support
- **UPS:** Essential - protects data against power cuts and allows graceful shutdowns

### 2. VPS (Virtual Private Server)

**Use when:** You need reliable uptime, a static IP, and don't want hardware maintenance.

**Pros:** Static IP, 99.9%+ uptime, symmetric bandwidth, professional networking.

**Cons:** Monthly cost ($5-30/month for typical self-hosting workloads), limited hardware control.

**Recommended providers:**
- [Hetzner Cloud](https://www.hetzner.com/cloud/) - from €4.15/month, high-performance NVMe, great EU and US presence, best value overall
- [DigitalOcean Droplets](https://www.digitalocean.com/pricing/droplets) - from $6/month, excellent beginner documentation, clean interface
- [Vultr](https://www.vultr.com/pricing/) - from $6/month, 32 global data center locations

> **Avoid Oracle Cloud Free Tier** - well-documented reports of accounts being terminated without warning, persistent capacity shortages making free VMs hard to provision, and minimal support for free-tier users. It is not a reliable foundation for self-hosted services.

### 3. Hybrid Approach

Run public-facing services on a VPS and resource-heavy or private services on a homelab. Automate encrypted backups between both.

---

## Docker and Docker Compose

Docker is the standard for self-hosted deployments. Containers ensure consistency across environments and simplify updates.

### Installation

Always install Docker from Docker's own repository, not the `docker.io` package in Ubuntu's default repos - it is significantly outdated.

Official guides:
- [Docker Engine on Linux](https://docs.docker.com/engine/install/)
- [Post-installation steps for Linux](https://docs.docker.com/engine/install/linux-postinstall/)

**For Ubuntu/Debian:**
```bash
sudo apt update && sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
  -o /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] \
  https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update && sudo apt install \
  docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo usermod -aG docker $USER  # Log out and back in afterwards
```

Verify:
```bash
docker --version          # Should be 27.x or 28.x
docker compose version    # Should be v2.x
```

### Security Best Practices

See [Docker's official security guide](https://docs.docker.com/engine/security/) for full details.

1. **Never run containers as root** - set `user: "1000:1000"` in Compose files
2. **Pin image versions** - use `image: vaultwarden/server:1.33.0`, not `latest`
3. **Track image updates with Renovate** - [Renovate](https://docs.renovatebot.com/) creates pull requests for image updates, giving you control over what gets deployed and when
4. **Scan images for vulnerabilities** - use [Trivy](https://trivy.dev/) before deploying new images
5. **Set resource limits** - configure CPU and memory limits per container
6. **Use isolated Docker networks** - prevent cross-container access unless explicitly needed
7. **Mount volumes read-only where possible** - only volumes that need writes should be writable
8. **Drop unnecessary Linux capabilities** - principle of least privilege

**Secure Compose snippet:**
```yaml
services:
  vaultwarden:
    image: vaultwarden/server:1.33.0
    user: "1000:1000"
    restart: unless-stopped
    environment:
      - TZ=UTC
    volumes:
      - /srv/vaultwarden/data:/data
    networks:
      - internal
    deploy:
      resources:
        limits:
          cpus: "0.5"
          memory: 256M
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/alive"]
      interval: 30s
      timeout: 10s
      retries: 3
```

### Essential Compose Commands

```bash
docker compose up -d            # Start all services in background
docker compose logs -f          # Follow logs
docker compose ps               # Show running containers and status
docker compose stop             # Stop (data preserved in volumes)
docker compose down             # Stop and remove containers (volumes preserved)
docker compose pull             # Pull updated images
docker compose up -d            # Re-deploy after pulling
```

Use a `.env` file for all secrets and **add it to `.gitignore`** - never commit credentials to Git.

```bash
# .env file (never commit this)
POSTGRES_PASSWORD=use-a-strong-unique-password
ADMIN_TOKEN=generate-with-openssl-rand-base64-48
```

---

## Reverse Proxies

A reverse proxy routes internet traffic to the correct container and handles HTTPS termination. Choose one and stick with it.

### Traefik v3 (Recommended for Docker Users)

Traefik automatically discovers Docker containers via labels - minimal manual configuration needed. Current stable version is v3.6.

- [Traefik Documentation](https://doc.traefik.io/traefik/)
- [Traefik Docker Provider](https://doc.traefik.io/traefik/providers/docker/)
- [Traefik Let's Encrypt Setup](https://doc.traefik.io/traefik/https/acme/)

```yaml
services:
  traefik:
    image: traefik:3.6
    restart: unless-stopped
    command:
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--entrypoints.web.http.redirections.entrypoint.to=websecure"
      - "--certificatesresolvers.le.acme.tlschallenge=true"
      - "--certificatesresolvers.le.acme.email=you@example.com"
      - "--certificatesresolvers.le.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./letsencrypt:/letsencrypt
    networks:
      - proxy

  myapp:
    image: myapp:1.0.0
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.myapp.rule=Host(`app.yourdomain.com`)"
      - "traefik.http.routers.myapp.entrypoints=websecure"
      - "traefik.http.routers.myapp.tls.certresolver=le"
    networks:
      - proxy
      - internal

networks:
  proxy:
    external: true
  internal:
    driver: bridge
```

### Caddy 2 (Simplest Configuration)

Caddy has the simplest configuration of any reverse proxy and handles TLS entirely automatically.

- [Caddy Documentation](https://caddyserver.com/docs/)
- [Caddy Reverse Proxy Guide](https://caddyserver.com/docs/quick-starts/reverse-proxy)
- [Caddy Docker Image](https://hub.docker.com/_/caddy)

```
# Caddyfile - TLS is fully automatic, no extra configuration needed
nextcloud.yourdomain.com {
    reverse_proxy nextcloud:80
}

git.yourdomain.com {
    reverse_proxy forgejo:3000
}
```

### Nginx Proxy Manager (GUI Option)

Web-based UI - no config files required. A good choice if you prefer managing proxies visually.

- [Nginx Proxy Manager Documentation](https://nginxproxymanager.com/guide/)
- [Setup Guide](https://nginxproxymanager.com/setup/)

---

## Remote Access Without Opening Router Ports

### Cloudflare Tunnel (Free - Recommended)

Creates an encrypted outbound tunnel from your server to Cloudflare's edge. No inbound ports, no dynamic DNS needed. Includes DDoS protection.

- [Cloudflare Tunnel Documentation](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/)
- [cloudflared on GitHub](https://github.com/cloudflare/cloudflared)

```yaml
# Add to your existing docker-compose.yml
cloudflared:
  image: cloudflare/cloudflared:latest
  restart: unless-stopped
  command: tunnel --no-autoupdate run
  environment:
    - TUNNEL_TOKEN=${CLOUDFLARE_TUNNEL_TOKEN}
```

Get `TUNNEL_TOKEN` from the Cloudflare Zero Trust dashboard. No config file needed with this method.

### Tailscale (Private Access Only)

For services you only want accessible from your own devices - not publicly exposed. Uses WireGuard under the hood.

- [Tailscale Documentation](https://tailscale.com/kb/)
- [Tailscale in Docker](https://tailscale.com/kb/1282/docker)

---

## SSL/TLS Certificates

### Let's Encrypt (Free and Automatic)

Free, browser-trusted certificates with automatic 90-day renewal. If you're using Traefik or Caddy, this is handled entirely for you with no extra steps. For standalone Nginx setups, use Certbot:

- [Let's Encrypt Getting Started](https://letsencrypt.org/getting-started/)
- [Certbot Documentation](https://certbot.eff.org/docs/)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
# Auto-renewal is handled by a systemd timer installed automatically
systemctl status certbot.timer
```

---

## Self-Hosted Applications

### Nextcloud (File Sync and Collaboration)

The most complete self-hosted Google Workspace alternative - file sync, calendar, contacts, and collaborative documents. Currently on version 33 (Hub 26 Winter), with version 32 also still supported.

- [Nextcloud Admin Manual](https://docs.nextcloud.com/server/stable/admin_manual/)
- [Nextcloud Docker Hub](https://hub.docker.com/_/nextcloud)
- [Nextcloud All-in-One](https://github.com/nextcloud/all-in-one) - recommended for most users; handles Redis, database, backups, and certificates automatically

**Requirements:** 2GB+ RAM, PostgreSQL or MariaDB database.

```yaml
services:
  nextcloud:
    image: nextcloud:33
    restart: unless-stopped
    environment:
      - POSTGRES_HOST=nextcloud-db
      - POSTGRES_DB=nextcloud
      - POSTGRES_USER=nextcloud
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - NEXTCLOUD_TRUSTED_DOMAINS=cloud.yourdomain.com
      - OVERWRITEPROTOCOL=https
    volumes:
      - nextcloud_data:/var/www/html
    networks:
      - internal
    depends_on:
      - nextcloud-db

  nextcloud-db:
    image: postgres:17-alpine
    restart: unless-stopped
    environment:
      - POSTGRES_DB=nextcloud
      - POSTGRES_USER=nextcloud
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    volumes:
      - nextcloud_db:/var/lib/postgresql/data
    networks:
      - internal
```

### Vaultwarden (Password Manager)

Lightweight, Bitwarden-compatible password manager written in Rust. Works with all official Bitwarden apps and browser extensions on every platform.

- [Vaultwarden Wiki](https://github.com/dani-garcia/vaultwarden/wiki)
- [Vaultwarden on Docker Hub](https://hub.docker.com/r/vaultwarden/server)

**Requires HTTPS.** Set `SIGNUPS_ALLOWED=false` after creating your account.

```yaml
services:
  vaultwarden:
    image: vaultwarden/server:latest
    restart: unless-stopped
    environment:
      - WEBSOCKET_ENABLED=true
      - SIGNUPS_ALLOWED=false
      - ADMIN_TOKEN=${ADMIN_TOKEN}
    volumes:
      - vaultwarden_data:/data
    networks:
      - internal
```

Generate a secure admin token: `openssl rand -base64 48`

### Forgejo (Git Repository Hosting)

Forgejo is the community-maintained fork of Gitea and a strong default choice for self-hosted Git. It is more actively developed, fully open-source with no corporate governance concerns, and is used by major projects including Fedora. It is a drop-in replacement for Gitea.

- [Forgejo Documentation](https://forgejo.org/docs/latest/)
- [Forgejo Docker Installation](https://forgejo.org/docs/latest/admin/installation-docker/)

```yaml
services:
  forgejo:
    image: codeberg.org/forgejo/forgejo:10
    restart: unless-stopped
    environment:
      - USER_UID=1000
      - USER_GID=1000
      - FORGEJO__database__DB_TYPE=postgres
      - FORGEJO__database__HOST=forgejo-db:5432
      - FORGEJO__database__NAME=forgejo
      - FORGEJO__database__USER=forgejo
      - FORGEJO__database__PASSWD=${FORGEJO_DB_PASSWORD}
    volumes:
      - forgejo_data:/data
      - /etc/localtime:/etc/localtime:ro
    depends_on:
      - forgejo-db
    networks:
      - internal

  forgejo-db:
    image: postgres:17-alpine
    restart: unless-stopped
    environment:
      - POSTGRES_USER=forgejo
      - POSTGRES_PASSWORD=${FORGEJO_DB_PASSWORD}
      - POSTGRES_DB=forgejo
    volumes:
      - forgejo_db:/var/lib/postgresql/data
    networks:
      - internal
```

### Jellyfin (Media Server)

Free, open-source media server with no license fees, no account requirements, and no telemetry. Stream video and music to any device.

- [Jellyfin Documentation](https://jellyfin.org/docs/)
- [Hardware Acceleration Guide](https://jellyfin.org/docs/general/administration/hardware-acceleration/)

```yaml
services:
  jellyfin:
    image: jellyfin/jellyfin:latest
    restart: unless-stopped
    user: "1000:1000"
    volumes:
      - /path/to/media:/media:ro
      - jellyfin_config:/config
      - jellyfin_cache:/cache
    networks:
      - internal
    # Uncomment for Intel Quick Sync hardware transcoding:
    # devices:
    #   - /dev/dri:/dev/dri
```

### Home Assistant (Smart Home)

Unified local smart home platform. Thousands of integrations, powerful automations, no mandatory cloud dependency.

- [Home Assistant Installation](https://www.home-assistant.io/installation/linux/)
- [Home Assistant Container Docs](https://www.home-assistant.io/installation/linux#docker-compose)

```yaml
services:
  homeassistant:
    image: ghcr.io/home-assistant/home-assistant:stable
    restart: unless-stopped
    privileged: true
    network_mode: host      # Required for mDNS and local device discovery
    volumes:
      - /srv/homeassistant/config:/config
      - /etc/localtime:/etc/localtime:ro
    environment:
      - TZ=Europe/Istanbul
```

**Recommendation:** Use a dedicated machine or VM. Direct hardware access is needed for Zigbee/Z-Wave USB dongles and local device discovery works better without network isolation.

### Immich (Photo Library)

The most actively developed self-hosted Google Photos alternative. Excellent mobile apps with automatic backup, face recognition, and smart search.

- [Immich Documentation](https://immich.app/docs/overview/introduction)
- [Immich Docker Compose](https://immich.app/docs/install/docker-compose)

> **Important:** Always use the [official docker-compose.yml](https://github.com/immich-app/immich/releases/latest/download/docker-compose.yml) directly from Immich's releases. The compose file changes frequently between versions and copying it from a guide can cause issues.

---

## Monitoring

### Uptime Kuma (Service Uptime)

Simple self-hosted uptime monitoring with a clean UI. Alerts via Telegram, Discord, email, Slack, and more. The minimum viable monitoring setup for any self-hosted stack.

- [Uptime Kuma on GitHub](https://github.com/louislam/uptime-kuma)

```yaml
services:
  uptime-kuma:
    image: louislam/uptime-kuma:1
    restart: unless-stopped
    volumes:
      - uptime_kuma_data:/app/data
    ports:
      - "3001:3001"
```

### Grafana + Prometheus (Full Metrics Stack)

For detailed system and application metrics with dashboards and alerting.

- [Grafana Documentation](https://grafana.com/docs/grafana/latest/)
- [Prometheus Getting Started](https://prometheus.io/docs/prometheus/latest/getting_started/)
- [Node Exporter](https://github.com/prometheus/node_exporter) - exposes host system metrics to Prometheus

```yaml
services:
  prometheus:
    image: prom/prometheus:latest
    restart: unless-stopped
    volumes:
      - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml:ro
      - prom_data:/prometheus
    networks:
      - monitoring

  node-exporter:
    image: prom/node-exporter:latest
    restart: unless-stopped
    pid: host
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
    command:
      - "--path.procfs=/host/proc"
      - "--path.sysfs=/host/sys"
      - "--path.rootfs=/rootfs"
    networks:
      - monitoring

  grafana:
    image: grafana/grafana:latest
    restart: unless-stopped
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=${GRAFANA_PASSWORD}
    volumes:
      - grafana_data:/var/lib/grafana
    ports:
      - "3000:3000"
    depends_on:
      - prometheus
    networks:
      - monitoring
```

Import [Grafana dashboard #1860](https://grafana.com/grafana/dashboards/1860) for a ready-made system overview.

---

## Backups

A service isn't truly self-hosted if you can't recover from a disk failure. Backups are not optional.

### Principles

1. **3-2-1 rule** - 3 copies, 2 different media types, 1 offsite
2. **Test your restores** - a backup you've never restored from is not a real backup
3. **Automate everything** - manual backup jobs get forgotten
4. **Encrypt all offsite data** - never send plaintext data to cloud storage

### Restic (Recommended)

Fast, encrypted, deduplicated backups to almost any backend: Backblaze B2, S3-compatible storage, SFTP, or local.

- [Restic Documentation](https://restic.readthedocs.io/en/stable/)

```bash
# Initialize a repository on Backblaze B2
export RESTIC_PASSWORD_FILE=/root/.restic-password
restic -r b2:your-bucket:/backups init

# Back up your services data
restic -r b2:your-bucket:/backups backup /srv \
  --tag services \
  --exclude /srv/*/cache

# Restore a snapshot
restic -r b2:your-bucket:/backups restore latest --target /tmp/restore-test

# Prune old snapshots (keep 7 daily, 4 weekly, 3 monthly)
restic -r b2:your-bucket:/backups forget --prune \
  --keep-daily 7 --keep-weekly 4 --keep-monthly 3
```

**Automate with cron:**
```bash
# /etc/cron.d/restic
0 3 * * * root restic -r b2:your-bucket:/backups backup /srv \
  --password-file /root/.restic-password --quiet
```

### Offsite Storage Options

| Provider | Cost | Notes |
|----------|------|-------|
| [Backblaze B2](https://www.backblaze.com/cloud-storage) | $0.006/GB/month | Native Restic support, proven reliability |
| [Wasabi](https://wasabi.com/pricing/) | $7.99/TB/month flat | No egress fees, S3-compatible |
| [Hetzner Storage Box](https://www.hetzner.com/storage/storage-box/) | From €3.81/month (1TB) | SFTP + native Borg support, excellent EU option |
| [Cloudflare R2](https://www.cloudflare.com/developer-platform/r2/) | $0.015/GB/month | Zero egress fees, S3-compatible |

---

## Security Hardening

A fresh server needs to be locked down before you expose anything to the internet.

### Firewall (UFW)

Reference: [Ubuntu UFW Guide](https://ubuntu.com/server/docs/firewalls)

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp          # SSH (or your custom port)
sudo ufw allow 80/tcp          # HTTP (for ACME challenges)
sudo ufw allow 443/tcp         # HTTPS
sudo ufw enable
sudo ufw status verbose
```

### SSH Hardening

Edit `/etc/ssh/sshd_config`:

```
Port 2222                       # Change from default 22
PermitRootLogin no
PasswordAuthentication no       # SSH keys only - no passwords
PubkeyAuthentication yes
MaxAuthTries 3
AllowUsers yourusername
X11Forwarding no
ClientAliveInterval 300
ClientAliveCountMax 2
```

```bash
sudo systemctl restart sshd
```

Generate a key on your local machine and copy it to the server:
```bash
ssh-keygen -t ed25519 -C "your@email.com"
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@yourserver
```

### Fail2Ban

Automatically bans IPs after repeated failed authentication attempts.

- [Fail2Ban Documentation](https://fail2ban.readthedocs.io/en/latest/)

```bash
sudo apt install fail2ban
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
# In jail.local, recommended settings:
#   bantime  = 1h
#   findtime = 10m
#   maxretry = 3
sudo systemctl enable --now fail2ban
sudo fail2ban-client status    # Verify active jails
```

### Automatic Security Updates

```bash
sudo apt install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
# Verify with a dry run:
sudo unattended-upgrade --dry-run --debug
```

---

## Maintenance

Self-hosting is 10% initial setup, 90% ongoing maintenance.

### Update Schedule

| Component | Frequency | Method |
|-----------|-----------|--------|
| OS security patches | Automatic | unattended-upgrades |
| Docker images | When CVEs announced, or monthly | `docker compose pull && docker compose up -d` |
| SSL certificates | Automatic | certbot.timer or reverse proxy built-in ACME |
| Reverse proxy config | Quarterly review | Manual audit |

### Routine Health Checks

```bash
# Review recent container logs
docker compose logs --tail=200 --since=24h

# Check disk usage
df -h && du -sh /srv/*

# List running containers and uptime
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.RunningFor}}"
```

### Documentation

Keep a `README.md` alongside your Compose files with:
- Which services are deployed and their current versions
- Where credentials are stored (reference your password manager, never store them in plaintext)
- Backup schedule and step-by-step restore procedure
- What to do if a specific service goes down

---

## Before Exposing Anything to the Internet

Work through this checklist for every service before pointing a public domain at it:

1. Strong unique password and 2FA enabled where supported
2. Running the latest version - check [CVE Search](https://cve.mitre.org/cve/search_cve_list.html) for known issues
3. HTTPS configured with a valid Let's Encrypt certificate
4. Firewall exposes only ports 80 and 443 externally
5. Admin interfaces not on default paths where possible
6. Fail2Ban watching authentication logs
7. Backups running and a test restore completed successfully
8. Recovery plan documented (what to do if the service is compromised)
9. TLS 1.2+ enforced (handled by your reverse proxy)
10. Rate limiting configured on the reverse proxy

**Run services internally for 2-4 weeks before public exposure.** This surfaces configuration issues before they can lead to data exposure.

---

## Common Pitfalls

| Mistake | Why It's Bad | Fix |
|---------|--------------|-----|
| Using `latest` image tag | Breaks unpredictably, impossible to roll back | Pin to specific versions: `vaultwarden/server:1.33.0` |
| No offsite backups | One hardware failure = total data loss | Weekly encrypted backups to Backblaze B2 or similar |
| Databases exposed to the internet | DBs have weak default auth; direct exposure leads to compromise | Only expose the reverse proxy; keep databases on internal Docker networks |
| Default credentials not changed | Automated scanners test defaults within minutes of a service going online | Change all defaults before first use |
| Ignoring CVE notices | Unpatched vulnerabilities get actively exploited | Subscribe to security announcements for every service you run |
| Opening all router ports | Huge attack surface for no benefit | Reverse proxy on 80/443 only; everything else blocked |
| Running containers as root | Compromised container = root access to the host | Non-root users in all containers |
| No monitoring | Silent failures go undetected for days | Uptime Kuma as a bare minimum |
| Secrets committed to Git | Credentials leaked permanently in history | `.env` files in `.gitignore` only |
| Never testing restores | Untested backups often fail when you need them | Restore from backup to a test directory at least quarterly |

---

## Getting Help

- Official documentation for each project (linked throughout this guide) is always the best first stop
- [r/selfhosted](https://www.reddit.com/r/selfhosted/) - active community; search before posting
- [selfh.st](https://selfh.st/) - curated self-hosted app directory and weekly newsletter
- [Awesome Self-Hosted](https://github.com/awesome-selfhosted/awesome-selfhosted) - comprehensive, community-maintained app list on GitHub
- GitHub Issues for each project - search existing issues before opening a new one
