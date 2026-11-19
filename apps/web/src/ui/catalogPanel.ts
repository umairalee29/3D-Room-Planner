import {
  FURNITURE_CATALOG,
  type FurnitureDefinition,
  type FurnitureType,
} from "../objects/furnitureCatalog";

export type OnAddFurniture = (type: FurnitureType) => void;

export function createCatalogPanel(container: HTMLElement, onAdd: OnAddFurniture): void {
    const heading = document.createElement("h2");
    heading.textContent = "Add Furniture";
    heading.className = "text-xs font-semibold- uppercase tracking-wide text-slate-500 mb-3";
    container.appendChild(heading);

    const list = document.createElement("ul");
    list.className = "flex flex-col gap-2";
    container.appendChild(list);

    const definitions: FurnitureDefinition[] = Object.values(FURNITURE_CATALOG);

    for (const definition of definitions) {
        const listItem = document.createElement("li");
        listItem.appendChild(createCatalogButton(definition, onAdd));
        list.appendChild(listItem);
    }
}

function createCatalogButton(definition: FurnitureDefinition, onAdd: OnAddFurniture): HTMLButtonElement {
    const button = document.createElement("button");
    button.type = "button";
    button.className = 'w-full flex items-center gap-3 rounded-md border border-slate-200 px-3 py-2 ' +
    'text-left text-sm hover:bg-slate-100 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500';

    const swatch = document.createElement("span");
    swatch.className = "w-4 h-4 rounded-sm shrink-0";
    swatch.style.backgroundColor = definition.color;
    swatch.setAttribute("aria-hidden", "true");

    const label = document.createElement("span");
    label.textContent = definition.label;

    const size = document.createElement("span");
    size.className = "ml-auto text-xs text-slate-400";
    size.textContent = `${definition.width}×${definition.depth}m`;

    button.append(swatch, label, size);

    button.addEventListener("click", () => {
        onAdd(definition.type);
    });

    return button;
}
