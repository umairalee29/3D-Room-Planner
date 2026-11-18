# UI and Interaction Design

## Layout (single screen)

┌──────────────────────────────────────────────────────────┐
│ Toolbar: [Room size] [Save] [Load ▾] [Reset camera] │
├────────────┬───────────────────────────────┬─────────────┤
│ Catalog │ │ Properties │
│ - Sofa │ 3D canvas (Three.js) │ Name │
│ - Table │ │ Rotation │
│ - Chair │ │ Color │
│ - Bed │ │ [Delete] │
│ - Desk │ │ │
└────────────┴───────────────────────────────┴─────────────┘

## Interactions

| Action                   | Result                                         |
| ------------------------ | ---------------------------------------------- |
| Left-drag on empty space | Orbit the camera around the room               |
| Scroll                   | Zoom in/out (clamped)                          |
| Click catalog item       | Add furniture to the centre of the room        |
| Click furniture          | Select it (highlight + show in Properties)     |
| Drag selected furniture  | Move it along the floor, kept inside the walls |
| `R` key                  | Rotate selected item by 90°                    |
| `Delete` key             | Remove selected item                           |
| `Esc`                    | Deselect                                       |

## States

- **Empty:** room with no furniture, hint text "Add an item from the catalog".
- **Saving / Loading:** buttons disabled, small spinner.
- **Error:** toast message at the bottom, e.g. "Couldn't save. Is the API running?"

## Accessibility basics

- All toolbar and panel controls are real `<button>`/`<input>` elements, keyboard reachable.
- Visible focus styles (Tailwind `focus-visible:` ring).
- Canvas has an `aria-label` describing the scene.
