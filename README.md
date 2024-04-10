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
Use the routes setup at `server.json` with the corresponding router in the `routers/` directory to construct a URL endpoint to interact with the DB.
\
(Examples below assume the server is running at localhost:8080)

1. Get all ExpoTokens
In `server.json`, the ExpoToken route is set up in line `app.use("/api/expotoken", expoTokenRouter);`, so the current URL is `localhost:8080/api/expotoken`.
\
In `routers/expoTokenRouter.json`, the line `expoTokenRouter.get("/", ExpoTokenService.getAllExpoTokens);` tells me my current URL is complete.
\
I can send a GET request to `localhost:8080/api/expotoken/` to get all ExpoTokens.

3. Get all FAQs
In `server.json`, the FAQs route is set up in line `app.use("/api/faq", faqRouter);`, so the current URL is `localhost:8080/api/faq`.
\
In `routers/faqRouter.json`, the line `faqRouter.get("/getAllFaq", FaqService.getAllFaq);` tells me my URL should be `localhost:8080/api/faq/getAllFaq`.
\
I can send a GET request to `localhost:8080/api/faq/getAllFaq` to get all FAQs.

4. Create a FAQ
In `server.json`, the FAQs route is set up in line `app.use("/api/faq", faqRouter);`, so the current URL is `localhost:8080/api/faq`.
\
In `routers/faqRouter.json`, the line `faqRouter.post("/createFaq", FaqService.createFaq);` tells me my URL should be `localhost:8080/api/faq/createFaq`.
\
I can send a POST with body
```
{
    "question": "test question",
    "answer": "test answer"
}
```
to `localhost:8080/api/faq/createFaqAPI` to create a new FAQ. Another way to create items on MongoDB is through their website.
\
To see what to include in a POST's body, check the corresponding method in the collection's service file, ie. `services/faqService.json`
