import { configureStore } from '@reduxjs/toolkit'
import PropertySlice from '../Features/AddPropertySlice'
import Adminownerslice from '../Features/Adminownerslice'
import Adminmaintainerslice from '../Features/Adminmaintainerslice'
export const store = configureStore({
  reducer: {
    property:PropertySlice,
   Adminowner:Adminownerslice,
   Adminmaintainer:Adminmaintainerslice,
  },
})