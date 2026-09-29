# Projects & Models

Teracores organizes work into **projects** — folders on disk containing one or more **models**. A project folder has this shape:

```
<Project>/
  Models/
    <ModelName>/
      NaturalState/
      Production/
      FutureScenarios/
        <NNN>/          (one subfolder per future scenario)
```

Each of `NaturalState`, `Production`, and a numbered `FutureScenarios` folder is a **phase** of the model — natural-state (pre-development) conditions, a production history match, or a future-scenario forecast. Production and Future Scenario phases can additionally be **dual-porosity (MINC)** models, in which cells are split into fracture and matrix sub-blocks.

## Opening a project

- **File → Open Project** opens a folder browser to pick a project folder.
- **File → Open Recent Project** lists projects you've opened before, for one-click reopening.
- Once open, the folder name appears at the top of the Project Explorer dock, with a **refresh** button next to it that re-reads the project from disk — useful if files were added, edited, or removed outside the app.

## Choosing what you're working on

The Project Explorer dock's three pickers — **Active Model Name**, **Active Model Number**, **Active Phase** — determine which model and phase the rest of the app (viewer, editors, Run page) currently acts on. Change any of them to switch context; the 3D Viewer, tree, and dockable panels update to match.

## Saving

- **File → Save** writes changes for the active model/phase.
- **File → Save As** writes a copy under a new name/location.
- **File → Save All** saves every open/modified model at once.

## Other File-menu items

- **Import CSV** brings tabular data (e.g. well or source data) into the project — see the specific editor ([Sources](editing/sources.md), [Wells](editing/wells.md)) for what each importer expects.
- **Settings** opens app preferences — see [Settings & Preferences](settings.md).
- **Exit** closes the application.
