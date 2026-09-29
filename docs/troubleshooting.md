# Troubleshooting

- **The app won't start, or crashes with a dialog instead of a normal window**: check the log file at `%LOCALAPPDATA%\Teracores\logs\app.log` for details — this is where startup and runtime errors are recorded, since the packaged app has no visible console.
- **Something looks wrong mid-session (a panel not updating, an action seeming to do nothing)**: open the in-app **Log** panel (**View → Show → Log**) to see recent status/diagnostic messages, which often point at the underlying cause (e.g. a failed request to the local backend service).
- **You can't sign in / your license seems wrong**: this is managed by your administrator, not locally — contact them to verify or renew your account rather than trying to work around it.
- **A project doesn't reflect files you changed outside the app**: use the refresh button next to the project folder name in the Project Explorer dock to re-read the project from disk.
