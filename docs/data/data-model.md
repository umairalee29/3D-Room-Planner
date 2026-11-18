# Data Model

## Conventions

- Units: **metres**. Rotation: **radians** around the Y axis.
- Coordinates: Three.js default, **Y is up**. The floor is the X–Z plane.
  Room centre is (0, 0, 0).

## Entities

```mermaid
erDiagram
    Layout ||--o{ FurnitureItem : contains
    Layout {
        string id PK
        string name
        float roomWidth
        float roomDepth
        float roomHeight
        datetime createdAt
        datetime updatedAt
    }
    FurnitureItem {
        string id PK
        string layoutId FK
        string type
        float x
        float z
        float rotationY
        string color
    }
```

## Rules

- `roomWidth`, `roomDepth`: 1–20 m. `roomHeight`: 2–5 m.
- `type` is one of: `sofa`, `table`, `chair`, `bed`, `desk`.
  Sizes per type are defined in the front-end catalog, not the DB.
- Deleting a Layout deletes its FurnitureItems (cascade).
- `color` is a hex string like `#aabbcc`.
