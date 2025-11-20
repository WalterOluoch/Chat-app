# Monitoring & Maintenance Template

Document how you observe the health of your MERN application. This file is intentionally structured so you can fill it in with platform-specific settings as you implement them.

## 1. Health Checks
- **HTTP endpoint**: `https://____/healthz`
- **Expected response**: `{ status: 'ok', uptime: <number>, db: 'up' }`
- **Test frequency**: _e.g. every 1 minute via UptimeRobot_

> _Guidance_: Include curl commands or screenshots demonstrating a successful health check. Note any authentication requirements.

## 2. Uptime & Alerting
- **Monitoring service**: _e.g. UptimeRobot, Better Stack, Pingdom_
- **Monitored URLs**:
  - Frontend: `https://____`
  - Backend: `https://____/healthz`
- **Alert channels**: _e.g. email, Slack, SMS_
- **Escalation policy**: _describe who gets notified and when_

> _Guidance_: Paste monitor IDs, thresholds, and maintenance windows. Mention how to silence alerts during planned downtime.

## 3. Error Tracking
- **Service**: _Sentry, Logtail, New Relic, etc._
- **Integration points**:
  - Frontend snippet (link to code or include `SENTRY_DSN` env var)
  - Backend middleware or logger configuration
- **Dashboard link**: `https://____`

> _Guidance_: If you have not added an error tracker yet, outline the steps you plan to follow (npm packages, environment variables, deployment secrets).

## 4. Performance Monitoring
- **Server metrics**: _platform logs, APM agent, container stats_
- **Database metrics**: _MongoDB Atlas performance charts, alerts_
- **Frontend metrics**: _Core Web Vitals via Lighthouse, SpeedCurve, etc._

> _Guidance_: Include sample queries or screenshots showing response times, CPU/memory graphs, and indexes you monitor.

## 5. Logging & Retention
- **Log aggregation**: _e.g. CloudWatch, LogDNA, Papertrail_
- **Retention policy**: _number of days/weeks_
- **PII handling**: _masking strategy_

## 6. Maintenance Procedures
- **Backups**: schedule, storage location, restore test cadence.
- **Dependency updates**: weekly `npm audit` / renovate bot schedule.
- **Security patches**: describe how you track CVEs and roll out fixes.
- **Runbooks**: link to documents for high CPU, database outage, etc.

---
### How to use this file
1. Fill in each section with concrete data as you configure monitoring tools.
2. Commit supporting assets (screenshots, queries) under `monitoring/assets/`.
3. Update this document whenever alerting thresholds or contacts change.


