import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    interviewReportResponse: null,
}

export const interviewReportSlice = createSlice({
    name: 'interviewReport',
    initialState,
    reducers: {
        setInterviewReportResponse: (state, action) => {
            state.interviewReportResponse = action.payload;
        },
        clearInterviewReportResponse: (state) => {
            state.interviewReportResponse = null;
        },
    },
});

export const { setInterviewReportResponse, clearInterviewReportResponse } = interviewReportSlice.actions;

export default interviewReportSlice.reducer;