# DNS

Public DNS Services - Complete Guide

## Overview

Public DNS services have evolved significantly in recent years, adding security features, privacy protections, and performance optimizations. Modern implementations emphasize encrypted protocols, integrated threat intelligence, and stricter privacy policies.

These services offer alternatives to ISP-provided DNS resolution while adding benefits such as malware protection, ad blocking, tracker filtering, and enhanced privacy.

## Key Technologies and Protocols

### Encrypted DNS Protocols

- DNS over HTTPS (DoH): encrypts DNS queries using HTTPS.
- DNS over TLS (DoT): secures DNS traffic using Transport Layer Security.
- DNS over QUIC (DoQ): uses the modern QUIC transport layer for encrypted DNS.

### Threat Intelligence Integration

Modern public DNS providers integrate multiple threat feeds to provide real-time protection against malicious domains, phishing sites, and malware distributors.

### Privacy Standards

Services increasingly adopt strict privacy policies. Some operate under favorable legal jurisdictions, such as Switzerland, for stronger privacy protection.

## Performance Comparison

Independent testing platforms such as [DNSPerf](https://www.dnsperf.com) and community benchmarks consistently show performance differences among major providers.

- Cloudflare often has superior raw speed, commonly 5 to 15 ms faster globally.
- Quad9 leads in out-of-the-box malware and phishing blocking, with 97%+ effectiveness in some independent evaluations.
- AdGuard excels at ad and tracker filtering without requiring additional software.

## Major Public DNS Providers

## Cloudflare DNS

Official site: [Cloudflare DNS](https://one.one.one.one)

Primary resolver: `1.1.1.1`

### Features

- Fast globally in many regions, often averaging 6 to 10 ms in Europe.
- Massive anycast network for optimal routing.
- No data selling policy.
- Optional malware blocking and family protection endpoints.

### Configuration Options

- Standard: `1.1.1.1` / `1.0.0.1`
- Malware Protection: `1.1.1.2` / `1.0.0.2`
- Family Protection: `1.1.1.3` / `1.0.0.3`

### Privacy Policy

Cloudflare provides a no-logging commitment, transparency reporting, and the WARP app for broader traffic encryption.

### Performance Metrics

- Global average speed: 7 to 15 ms.
- Privacy: excellent, with no IP logging commitment.
- Blocking coverage: basic by default, enhanced with optional endpoints.

## Quad9 DNS

Official site: [Quad9](https://quad9.net)

Primary resolver: `9.9.9.9`

### Features

- Non-profit organization with a security focus.
- Swiss-based operations under strict privacy laws.
- Aggregates 25+ threat feeds for real-time blocking.
- Blocks large volumes of threats daily.
- Strong effectiveness in independent evaluations.

### Configuration Options

- Standard Secure: `9.9.9.9` / `149.112.112.112`
- ECS Enabled: `9.9.9.11` / `149.112.112.111`
- Unsecured: `9.9.9.10` / `149.112.112.110`

### Performance Metrics

- Global average speed: 20 to 25 ms.
- Privacy: excellent, with Swiss privacy laws and no IP logging.
- Blocking coverage: 85% to 97% in many tests.

## AdGuard DNS

Official site: [AdGuard DNS](https://adguard-dns.io)

Primary resolver: `94.140.14.14`

### Features

- Specialized in ad and tracker blocking.
- No additional software installation required.
- Free service with no query limits.
- Supports post-quantum cryptography.
- Family protection options available.

### Configuration Options

- Default: `94.140.14.14` / `94.140.15.15`
- Family Protection: `94.140.14.15` / `94.140.15.16`
- Unfiltered: `94.140.14.16` / `94.140.15.17`

### Performance Metrics

- Global average speed: 15 to 25 ms.
- Privacy: very good, with no personal logging on public resolvers.
- Blocking coverage: high for ads, trackers, and security categories.

## Reality Check

### Security Limitations

- No complete protection: public DNS services are not full malware or phishing shields.
- Coverage range: DNS filtering typically blocks 60% to 90% of known bad domains, depending on threat feeds.
- Zero-day sites: new phishing sites and newly deployed malicious domains can bypass DNS blocking.
- Direct exploits: malicious executables and direct IP attacks bypass DNS entirely.

### Recommended Security Layering

For stronger protection, combine DNS services with:

- Common sense: avoid sketchy links and executable downloads.
- System updates: keep the OS and browser updated.
- Browser extensions: use [uBlock Origin](https://ublockorigin.com) and other security extensions.
- Antivirus software: use tools such as [Malwarebytes](https://www.malwarebytes.com) for risky downloads.
- Source selection: avoid pirated software and shady download sources.

## Setup Recommendations

### Encrypted DNS Configuration

- Use DoH or DoT to reduce ISP DNS snooping and local-network tracking.
- Windows 11 supports encrypted DNS under Settings > Network > Private DNS.
- Router-level configuration provides whole-home protection.

### Testing and Optimization

- Use tools such as [NameBench](https://code.google.com/archive/p/namebench/) or [DNSPerf](https://www.dnsperf.com) for regional latency testing.
- Always configure secondary DNS servers for redundancy.
- Monitor performance in your specific geographic location.

## Quick Reference

| Priority | Provider | Primary / Secondary IPs | Key Benefits | Blocking Coverage | Privacy Notes | Speed |
| --- | --- | --- | --- | --- | --- | --- |
| Strongest built-in malware and phishing blocking | Quad9 Secure | `9.9.9.9` / `149.112.112.112` | Non-profit, Swiss-based, 25+ threat feeds | 85% to 97% | No IP logging, Swiss privacy laws | 20 to 25 ms |
| Maximum speed and privacy | Cloudflare | `1.1.1.1` / `1.0.0.1` | Fast globally, massive network | Basic by default, use `1.1.1.2` for more | Strong no-logging commitment | 7 to 15 ms |
| Ads and trackers removal | AdGuard Default | `94.140.14.14` / `94.140.15.15` | Blocks ads, trackers, and malware at DNS level | High for ads and security | No personal logging | 15 to 25 ms |
| Parental controls | AdGuard Family | `94.140.14.15` / `94.140.15.16` | Adult content block and Safe Search | High for ads, adult content, and malware | Same as AdGuard public | Similar to Default |

## Advanced Options

### NextDNS

Official site: [NextDNS](https://nextdns.io)

- Highly customizable with blocklists and per-device profiles.
- Analytics and detailed reporting.
- Free tier with paid unlimited options.
- Combines AdGuard-style filtering with Quad9-style threat intelligence.
- A strong option for balanced security, privacy, and ad blocking.

## Best Practices for Implementation

### Network-Level Deployment

- Configure DNS at the router level for whole-network protection.
- Enable encrypted DNS protocols where supported.
- Implement secondary DNS for failover protection.

### Monitoring and Maintenance

- Regularly test performance with local benchmarks.
- Monitor blocking effectiveness and adjust as needed.
- Keep configurations updated when providers change endpoints or policies.

### Privacy Considerations

- Review privacy policies of chosen providers.
- Consider jurisdiction and legal frameworks.
- Evaluate data collection and retention practices.
