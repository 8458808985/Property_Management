import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../Urls/baseurl";

// Create action for adding property
  axios.defaults.withCredentials=true
export const AddPropertys = createAsyncThunk("addproperty", async (data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/property`,
      data
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

// Create action for showing property
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const ShowProperty = createAsyncThunk("showproperty", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/property/get`);
    await delay(1000); 
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

// Create action for deleting property
export const DeletePropertys = createAsyncThunk("deleteproperty", async (did) => {
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

const PropertySlice = createSlice({
  name: "propertyslice",
  initialState: {
    property: [],
    loading: false,
    error: null,
    Searchdata: [],
  },

  reducers: {
   SearchUser:(state,action)=>{
    state.Searchdata=action.payload;
   }
  },

  extraReducers: (builder) => {
    builder
      .addCase(AddPropertys.pending, (state) => {
        state.loading = true;
      })
      .addCase(AddPropertys.fulfilled, (state, action) => {
        state.loading = false;
        const newProperty = action.payload.data;
        if (newProperty) {
          state.property.push(newProperty);
        }
      })
      .addCase(AddPropertys.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })

      .addCase(ShowProperty.pending, (state) => {
        state.loading = true;
      })
      .addCase(ShowProperty.fulfilled, (state, action) => {
        state.loading = false;
        state.property = action.payload;
      })
      .addCase(ShowProperty.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })

      .addCase(DeletePropertys.pending, (state) => {
        state.loading = true;
      })
      .addCase(DeletePropertys.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.payload.id;
        state.property = state.property.filter((item) => item.id !== id);
      })
      .addCase(DeletePropertys.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default PropertySlice.reducer;
export const {SearchUser} = PropertySlice.actions