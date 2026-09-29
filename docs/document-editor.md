# Document Editor

The **Document Editor** page (its own Navigation tile) gives you direct access to the model's underlying JSON/YAML files — the Waiwera deck and related data files — for cases the graphical editors don't cover, or when you need to check exactly what will be written out.

Because these deck files can be very large, the Document Editor doesn't load an entire file into one text box. Instead it shows a bar of buttons for the file's top-level keys (e.g. `rock`, `boundaries`, `mesh`), and only loads the value for whichever key you click into the editor. Saving splices your edited value back into the original file, leaving every other section untouched. Very large sections may open read-only, and files that aren't a simple JSON object fall back to a plain read-only/editable text view.

A file explorer on the right side of the page lists the project's data/model files so you can pick which one to open.

Use this page when you need to inspect or hand-edit something at the raw deck level — most day-to-day work should go through the dedicated editors in [Editing the Model](editing/overview.md) instead, since those keep the file consistent for you.
