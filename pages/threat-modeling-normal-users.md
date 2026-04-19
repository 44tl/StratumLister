# Threat Modeling

A Practical Guide for Threat Modeling

## Complete Privacy and Security Framework

Threat modeling is the foundational step in any privacy or security strategy. It helps you focus on realistic concerns instead of chasing perfect protection, which does not exist.

Effective threat modeling recognizes that everything involves trade-offs. Stronger security tools often sacrifice usability, convenience, or cost. The goal is to reach an acceptable protection level for your actual circumstances.

## Core Principles

### Reality-Based Approach

- Focus on realistic concerns rather than theoretical what-if scenarios.
- Acknowledge that zero exposure is impossible to achieve.
- Accept that all security measures involve trade-offs.
- Balance protection level with practical usability.

### Individual Tailoring

- Customize security measures to personal circumstances.
- Recognize that one size fits all approaches rarely work.
- Adapt strategies based on changing life situations.
- Regularly reassess and update your security posture.

## The Five Core Questions

## 1. What do I want to protect?

Identify valuable digital assets by category.

### Communications

- Emails: personal, professional, and sensitive correspondence.
- Messages: Signal, WhatsApp, Telegram, and other chat applications.
- Contacts: personal and professional contact information.

### Data

- Files and photos: personal documents, photos, and multimedia content.
- Cloud storage: data hosted on third-party services.
- Local storage: information stored on personal devices.
- Financial data: banking, investment, and payment information.

### Behavioral Patterns

- Location history: GPS data, travel patterns, and movement tracking.
- Browsing habits: website visits, search patterns, and online behavior.
- Search queries: personal and professional research activities.

### Hardware

- Personal devices: phones, laptops, tablets, and IoT devices.
- Physical security: device access controls and physical protection.

### Metadata

- Communication patterns: who you contact, when, and how often.
- Relationship networks: social connections and professional associations.
- Timing information: when activities occur and how long they last.

### Documentation Requirements

- Record where each asset is stored, such as a local device, cloud service, or self-hosted system.
- Document current protection measures, including encryption, PINs, and access controls.
- Note backup and recovery procedures for each asset type.

## 2. Who do I want to protect it from?

Identify realistic adversaries based on your specific situation.

### Casual Threats

- Advertisers and trackers: companies collecting behavioral data.
- Nosy individuals: family members, roommates, or acquaintances.
- Public Wi-Fi attackers: opportunistic attackers on shared networks.

### Targeted Threats

- Personal relationships: ex-partners or family members with access.
- Professional context: employers, colleagues, or business competitors.
- Stalkers: individuals with persistent interest in your activities.
- Local law enforcement: regional authorities with surveillance capabilities.

### Advanced Threats

- Corporations: large companies and data brokers aggregating information.
- Foreign hackers: international cybercriminal organizations.
- Nation-state actors: government surveillance programs and agencies.

### Mass Surveillance

- Internet service providers: ISPs with data collection capabilities.
- Big tech companies: Google, Meta, Apple, and other large platforms.
- Government agencies: federal surveillance programs and intelligence agencies.

### High-Risk Considerations

- Journalists facing government pressure.
- Activists opposing powerful institutions.
- Business professionals dealing with corporate espionage.
- Individuals in oppressive political environments.

## 3. How likely is it that I will need to protect it?

Use this formula:

```text
Risk = Likelihood x Capability x Motivation
```

### Scenario Analysis

- High capability, low motivation: your ISP may have the technical ability to log traffic but little reason to individually target you.
- High motivation, low capability: a stalker may have strong motivation but limited ability to overcome strong encryption.
- High motivation, high capability: nation-state actors targeting high-profile individuals.

### Prioritization Strategy

- Focus on threats that are realistic and applicable to your situation.
- Avoid theoretical scenarios that do not align with your profile.
- Consider probability and potential impact at the same time.
- Reassess likelihood when your circumstances change.

## 4. How bad are the consequences if I fail?

Evaluate potential consequences across multiple categories.

### Data Exposure

- Embarrassment: personal information becoming public.
- Blackmail: sensitive information used for coercion.
- Identity theft: personal information used fraudulently.

### Data Loss

- Lost memories: irreplaceable photos and documents.
- Work disruption: professional files and project data.
- Financial impact: loss of financial records and banking information.

### Physical Safety

- Doxxing: personal information leading to harassment.
- Job loss: professional reputation damage.
- Physical harm: information enabling stalking or violence.
- Location exposure: GPS data enabling tracking and stalking.

### Impact Scaling

- Low impact: annoying advertisements or minor inconveniences.
- Medium impact: financial losses or professional setbacks.
- High impact: physical safety concerns or severe reputational damage.

## 5. How much trouble am I willing to go through?

Balance security effort against practical usability.

### Low Effort Measures

- DNS services: [Quad9 DNS](https://quad9.net) for basic malware protection.
- Browser extensions: [uBlock Origin](https://ublockorigin.com) for ad and tracker blocking.
- VPN services: [Mullvad VPN](https://mullvad.net) for basic connection privacy.
- Authentication: [Ente Auth](https://ente.io/auth) for two-factor authentication.
- Browsers: [LibreWolf](https://librewolf.net) for privacy-focused browsing.

### Medium Effort Measures

- Messaging: [Signal](https://signal.org) for encrypted communication.
- Email: [Proton Mail](https://proton.me/mail) for encrypted email services.
- Storage: [Nextcloud](https://nextcloud.com) for self-hosted data control.
- Hardware: [YubiKey](https://www.yubico.com) for hardware-based authentication.

### High Effort Measures

- Operating systems: [Tails](https://tails.net) for maximum anonymity.
- Browsers: [Tor Browser](https://www.torproject.org) for maximum privacy.
- Devices: air-gapped systems for critical data.
- Payment methods: cash transactions and cryptocurrency.
- Social media: complete avoidance of social platforms.

## Practical Examples by Profile

### Casual User

Threats: advertising networks, basic surveillance, and opportunistic attacks.

Recommended tools:

- Mullvad VPN for connection privacy.
- Quad9 DNS for malware protection.
- uBlock Origin for tracking prevention.
- Firefox with privacy enhancements.
- Ente Auth for two-factor authentication.

### Moderate Exposure

Threats: ex-partners, employer monitoring, and corporate data collection.

Recommended tools:

- Proton ecosystem for integrated privacy services.
- VeraCrypt for encrypted drive protection.
- Two-factor authentication on all accounts.
- Avoidance of Google services where possible.
- Regular privacy audits and cleanup.

### High Exposure

Threats: government surveillance, sophisticated attackers, and targeted harassment.

Recommended tools:

- Tor Project tools for maximum anonymity.
- Mullvad VPN with Tor integration.
- Tails operating system for secure computing.
- Burner devices for sensitive communications.
- Complete operational security practices.

## Implementation Tips

### Start Small and Build

- Begin with 1 or 2 specific assets and adversary types.
- Gradually expand security measures over time.
- Build sustainable habits instead of making overwhelming changes.
- Focus on high-impact, low-effort improvements first.

### Regular Review Schedule

- Reassess your threat model every 6 to 12 months.
- Update security measures after life changes.
- Adjust strategies based on new threats or technologies.
- Review and test backup and recovery procedures.

## Useful Resources

- [Privacy Guides](https://www.privacyguides.org): comprehensive basics for beginners.
- [EFF Security Education](https://ssd.eff.org): digital security resources from the Electronic Frontier Foundation.
- [LINDDUN Framework](https://www.linddun.org): privacy-focused threat modeling methodology.
- [STRIDE Framework](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats): security-focused threat analysis approach.

## Important Considerations

### Tool Limitations

- No single tool provides complete protection.
- Mullvad helps with connection privacy but may not be sufficient for state-level adversaries.
- Tor and multihop configurations may be necessary for advanced threats.
- Usability determines the long-term success of security measures.

### Sustainability Factors

- Complex solutions often fail because they are difficult to maintain.
- Focus on measures that can be sustained long-term.
- Balance security improvements with practical daily use.
- Regular practice and familiarity with tools increases effectiveness.
