# Security and publication review

## Isolation

This repository was built from scratch for portfolio presentation. No application code from the team's original repository has been copied. All showcased patients, IDs, specialist names, conditions and vital scores are artificial fixtures; numbers are illustrative and **not medically validated**.

The application uses only DOM state and imported static JavaScript fixtures. It contains no credential access, network client, server endpoint, tracking SDK, account system, recording, microphone or telephony functionality.

## Explicitly excluded from the private hackathon archive

- Original `.git` history, credentials and `.env` files.
- Team interviews, working research notes, pitch media, original patient context and audio/video recordings.
- Cloud deployment files, Convex backend and real FHIR/OpenClaw/Twilio integrations.
- Third-party proprietary materials and all license-ambiguous team source code.

## Before public publication

1. Confirm teammates approve using the project name, claims and attribution.
2. Check screenshot/media rights before adding assets; this repository ships with none.
3. Do not copy original private-source material without express permission.
4. If secrets from the **original** repository were exposed elsewhere, revoke/rotate them at their providers. This companion does not sanitize the team's historical repo.
5. Review the final repo visibility: **private by default**.

## Clinical disclaimer

No clinical deployment, diagnosis, triage, actual patient referral or clinical decision support. The synthetic EWS values should not be interpreted as medical recommendations.
