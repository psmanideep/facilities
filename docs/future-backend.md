# Future Backend Recommendation

Do not add a backend to the public brochure site yet.

When transactional features are needed:

## Frontend
Angular application

## API
Node.js + Fastify or NestJS

## Database
PostgreSQL

## Storage
S3-compatible object storage

## Authentication
HttpOnly secure cookies + short-lived access session

## Core modules
- Auth
- Clients
- Suppliers
- Products
- Categories
- RFQs
- Quotes
- Quote comparison
- Purchase requests
- Purchase orders
- Deliveries
- Invoices
- Documents
- Notifications
- Audit logs
- Reporting

Keep the public website and procurement application logically separate so the marketing site can remain cheap/static while the operational platform scales independently.
