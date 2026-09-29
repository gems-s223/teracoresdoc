# Viewing Results

Once a phase has simulation results available, you view most of them directly in the **3D Viewer** (and its 2D Layer / Section companions) rather than in a separate results screen:

- Pick the phase you want results for from the **Active Phase** picker.
- The **Cell colors** dropdown gains result fields (pressure, temperature, saturation, etc.) alongside the static rocktype/boundary/initial fields described in [The 3D Viewer](3d-viewer.md) — pick one to color the mesh by it.
- A **Time** slider (with a running time label next to it) scrubs through the simulation's saved time steps; the 3D Viewer, 2D Layer, and Section views all stay in sync with it.
- A **mesh opacity** slider (in the Styles dock) fades the mesh so flow-vector arrows underneath remain visible.
- A **Vectors** dropdown (also in the Styles dock, off by default) overlays flow-direction arrows on the mesh, with adjustable arrow scale and color.

For tabular/charted results tied to a specific well or source rather than the whole mesh, use:

- The **Well Results** dialog (from a well's entry in the Model Explorer) for per-well time-series results.
- The **Source Results** dialog for per-source results.
- The [Surface Networks](surface-networks.md) page's **Results** tab for per-generation-unit results, with Excel export.

!!! note
    The **Run → Analyze** menu item is a placeholder for a future unified results/analysis page and is not yet a working feature. Use the mechanisms above — the 3D Viewer's Cell colors/Time controls, and the Well/Source/Surface-Networks results dialogs — to review results today.
