
import { createSlice } from '@reduxjs/toolkit';

const getSavedUser = () => {
    try {
        const savedData = localStorage.getItem('userData');
        return savedData ? JSON.parse(savedData) : { userName: '', userRoll: '' };
    } catch (error) {
        return { userName: '', userRoll: '' };
    }
};

const initialUserData = getSavedUser();

export const slice = createSlice({
    name: "user",
    initialState: {
        userName: initialUserData.userName,
        userRoll: initialUserData.userRoll,
    },
    reducers: {
        setUserData: (state, reqUser) => {
            state.userName = reqUser.payload.name;
            state.userRoll = reqUser.payload.role;

            try {
                localStorage.setItem('userData', JSON.stringify({
                    userName: reqUser.payload.name,
                    userRoll: reqUser.payload.role
                }));
            } catch (error) {
                console.error("LocalStorage error:", error);
            }
        },
        
        logoutUser: (state) => {
            state.userName = '';
            state.userRoll = '';
            try {
                localStorage.removeItem('userData');
            } catch (error) {
                console.error("LocalStorage remove error:", error);
            }
        }
    }
});


export const { setUserData, logoutUser } = slice.actions;
export default slice.reducer;

















// import { createSlice } from '@reduxjs/toolkit'

// export const slice = createSlice({
//     name: "user",
//     initialState: {
//         userName: '',
//         userRoll: '',
//     },
//     reducers: {
//         setUserData: (state, reqUser) => {
//             state.userName = reqUser.payload.name;
//             state.userRoll = reqUser.payload.role;
//         }
//     }
// })

// export const { setUserData } = slice.actions;
// export default slice.reducer;

