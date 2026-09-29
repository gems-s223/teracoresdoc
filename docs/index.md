# Teracores Desktop

A complete walkthrough of Teracores Desktop, from first launch to running a simulation and reading back results.

Teracores Desktop is a desktop pre- and post-processor for the [Waiwera](https://github.com/waiwera/waiwera) geothermal reservoir simulator. It gives you a graphical way to build and edit a reservoir model — mesh, rock types, boundaries, sources, wells, initial conditions — launch a Waiwera simulation, and review the results, without hand-editing Waiwera's JSON input decks or TOUGH2-style mesh files directly.

Under the hood the application is two cooperating processes: a small local backend service that owns the mesh, the in-progress model ("Case"), and the simulation results, and the graphical interface you interact with, which talks to that backend behind the scenes. You never need to think about this split — it starts automatically when you launch the app and shuts down when you close it.

This guide is written for the person *using* the application to build and run models — reservoir engineers, modelers, and analysts. It assumes no prior familiarity with the app's internals.

## Where to start

- New to the app? Start with [Getting Started](getting-started.md).
- Setting up a model? See [Projects & Models](projects-and-models.md) and [Editing the Model](editing/overview.md).
- Ready to simulate? See [Running a Simulation](running-a-simulation.md) and [Viewing Results](viewing-results.md).
- Not sure what a term means? Check the [Glossary](glossary.md).
