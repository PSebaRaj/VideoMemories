# VideoMemories
[![Latest Release](https://img.shields.io/github/release/psebaraj/VideoMemories.svg?style=for-the-badge)](https://github.com/psebaraj/VideoMemories/releases)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=for-the-badge)](/LICENSE)
[![Lines of Code](https://img.shields.io/tokei/lines/github/psebaraj/VideoMemories?style=for-the-badge)](https://github.com/psebaraj/VideoMemories/actions)
[![Commits since Version Change](https://img.shields.io/github/commits-since/psebaraj/videomemories/latest?include_prereleases&style=for-the-badge)](https://github.com/PSebaRaj/VideoMemories/releases/tag/v1.0.0)

A place for groups to upload and store videos for each other to see.

Written in Typescript, using Next.js and MongoDB.

## To-Do:
- [ ] Thumbnail in video preview
- [ ] Recently watches videos

## Dependencies
- [Client](https://github.com/PSebaRaj/VideoMemories/blob/main/client/README.md#dependencies)
- [Server](https://github.com/PSebaRaj/VideoMemories/blob/main/server/README.md#dependencies)

## Usage
- Make sure MongoDB is installed and running: `ps -ef | grep mongo`
	- If not, here are guides for [installing](https://zellwk.com/blog/install-mongodb/) and [setting up](https://zellwk.com/blog/local-mongodb/)
- Then clone the repository:
	- `git clone https://github.com/psebaraj/videomemories.git`
- Navigate to the VideoMemories repository
- Create a `.env` file for `NEXT_PUBLIC_API_ENDPOINT`
	- By default, should be `http://localhost:4000`
- To run (in development mode):
	- `cd server && yarn dev`
	- `cd client && yarn dev`

