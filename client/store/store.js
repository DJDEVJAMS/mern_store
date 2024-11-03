const { configureStore } = "@reduxjk/toolkit";
import authReducer from './auth-slice';



const store = configureStore ({
    reducer : {
        auth : authReducer,
    } 
})

export default store;