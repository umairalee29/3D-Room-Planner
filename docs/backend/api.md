# API Reference

Base URL: `http://localhost:4000/api` (from `.env`: `PORT`, `VITE_API_URL`)
Format: JSON. Validation with zod. Units are metres, rotation in radians.

## Endpoints

| Method | Path           | Description                        | Success |
| ------ | -------------- | ---------------------------------- | ------- |
| GET    | `/health`      | API is running                     | 200     |
| GET    | `/layouts`     | List layouts (id, name, updatedAt) | 200     |
| GET    | `/layouts/:id` | Get one layout with furniture      | 200     |
| POST   | `/layouts`     | Create a layout                    | 201     |
| PUT    | `/layouts/:id` | Replace a layout                   | 200     |
| DELETE | `/layouts/:id` | Delete a layout                    | 204     |

## Example: POST /layouts

Request:

```json
{
  "name": "Living room v1",
  "room": { "width": 5, "depth": 4, "height": 2.6 },
  "items": [
    { "type": "sofa", "x": 1.2, "z": -0.5, "rotationY": 0, "color": "#6b7280" }
  ]
}
```

Response `201`: same shape plus `id`, `createdAt`, `updatedAt`.

## Errors

All errors use one shape:

```json
{ "error": { "code": "VALIDATION_ERROR", "message": "room.width must be > 0" } }
```

| Status | Code             | When                                                   |
| ------ | ---------------- | ------------------------------------------------------ |
| 400    | VALIDATION_ERROR | Body fails validation                                  |
| 404    | NOT_FOUND        | Layout id doesn't exist                                |
| 500    | INTERNAL_ERROR   | Unexpected server error (details logged, not returned) |
