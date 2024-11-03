const {createSlice} = reequire("@reduxjs/toolkit")





const initalState = {
 isAuthenticated : false,
 isLoading : false,
 user : null
}

const authSlice = createSlice({
    name : 'auth',
    initalState,
    reducers : { 
        setUser: (state,action)=> {

        }
    }
})

export const {setUser} = authSlice.actions
export default authSlice.reducer