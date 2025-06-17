import { configureStore } from "@reduxjs/toolkit";

import router from './slice/router.js';
import isas from './slice/isas.js';

export const store = configureStore({
  reducer: {
    isas: isas,
    router: router
  },      
})