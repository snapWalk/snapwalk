
## <a>**SnapWalk**</a>

Welcome to SnapWalk, the new amazing social app where users can share their favourite routes and can experience other's routes. Create or choose a route and play it. Look at your next location on the map and take a picture to check you're there and go to the next location. Once you're finished, comment and like the route, win points, and look at the ranking.

---

## <a>Getting Started</a>

1. Install dependencies: 
   - `$ yarn`
2. Launch environment:
   - **Production**: `$ yarn run build:prod` to create, `$ yarn start` to run
   - **Development for frontend**: `$ yarn run dev`
   - **Development for server**: `$ yarn prod`

     > Available at http://localhost:3060
3. Execute tests:
   - `$ yarn test`
4. Database Prep

run `createdb snapwalk` to create your database
run `node src/services/data/seed.js` to create tables

---

## <a>Technical designs</a>

- Architecture
![alt text](/src/assets/architecture.jpg)

- User Flow
![alt text](https://github.com/snapWalk/snapwalk/raw/assets/user_flow.jpg)

- Database schema
[[https://github.com/snapWalk/snapwalk/tree/master/src/assets/database.jpg|alt=database]]

---

## <a>Notes</a>
_This is a student project that was created at [Codely](http://codely.tech), a full stack development bootcamp in Barcelona._

