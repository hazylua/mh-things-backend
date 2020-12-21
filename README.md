# `mh-things` backend

Backend using an **Express** server. Created using `npx express-generator api`. For the purposes of storing data, **Sequelize** and **SQLite** are used.

## Folders

To keep in mind:

- `config`: general config used by the express server. Used to export general options used by the SQLite database;
- `models` folder defines the options to create the models used by SQLite through Sequelize.
  - `index.js`: creates the SQLite models through Sequelize;
  - `user.js`: defines options for the user model.
- `controllers`: used to define the API endpoints.
- `routes`: used to declare routes that point to the controllers.
