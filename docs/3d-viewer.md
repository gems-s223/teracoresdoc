# The 3D Viewer

The 3D Viewer is the first tab you see inside the **View** page, and it's the primary way you look at and interact with the mesh. It renders the active model's grid in 3D using VTK, and lets you color, slice, and inspect it interactively.

## Camera and navigation

- Standard mouse-drag/scroll orbit, pan, and zoom.
- **View → Reset Camera** (shortcut **F**) frames the whole mesh again.
- **Find Cell** locates and highlights a specific cell by name/ID.
- **Previous Layer** / **Next Layer** step through the mesh's horizontal layers one at a time — handy for inspecting a model layer by layer instead of looking at the whole 3D stack at once.

## Display options

- **View → Show → Wiremesh** toggles cell-edge outlines on the solid-colored mesh (this preference is remembered between sessions).
- **View → Show → Wiremesh Only** (shortcut **Ctrl+Shift+W**) switches to a wireframe-only view — a quick way to see through the mesh — without changing your saved Wiremesh preference.

## Coloring the mesh — "Cell colors"

A **Cell colors** dropdown in the viewer's toolbar is the main control for what the mesh's colors mean. It includes:

- Static per-cell properties: **rocktype**, and (on dual-porosity/MINC phases) **MINC block type**.
- Source-related fields: deliverability pressure/productivity, source direction, etc.
- **Boundary** fields: region, pressure, temperature.
- **Initial condition** fields: region, pressure, temperature, vapour saturation, air/CO2 partial pressure, salt mass fraction, solid saturation.
- Simulation **result** fields, once a phase's results have been loaded (see [Viewing Results](viewing-results.md)).

A separate **View → Overlay** menu (also mirrored as an "Overlay" button with a dropdown) offers four quick coloring presets: **Rocktype**, **MINC Block**, **MINC Fracture Type**, and **MINC Matrix Type**.

The **Colormap** menu/button lets you pick the color scale used for numeric fields: **Jet, Viridis, Plasma, Inferno, Magma, Coolwarm, Turbo**.

On dual-porosity (MINC) phases, a **Matrix / Fracture** toggle (in the Styles dock) picks which side of a MINC cell a numeric field's value is read from.

## Selecting cells

Clicking a cell in the viewer selects it and populates the right sidebar's **Info** and **Properties** tabs with its data. The **Edit** tab in the same sidebar holds the selection tools used by the various editors (rocktype, boundary, source, initial-condition editing — see [Editing the Model](editing/overview.md)) to pick which cells an edit applies to.
