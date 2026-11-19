export type FurnitureType = "sofa" | "table" | "chair" | "bed" | "desk";

export interface FurnitureDefinition {
  type: FurnitureType;
  label: string;
  width: number;
  height: number;
  depth: number;
  color: string;
}

export const FURNITURE_CATALOG: Record<FurnitureType, FurnitureDefinition> = {
  sofa: {
    type: "sofa",
    label: "Sofa",
    width: 2,
    height: 0.8,
    depth: 0.9,
    color: "#6b7280", // grey
  },
  table: {
    type: "table",
    label: "Table",
    width: 1.2,
    height: 0.75,
    depth: 0.8,
    color: "#a16207", // brown wood
  },
  chair: {
    type: "chair",
    label: "Chair",
    width: 0.5,
    height: 0.9,
    depth: 0.5,
    color: "#78716c", // warm grey
  },
  bed: {
    type: "bed",
    label: "Bed",
    width: 1.6,
    height: 0.5,
    depth: 2,
    color: "#93c5fd", // light blue
  },
  desk: {
    type: "desk",
    label: "Desk",
    width: 1.4,
    height: 0.75,
    depth: 0.7,
    color: "#57534e", // dark grey-brown
  },
};
