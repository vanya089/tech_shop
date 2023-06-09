import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../store";


export type TypeUser = {
    id: number;
    email: string;
    password: string;
    role: string;
}
interface IUserSliceState {
    isAuth: boolean;
    user: TypeUser[];
}

const initialState: IUserSliceState = {
    isAuth: false,
    user: [],
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<TypeUser[]>) {
            state.user = action.payload;
        },
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },

    }
});

export const isAuthSelector = (state: RootState) => state.user.isAuth;
export const userSelector = (state: RootState) => state.user.user;

export const {setUser, setAuth} = userSlice.actions;

export default userSlice.reducer;