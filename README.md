# Fullstack Helsinki 2021 Part 3 Phonebook App - separate repo for Heroku

### *This repo for the finalized version of the Phonebook are to be submitted as "for-credit" exercises.*

----

Location of Phonebook App: https://stormy-journey-51762.herokuapp.com/

Location of Heroku git repo: https://git.heroku.com/stormy-journey-51762.git

Location of local JSON API Server: http://localhost:3001/api/persons

**npm start** for *development*,
manually open browser to localhost:3001

-- both frontend and backend at this address

**! update this section after completion !**
* fs-hel21-part3-phonebook is the backend Node Express Server for the frontend React Application located at ...codegrunt/fs-hel21-sup/part2/phonebook *Code reactors or updates to the react frontend must occur there.*
* Use the build:ui, deploy, and deploy:full scripts located at this repo to depoly the app after making changes to the frontend there. - Need to manually start *just* the webserver here in part3/phonebook  **npm run dev** to have a backend for the React frontend in part2/phonebook.
* app.use(express.static('build')) serves the index.html file and static resources from the build folder to *http://localhost:3001*
* All requests to the (relative) /api/notes routes are handled on this server
  

-cz 10/8/2021