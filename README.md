# АПСВТ Connected Campus

Open `index.html` to choose between the connected applicant, student and staff experiences.

## Prototype structure

- `admissions.html` — applicant journey: application and ЄДЕБО status, document checklist, interview scheduling, electronic contract signing, payment, support and automatic student onboarding.
- `student.html` — student workspace: daily priorities, schedule, eLearning modules, materials, tests, submissions, progress, elective-course selection, instant downloadable unsigned transcripts, official transcript requests, documents, payments, career, support, profile and security.
- `admin.html` — six differentiated staff workspaces. Admissions staff verify applications and documents, publish examination results, prepare contracts and monitor automatic enrollment; teachers publish eLearning modules, materials and assignments and review submissions; methodists download unsigned transcript drafts, approve electives and move official transcripts through validation and КЕП; finance staff reconcile payments and contracts; support coordinators own service queues and student-care insights; system administrators manage access, integrations and audit history.
- `platform-sync.js` — shared demo state. Admissions, ЄДЕБО status, applicant documents, interviews, contracts, enrollment, eLearning courses, electives, transcripts, requests, tickets, announcements, assignments, grades, attendance, payments and schedule updates are persisted in browser storage and broadcast to another open tab when the pages share the same origin.
- `platform.css` — shared Awwwards-inspired visual system and mobile layout.

For the most reliable two-tab synchronization, serve this directory from one local web address instead of opening the two files from unrelated locations. The prototype is intentionally front-end only; production use requires authentication, a database, role permissions, secure APIs, records retention rules and legal/privacy review.

All people, identifiers, payment details and operational records in this prototype are mock data.
