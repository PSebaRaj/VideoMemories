## VideoMemories - Github Pages
[![Latest Release](https://img.shields.io/github/release/psebaraj/videomemories.svg?style=for-the-badge)](https://github.com/psebaraj/videomemories/releases)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=for-the-badge)](/LICENSE)

A full stack application which enables my family to upload and store videos for each other to see. Pictures of the UI (v1.0.0) can be found [here](https://github.com/PSebaRaj/VideoMemories/blob/main/client/README.md#ui). Created because AirDrop was incompatible within the family, the videos were too large to send over email, and GDrive was full.

Written in TypeScript, using Next.js and MongoDB. MongoDB was chosen, as the only thing stored in the database is the user and video information and I thought a relational DB was unnecessary. The videos are stored on the server in the ./server/videos subdirectory (gitignored).

This project is my first time using Next.js, so I would love any feedback, especially if you notice any glaring concern with my implementation of the framework.

### Languages, Technologies, and Frameworks
#### Server
- TypeScript
- Node.js
- Express
- MongoDB
- Zod

#### Client
- TypeScript
- React
- Next.js
- Mantine
