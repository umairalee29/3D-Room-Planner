# ADR 0002: SQLite with Prisma

**Status:** Accepted
**Date:** 2026-11-18

## Context

Layouts need to be saved and loaded. This is a single-user portfolio app
that should run locally with no extra installs.

## Decision

Use SQLite as the database and Prisma as the ORM.

## Consequences

- ✅ No database server to install. The DB is one file (`dev.db`, gitignored).
- ✅ Prisma gives type-safe queries and migrations in TypeScript.
- ❌ Not suited to many concurrent users. Switching to PostgreSQL later
  means changing the Prisma `provider` and running migrations.
