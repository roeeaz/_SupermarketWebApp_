import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUserProfileAsync = createAsyncThunk(
  'profile/fetchUserProfile',
  async (token: string) => {
    const response = await axios.get('http://127.0.0.1:8000/user_profile/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  }
);


export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    points: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfileAsync.fulfilled, (state, action) => {
      state.points = action.payload.points;
    });
  }
});

export default profileSlice.reducer;
