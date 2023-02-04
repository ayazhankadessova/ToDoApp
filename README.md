5. Structure the index.js
6. Create the components: Form, Key, etc & styles.js for every component
7. Create Form and add it to ToDo component
8. Since we need value of the input, change Input in form:

```
<Input value='' type='text' role='input' />
```

9. Change button type to submit

```
<Button type='submit'>
```

10. Change stylings
11. Develop express app

- pass const port = process.env.PORT to listen to whatever is in env Port variable. If you pass 3000 hard-coded to app.listen(), you're always listening on port 3000, which might be just for you, or not, depending on your requirements and the requirements of the environment in which you're running your server.

12. Create .env in backend folder
13. run server

```
node server.js
```

-

Feb, 4

Backend setup and complete:

1. Schema setup in dbTodos.js (what will Todo look like? text, completed/not)
2. API Endpointes, connection to mongodb database w/ mongoose

- now: on the frontend, make api request to the local host of 8000 & the rest of the frontend
