# Known Bad Tools / Unsafe Tweaks

This page explains the patterns behind tools and tweaks Stratum avoids. For a compact table, use the [Avoid These Tools Database](#avoid-tools-database).

## Red Flags

- The tool promises "maximum FPS" without explaining the exact changes.
- The download is hosted on a reupload site instead of the official source.
- The script disables Defender, Windows Update, System Restore, or core networking.
- The project has no changelog, no source, no rollback, and no issue tracker.
- The guide says to import a registry file without explaining every key.
- The tweak targets old Windows builds and claims to apply to every machine.

## Unsafe Windows Tweaks

Avoid broad service disable lists, telemetry nukers, "gaming mode" registry packs, timer resolution scripts, and network optimizer bundles unless the exact change is documented and reversible.

## Unsafe Driver Practices

Avoid driver booster utilities, random modded GPU drivers, and chipset drivers from third-party mirrors. GPU cleanup tools should only be used when there is a real driver problem or vendor switch.

## Unsafe Privacy Practices

Privacy hardening should not break account recovery, browser updates, certificate validation, DNS resolution, or security updates. Avoid "privacy" scripts that trade basic security for cosmetic quietness.

## Safer Replacement

Use the [Safe Optimization Path](#safe-optimization-path), then test. If you cannot explain what changed, roll it back.
