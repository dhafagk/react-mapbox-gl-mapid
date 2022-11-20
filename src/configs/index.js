import dataReducer, { GetApi } from "./DataApi";
import tokenReducer from "./TokenStorage";
import themeReducer, { toggleTheme } from "./Theme";
import { Store, PersistedStore } from "./Store";

export {
  dataReducer,
  tokenReducer,
  themeReducer,
  toggleTheme,
  GetApi,
  Store,
  PersistedStore,
};
