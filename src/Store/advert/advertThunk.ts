import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "../../services/api";
import { getErrorMessage } from "../../services/utilities";

export const getAllAdvertThunk = createAsyncThunk("advert/getAll", async (page: number, thunkAPI) => {
  try {
    const data = await API.getAllAdvert(page);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(getErrorMessage(error));
  }
});

export const getCarBiIdThunk = createAsyncThunk("advert/getCarBiId", async (carId: number, thunkAPI) => {
  try {
    const data = await API.getCarById(carId);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(getErrorMessage(error));
  }
});
