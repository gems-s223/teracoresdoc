# Running a Simulation

## The Run page

Open the **Run** page from its Navigation tile (or **Run → Run** from the menu). It builds the Waiwera input filename for the active model/phase automatically, following the phase naming convention (Natural State, Production/PRDP, or Future Scenarios/FSDP), and lets you launch a simulation run.

While a run is in progress, a **Simulation Monitor** window opens — a non-modal, minimizable progress viewer showing live progress for that run. You can also reopen a monitor for a previous run's log files (without starting a new simulation) via **Relaunch Progress Monitor**, useful if you closed the monitor but the run is still going, or you want to review a finished run's log again.

## Wellbore simulation

**Run → Run Wellbore Model** runs a separate, standalone wellbore-flow simulation (correlation-based two-phase flow up/down the wellbore) — distinct from the main reservoir run, and driven by the well's **Wellbore config** tab. Use it to check flowing wellhead conditions for a given well independently of a full reservoir simulation.

## Exporting decks

- **Tools → Write PRDP** and **Tools → Write FSDP** write out the Waiwera JSON input deck for a Production or Future-Scenario phase respectively — useful if you need the raw deck file itself (e.g. to run Waiwera outside the app, or to archive it).
