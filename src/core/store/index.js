import { configureStore } from '@reduxjs/toolkit';
import profileDataReducer from './user/profileData';

const store = configureStore({
    reducer: {
        profileData: profileDataReducer,
    },
});

export default store;