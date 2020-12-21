# MH-THINGS backend

Backend using an **Express** server. Created using `npx express-generator api`. For the purposes of storing data, **Sequelize** and **SQLite** are used.

The "config" folder contains general config used by the express server, but in principle is used to export general options used by the SQLite database.

The "models" folder defines the options to create the models used by SQLite through Sequelize.

- `index.js`: creates the SQLite models through Sequelize;
- `user.js`: define options for the user model.

The "controllers" folder is used to define the API endpoints.

The "routes" folder is used to declare routes that point to the controllers.
