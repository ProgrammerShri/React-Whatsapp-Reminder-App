import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventServices from "../../services/eventServices";
const initialState = {
  Events: [],
};

export const createEvent = createAsyncThunk("events/create", async (data) => {
  const res = await eventServices.create({
    ...data,
  });
  return res.data;
});
export const retriveEvents = createAsyncThunk("events/retrieve", async () => {
  const res = await eventServices.getAll();
  return res.data;
});
export const updateEvent = createAsyncThunk("events/update", async (data) => {
  const res = await eventServices.update(data);
  return res.data;
});
export const deleteEvent = createAsyncThunk("events/delete", async (id) => {
  await eventServices.delete(id);
  return id;
});
export const deleteAllEvents = createAsyncThunk("events/deleteAll", async () => {
  const res = await eventServices.deleteAll();
  return res.data;
});
export const findTutorialsByTitle = createAsyncThunk(
  "events/findByTitle",
  async ({ title }) => {
    const res = await eventServices.findByTitle(title);
    return res.data;
  }
);
const eventSlice = createSlice({
  name: "events",
  initialState,
  extraReducers: {
    [retriveEvents.fulfilled]: (state, action) => {
      state.events = action.payload;
    },
    [createEvent.fulfilled]: (state, action) => {
      state.events.push(action.payload);
    },
    [updateEvent.fulfilled]: (state, action) => {
      const index = state.events.findIndex(
        (event) => event.id === action.payload.id
      );
      state.events[index] = action.payload;
    },
    [deleteEvent.fulfilled]: (state, action) => {
      let index = state.events.findIndex((id) => id === action.payload.id);
      state.events.splice(index, 1);
    },
    [deleteAllEvents.fulfilled]: (state, action) => {
      return [];
    },
    // [findTutorialsByTitle.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
  },
});
const { reducer } = eventSlice;
export default reducer;