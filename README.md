# Learning-MERN

## Commit 1: Setting up the server
I have set a basic server, with a folder for backend, that inside that folder we have a folder to write our controllers/functions, and a folder for out routes.

### Commit 1.5:
I've added async support.

## Commit 2: Potential Unearthed: Tapping into CRUD and MongoDB Magic
I've added mongoDB basic functionality.
1. We have a config folder that has a 'db.js' file that deals with connecting to the mongoDB database.
2. We have 'models' folder, for our mongoDB collections, right now we only added goalModel, soon we will add also the user model and functionality.
3. We have CRUD functionality for our api. We can see, add, update and delete goals.  

## Commit 3: Proving I'm Not a Robot, One Authentication at a Time 
1. We've added user model and databse.
2. We've installed bcryptjs and jsonwebtoken in order to handle authentication and passwords safety.
3. We made our CRUD use protect and have authorization functionality. Users can edit and delete only their own goals.

## Commit 4: Getting to the front.
We began working on our front end, using react-create-app
1. We've created 3 pages, a dashboard to act as homepage, login and register.
2. We've added forms to log in and register.

## Commit 5: Redux, Axios, and other bridges.
I began using redux, and are connecting the frontend to the backend using axios.
