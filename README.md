# АПСВТ Connected Campus

Open `index.html` to choose between the connected student and staff experiences.

## Prototype structure

- `student.html` — student workspace: daily priorities, schedule, tasks, progress, attendance, documents, payments, career, support, profile and security.
- `admin.html` — five differentiated staff workspaces. Methodists manage academic operations and documents; teachers manage their courses, assignments, grades and attendance; finance staff reconcile payments and contracts; support coordinators own service queues and student-care insights; system administrators manage access, integrations and audit history.
- `platform-sync.js` — shared demo state. Requests, tickets, announcements, assignments, grades, attendance, payments and schedule updates are persisted in browser storage and broadcast to another open tab when both pages share the same origin.
- `platform.css` — shared Awwwards-inspired visual system and mobile layout.

For the most reliable two-tab synchronization, serve this directory from one local web address instead of opening the two files from unrelated locations. The prototype is intentionally front-end only; production use requires authentication, a database, role permissions, secure APIs, records retention rules and legal/privacy review.

All people, identifiers, payment details and operational records in this prototype are mock data.
