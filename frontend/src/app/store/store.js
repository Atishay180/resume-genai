import { configureStore } from '@reduxjs/toolkit';
import interviewReportSlice from '../slices/interviewReportSlice';

export const store = configureStore({
    reducer: {
        interviewReport: interviewReportSlice,
    },
})