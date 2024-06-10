import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../Urls/baseurl";

// Create action for showing maintainers
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const ShowMaintainer = createAsyncThunk("showmaintainer", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/maintainer/get`);
    await delay(1000); 
    console.log(response.data.data)
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

// Create action for deleting maintainer
export const DeleteMaintainer = createAsyncThunk("deletemaintainer", async (did) => {
  console.log(did)
  try {
    const response = await axios.delete(`${BASE_URL}/maintainer/${did}`);
    console.log(response)
    return { id: did };

  } catch (error) {
    console.error(error);
    throw error;
  }
});

const Adminmaintainerslice = createSlice({
  name: "adminmaintainerslice",
  initialState: {
    Adminmaintainer: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(ShowMaintainer.pending, (state) => {
        state.loading = true;
      })
      .addCase(ShowMaintainer.fulfilled, (state, action) => {
        state.loading = false;
        state.Adminmaintainer = action.payload;
      })
      .addCase(ShowMaintainer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(DeleteMaintainer.pending, (state) => {
        state.loading = true;
      })
      .addCase(DeleteMaintainer.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.payload.id;
        state.Adminmaintainer = state.Adminmaintainer.filter((item) => item.id !== id);
      })
      .addCase(DeleteMaintainer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default Adminmaintainerslice.reducer;
