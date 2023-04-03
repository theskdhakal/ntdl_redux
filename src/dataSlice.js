import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  frmDt: {
    type: "entry",
  },
  taskList: [],
};

const dataSlice = createSlice({
  name: "dataName",
  initialState,

  reducers: {
    setFrmDt: (state, action) => {
      state.frmDt = { ...state.frmDt, ...action.payload };
    },

    setTaskList: (state, action) => {
      state.taskList = [...state.taskList, state.frmDt];
    },
  },
});

const { reducer, actions } = dataSlice;
export const { setFrmDt, setTaskList } = actions;
export default reducer;
