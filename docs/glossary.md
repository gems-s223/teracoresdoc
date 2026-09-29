# Glossary

- **Waiwera** — the open-source geothermal reservoir simulator this app prepares input for and reads results from.
- **PyTOUGH** — the Python library used under the hood for TOUGH2-style mesh/model handling.
- **Phase** — one of a model's three states: **Natural State** (pre-development), **Production** (a history match/production run), or a numbered **Future Scenario** (a forecast run).
- **MINC (Multiple INteracting Continua)** — a dual-porosity modeling approach that splits each grid cell into interacting **fracture** and **matrix** sub-blocks, used for fractured-reservoir phases.
- **Rocktype** — a named set of rock properties (permeability, porosity, density, conductivity, specific heat, relative permeability/capillary-pressure curves) assigned to cells.
- **Deliverability / Metered / Rainfall sources** — the three ways a source's flow can be defined: computed from a productivity index (deliverability), supplied directly as a schedule (metered), or representing rainfall recharge.
- **EOS (Equation of State)** — the thermodynamic property model Waiwera uses for the simulated fluid.
- **Relative permeability (relperm) / Capillary pressure (cappress)** — the rock curve functions governing multiphase flow through a rocktype.
- **Generation unit** — a named above-ground facility (in the Surface Networks page) that draws on one or more wells/sources.
- **PRDP / FSDP** — the exported Waiwera JSON deck files for a Production phase (PRDP) or a Future Scenario phase (FSDP).
- **Wellbore simulation** — the standalone, correlation-based two-phase flow model of a well's wellbore, run separately from the full reservoir simulation.
