import { configureStore } from "@reduxjs/toolkit";
import linkActiveReducer from "./states/sidebar.state";

export interface IAppStore {
  linkActive: number;
}

export default configureStore<IAppStore>({
  reducer: {
    linkActive: linkActiveReducer,
  },
});
