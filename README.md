# ClawControl — Portfolio Edition (Offline / Synthetic Data)

A **safe, static reimplementation of the interaction concept** from the MedHack 2026 team project **ClawControl**. This is a **case-study companion**, not a copy of the original production-like Next.js / Convex / OpenClaw application. It intentionally contains **no original source files, Git history, real patient records, recordings, contact information, credentials, live agents, or network/API calls**.

## Demo features

- Three clearly fictitious emergency-referral scenarios.
- Local state transitions: awaiting referral → specialist contacted → case room ready → closed.
- Mock specialist discovery, with simulated on-call availability.
- Responsive browser UI, no third-party libraries or runtime dependencies.
- Automated test suite for mock data and workflow state transitions.

**Not implemented:** real FHIR retrieval, Convex, OpenClaw calls, Twilio, recording/transcription, authentication, clinical risk scoring or medical decision support.

## Run locally

```bash
python3 -m http.server 8080
# Open http://localhost:8080
node --test
```

ES modules require a local HTTP server; opening `index.html` using `file://` may block module loading.

## Team attribution and individual contribution

Original ClawControl was a **team hackathon prototype** at MedHack 2026. The original repository is owned by the team, not by this portfolio companion. This portfolio edition was independently reconstructed to explain its workflow using synthetic fixtures. In the original project, the contributor's Git history includes work on Convex backend integration, patient schemas, referrals and UI integration. Consult the private original repository and teammates when describing precise ownership of other features (including OpenClaw, Twilio and recording).

Do not imply this demo independently developed or tested a full clinical/agent infrastructure.

## Safety and security

No API credentials. No remote services. No patient data. No recording. No outbound API calls. No real specialist communications. This demonstration is **not for clinical use**. See [Security & publication review](docs/SECURITY.md).

## Why this standalone reconstruction?

The original project contains team code and potentially sensitive hackathon materials. Access to a private repository does **not** imply a license to republish it. Until all contributors approve publication, publish **this independently implemented, synthetic-data-only companion** instead of re-uploading the team's source code.

## License / publication

This companion's publication should be approved by the user before changing a GitHub repository to public. Original team's IP remains with its respective holders. No license to original ClawControl code is asserted here.
