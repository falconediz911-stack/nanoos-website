# NanoOS ISO update feed

The website receives published NanoOS ISO release metadata from `NanoOS-Beta21-ISO` through a GitHub `repository_dispatch` event named `nanoos.iso.published`.

The receiver workflow writes:

`public/releases/iso-latest.json`

This file is intentionally separate from `public/releases/latest.json`, which remains the existing app/system update feed. ISO files are not Pacman packages and must not be placed into the Pacman repository database.

## Feed schema

The feed contains:

- `schema_version`
- `product`
- `content_type: "iso"`
- `channel` (`testing` for pre-releases; `stable` for regular releases)
- `version` and release name
- GitHub release URL and publication timestamp
- An array of ISO part and checksum asset names, URLs, and sizes

The feed is written only after a published release from the registered ISO repository has passed URL and asset validation.

## Client integration still required

NanoOS Update must be updated to read this separate ISO feed, present the release channel and version, reconstruct split assets where applicable, and verify the published SHA-256 checksum before offering an ISO update. The feed publisher does not install or replace an operating system.
