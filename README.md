# Expo-Server
 
To run locally:

1. Clone the repo to your host

2. Create a `.env` file in the repo's root directory: `.../WesternU-Sci-Ren-App-Server/.env`
```
MONGODB=mongodb+srv://admin:admin@cluster0.m9kr6.mongodb.net/<database_name>?retryWrites=true&w=majority&appName=Cluster0
PORT=8080
```
(`<database_name>` can be either `db` or `test` corresponding to the two databases we have on the MongoDB)

3. Navigate to the repo in terminal

4. Setup the node project with `$ npm i`

5. Start the server with `$ npm start` or `$ npm dev`

6. If successful, the terminal should print
```
Listening at port 8080
Connected to database
```
\
Endpoints are in the following files:
1. `/api/expotoken` -> `/routers/expoTokenRouter.js`
2. `/api/exponotification` -> `/routers/expoNotificationRouter.js`

(The URLs are setup at `/server.json`)
