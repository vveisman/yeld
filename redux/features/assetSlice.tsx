import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Asset = {
  email: string;
  asset: string;
  amount: number;
};

const initialState = {
  email: "",
  asset: "",
  amount: 0,
} as Asset;

export const section = createSlice({
  name: "Asset",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setAsset: (state, action: PayloadAction<string>) => {
      state.asset = action.payload;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
  },
});

export const { setAsset, setAmount, setEmail } = section.actions;
export default section.reducer;
