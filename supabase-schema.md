# Supabase schema — for Soham

This matches the shape already used in `src/data/cards.js`, so when this
table exists, that file can be swapped for a `select * from cards` call
with zero changes to the card/detail components.

## Table: `sections`

| column | type      | notes                                             |
|--------|-----------|----------------------------------------------------|
| id     | text (PK) | `general` / `weak-english` / `mixed-ability`      |
| label  | text      | Display name, e.g. "General Rotation"             |
| note   | text      | One-line description shown under the section label|
| sort_order | int   | Controls display order                            |

## Table: `cards`

| column           | type        | notes                                                                 |
|------------------|-------------|------------------------------------------------------------------------|
| id               | text (PK)   | slug, e.g. `round-robin`                                              |
| section_id       | text (FK → sections.id) |                                                           |
| title            | text        |                                                                        |
| pod_size         | text        | kept as text, not int — some values are "Pair (2)", not just numbers  |
| description      | text        | the "what it does" field                                              |
| roles            | jsonb       | array of strings, e.g. `["Speaker", "Timekeeper"]`                    |
| facilitator_note | text, null  | nullable — most general cards have none                               |
| priority         | text, null  | only used by the weak-english block cards (e.g. "Vocabulary-in-context") |
| sort_order       | int         | controls order within a section                                       |

## Notes on the data itself

- 15 rows total: 10 general cards, 3 weak-english block cards, 2 mixed-ability cards.
- `roles` is a JSON array, not a joined table — roles have no independent
  identity outside their card (no student-facing data is ever attached to
  a role), so a simple array keeps this from turning into anything that
  could log per-student information later.
- Nothing in this schema stores anything about individual students —
  by design, per the product's core rule.
