const { configureStore } = require('@reduxjs/toolkit');
const { usersReducer } = require('./slice');

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
