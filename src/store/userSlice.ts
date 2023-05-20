import { createSlice, createAsyncThunk, PayloadAction, Dispatch, AnyAction } from '@reduxjs/toolkit';
import { User } from '../shared/types';
import { setDoc, doc, query, onSnapshot, where } from "firebase/firestore";
import { ref, auth, db } from '../shared/firebase';
import { onAuthStateChanged } from "firebase/auth";

export type UserState = {
    user: User | null,
    loadingUser: boolean
}

export const fetchUser = createAsyncThunk<unknown, undefined, { state: { user: UserState }, dispatch: Dispatch<AnyAction> }>(
    'user/fetchUser',
    function (_, { getState, dispatch }) {
        const userState: User | null = getState().user.user
        onAuthStateChanged(auth, (user) => {
            if (!user) return;
            const userData: User = {
                docId: null,
                profileId: user.uid,
                name: user.displayName || "",
                photo: user.photoURL || "",
                email: user.email,
                destination: null
            }
            const queryWhere = query(ref, where("profileId", "==", user.uid));
            onSnapshot(queryWhere, (querySnapshot) => {
                querySnapshot.forEach(data => {
                    dispatch(setUser(data.data() as User))
                })
            });
            if (userState) return;
            dispatch(setUser(userData))
        });
    }
);

export const addDestination = createAsyncThunk<User | null, string, { state: { user: UserState } }>(
    'user/addDestination',
    function (destination, { getState, dispatch }) {
        const userState: User | null = getState().user.user
        if (!userState) return null;
        const docRef = doc(db, 'travelers', userState.profileId);
        const response = setDoc(docRef, { ...userState, destination }, { merge: true })
            .then(() => ({ ...userState, destination }))
            .catch(() => userState);
        return response;
    }
);

export const removeDestination = createAsyncThunk<User | null, undefined, { state: { user: UserState } }>(
    'user/removeDestination',
    function (_, { getState }) {
        const userState: User | null = getState().user.user
        if (!userState) return null;
        const docRef = doc(db, 'travelers', userState.profileId);
        const response = setDoc(docRef, { ...userState, destination: null }, { merge: true })
            .then(() => ({ ...userState, destination: null }))
            .catch(() => userState);
        return response;
    }
);

const initialState: UserState = {
    loadingUser: false,
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User | null>) {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher((action) => action.type.endsWith('/pending'), (state) => {
                state.loadingUser = true;
            })
            .addMatcher((action) => action.type.endsWith('/fulfilled'), (state, action) => {
                state.user = action.payload;
                state.loadingUser = false;
            })
            .addMatcher((action) => action.type.endsWith('/rejected'), (state) => {
                state.loadingUser = true;
            });
    }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
