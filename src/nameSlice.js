import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: {
    value: "",
  },
  reducers: {
      change: function (store, action) {
        store.value = action.payload;
      },
  },
});

export default nameSlice.reducer;