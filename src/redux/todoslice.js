import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
export const todoslice = createSlice({
  //  name
  name: "todo",
  initialState: [
    { id: "1", description: "t1", isDone: true },
    { id: "2", description: "t2", isDone: false },
    { id: "3", description: "t3", isDone: false },
  ],

  reducers: {
    addTodo: (state, actions) => {
      //create object todo
      const newTodo = { id: 5, descrption: actions.payload, isDone: false };
      // add object to the liste  of objects in the state
      state.push(newTodo);
    },
    deletetodo: (state, actions) => {
      const sts = state.filter((t) => t.id !== actions.payload);
      return sts;
    },

    edittodo: (state, actions) => {

    },
    filtertodo: (state, actions) => {

    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deletetodo, edittodo, filtertodo } = todoslice.actions;
export default todoslice.reducer;
