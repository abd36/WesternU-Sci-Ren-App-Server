# Expo-Server
 
To run locally:

1. Create a .env file in the repo's root directory: .../WesternU-Sci-Ren-App-Server/.env
```
MONGODB=mongodb+srv://admin:admin@cluster0.m9kr6.mongodb.net/<database_name>?retryWrites=true&w=majority&appName=Cluster0
PORT=8080
```
(`<database_name>` can be either `db` or `test` corresponding to the two databases we have on the mongodb)

2. Setup the node project with `$ npm i`

3. Start the server with `$ npm start` or `$ npm dev`

4. If successful, the console should print
```
Listening at port 8080
Connected to database
```

There are a few endpoints in the following files:
1. `/api/expotoken` -> `/routers/expoTokenRouter.js`
2. `/api/exponotification` -> `/routers/expoNotificationRouter.js`

(The URLs are setup at `/server.json`)