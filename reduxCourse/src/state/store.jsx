import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/count";
import postreducer from "../state/postslice";
import userreducer from "../state/usersslice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postreducer,
    users: userreducer,
  },
});
