# Getting Started

## Launching the app

Teracores Desktop ships as a standalone Windows application (built with Nuitka) — double-click the executable or its shortcut to start it. There is no separate installer step for the backend service; it is bundled and starts automatically in the background.

If something goes wrong during startup, you won't see a console window — errors are reported in a dialog box, and full detail is written to a log file at:

```
%LOCALAPPDATA%\Teracores\logs\app.log
```

Keep this path in mind; see [Troubleshooting](troubleshooting.md).

## Signing in

The first thing you'll see is a **Sign in** dialog asking for a **Username** and **Password** — "Sign in with the credentials your administrator emailed you." Licenses are managed centrally by your Teracores administrator; if your account has expired or been revoked, you'll instead see an **Access ended** message telling you when your trial ended and asking you to contact the administrator to renew. In either case, contact your Teracores administrator to get or restore access — there is no self-service signup.

Once you're signed in, the main window opens.

## A tour of the main window

The main window is arranged like this:

- **Menu bar** across the top — **File**, **View**, **Edit**, **Tools**, **Run**, **About**. See the relevant section for what each holds; the full map is:
  - **File**: Open Project, Open Recent Project, Save, Save As, Save All, Import CSV, Settings, Exit
  - **View**: Overlay mode, Colormap, Show (wiremesh options), Reset Camera
  - **Edit**: Georeference Image, Grid Boundary, File Geometry, Edit Rocktype, Start Edit Rocktype, Edit Boundary, Source, Output
  - **Tools**: Generate Sources, MINC Settings, Write PRDP, Write FSDP, Measure Distance, Create Intersection, Clear Measurements
  - **Run**: Run, Run Wellbore Model, Analyze
  - **About**: About Teracores, Documentation, Check for Updates
- **Header toolbar** below the menu bar — a ribbon-style strip of grouped buttons that mirrors the menu items (Navigation, Model Setup, etc.), so common actions are one click away without opening a menu.
- **Navigation tiles** (in the header toolbar's Navigation group) — three large buttons, **View**, **Surface Networks**, and **Document Editor**, plus the **Run** tile reachable from the Run group. These switch the central area between the app's four main pages. Despite its label, the **View** tile is where almost all day-to-day modeling happens — it hosts the 3D Viewer, 2D Layer view, Section view, and all of the Edit-menu tools.
- **Left dock — Project Explorer / Model Explorer**: the top box ("Project Explorer") shows the currently open project's folder and pickers for the **Active Model Name**, **Active Model Number**, and **Active Phase**; below it, "Model Explorer" is a tree of everything in the open project.
- **Right sidebar**: a collapsible vertical tab strip — **Styles**, **Properties**, **Info**, **Well Info**, **Edit** — that expands into a panel when you click a tab. **Info** shows details for whatever cell you last clicked in the viewer; **Well Info** does the same for wells; **Properties** lets you edit the selected cell(s)' rock/initial-condition properties; **Edit** hosts the selection tools (see [Editing the Model](editing/overview.md)).
- **Central area**: one of four full-page modes — **View** (the main modeling workspace), **Run**, **Surface Networks**, **Document Editor** — swapped in and out via the Navigation tiles.
- **Log console**: a dockable panel (toggle it from **View → Show → Log**) that streams status and diagnostic messages from the app as you work — useful when something doesn't behave as expected.
