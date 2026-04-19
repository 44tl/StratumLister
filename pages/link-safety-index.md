# Link Safety Index

To maintain technical integrity, Stratum strictly categorizes external links based on their source, verification status, and historical safety.

## Link Categorization

| Link State | Definition | Required User Action |
| :--- | :--- | :--- |
| **Verified** | Manually audited by the repository maintainer. | Confirm the final destination URL matches the source. |
| **Official Source** | Direct link to the official vendor or project repository. | Prefer these over any third-party mirrors or reloads. |
| **Reference** | Provides context or documentation (non-download). | Use for information; do not use as a download source. |
| **Unverified** | A standard external link with no verification badge. | Perform a manual audit (checksums/repository health). |
| **Avoid** | Known unreliable, malicious, or discontinued resource. | **Do not download or execute.** Report if still active. |

## Verification Standards
Stratum adheres to a centralized trust model:
1. **Maintainer-Only**: Verification can only be granted by the repository maintainer.
2. **Explicit Verification**: No resource is "automatically" trusted based on community popularity or GitHub star count.
3. **Vendor Priority**: All download recommendations must prioritize official websites, GitHub Releases, or established package managers over mirrors.
4. **Project Health**: GitHub repositories must be audited for recent commits, issue responsiveness, and transparency before receiving a badge.
5. **No Domain Spoofing**: We explicitly block shortened URLs or redirects for any direct download links.

## User Audit Checklist
Before executing any tool or script from an external link, perform these four checks:

- **Checksum Validation**: If the vendor provides a SHA-256 hash, verify your download matches before execution.
- **Domain Authenticity**: Ensure the domain belongs to the official project rather than a "copycat" or SEO-optimized reupload site.
- **Script Inspection**: Never run a script (PowerShell/Batch/Shell) without reading the source code first.
- **Sandbox Testing**: For high-risk system utilities, test the behavior in a Virtual Machine or Windows Sandbox before applying to your primary system.

## Reporting & Maintenance
If you encounter a link that has been hijacked, discontinued, or replaced with malicious content, please report it immediately through our [Contribution Guide](#contribution-guide).


