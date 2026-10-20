# Interview-ready case study

## 30-second explanation

"ClawControl was our MedHack 2026 team prototype for coordinating emergency-department specialist referrals. My contributions included Convex data integration, patient and referral state modeling, frontend integration, and work on FHIR-oriented specialist discovery. This public repository is an independently reconstructed, offline mock showing the workflow without exposing team-owned code, credentials or healthcare data."

## Architecture trade-offs

- **Convex vs static mock:** The hackathon explored real-time shared state; the public demo deliberately uses local in-memory state to remove backend credentials and data-handling risks.
- **FHIR fallbacks:** External healthcare API formats and availability can vary. Discuss fallback paths as implementation intentions unless verified by tests and live compatibility.
- **Agent orchestration:** A long-running referral involves asynchronous coordination and failure states. Explain what would require explicit authorization, audit logs, idempotency and human escalation before production.
- **Clinical/privacy risks:** Apply least privilege, verified caller identity, minimum-necessary data, audit logging, secrets isolation, and simulated test fixtures; do not claim these controls were fully implemented in the hackathon.

## Honest limitations

The portfolio version does not implement OpenClaw calls, telephony, audio, authentication, cross-user synchronization or actual FHIR/Convex APIs. No real patient data or external messages are handled. A successful unit test here validates mock state transitions only.

## Suggested résumé entry (team attribution preserved)

**ClawControl — MedHack 2026 (Team Hackathon Project)**
- Contributed Convex backend integration and patient/referral data modeling for an emergency specialist referral prototype.
- Worked on FHIR-oriented specialist discovery and referral lifecycle management.
- Connected frontend screens with backend referral state, supporting the team's coordinated handoff workflow.
- Built a separate synthetic-data portfolio demo to communicate the workflow safely without live healthcare integrations.

Adapt the wording only to verifiable personal responsibility and avoid claiming full OpenClaw/Twilio ownership.
