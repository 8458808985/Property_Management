import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../Urls/baseurl";



// Create action for showing property
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const ShowOwner = createAsyncThunk("showowner", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/owner/get`);
    await delay(1000); 
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

// Create action for deleting property
export const DeleteOwner= createAsyncThunk("deleteproperty", async (did) => {
  console.log(did)
  try {
    const response = await axios.delete(`${BASE_URL}/property/${did}`);
    console.log(response)
    // return response
    return { id: did };
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const Adminownerslice = createSlice({
  name: "adminownerslice",
  initialState: {
    Adminowner: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(ShowOwner.pending, (state) => {
        state.loading = true;
      })
      .addCase(ShowOwner.fulfilled, (state, action) => {
        state.loading = false;
        state.Adminowner = action.payload;
      })
      .addCase(ShowOwner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })

      .addCase(DeleteOwner.pending, (state) => {
        state.loading = true;
      })
      .addCase(DeleteOwner.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.payload.id;
        state.Adminowner = state.Adminowner.filter((item) => item.id !== id);
      })
      .addCase(DeleteOwner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default Adminownerslice.reducer;
