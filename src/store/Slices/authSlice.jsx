import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import auth from '../../utils/fireBase';

const saveUserToSession = (user) => {
  sessionStorage.setItem('user', JSON.stringify(user));
}

const getUserFromSession = ()=>{
  const user = sessionStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

export const signUp = createAsyncThunk('auth/signUp', async ({ email, password }, thunkAPI) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    saveUserToSession(userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('SignUp Error:', error);
    return thunkAPI.rejectWithValue(error.message || 'Unknown error occurred during sign up.');
  }
});

export const signIn = createAsyncThunk('auth/signIn', async ({email, password}, thunkAPI) => {
  try{
    const userCredential  = await signInWithEmailAndPassword(auth, email, password);
    saveUserToSession(userCredential.user);
    return userCredential.user;
  }catch(error){
    console.error('SignIn Error:', error);  // Log the error
    return thunkAPI.rejectWithValue(error.message || 'Unknown error occurred during sign in.');
  }
});

export const signOutUser = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try{
    await signOut(auth);
    sessionStorage.removeItem('user');
  }catch(error){
    console.error('SignOut Error:', error);  // Log the error
    return thunkAPI.rejectWithValue(error.message || 'Unknown error occurred during sign out.');
  }
});

export const checkAuthStatus = createAsyncThunk('auth/checkAuthStatus', async (_, thunkAPI) => {
  const user = getUserFromSession();
  if (user) {
    return user;
  }
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user ? user : null);
    });
  });
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: getUserFromSession(),
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null; // Reset error on success
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Unknown error occurred during sign up.';
      })
      .addCase(signIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null; 
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Unknown error occurred during sign in.';
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.user = null;
        state.status = 'idle'; // Reset status on sign out
        state.error = null; // Reset error on sign out
      })
      .addCase(signOutUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Unknown error occurred during sign out.';
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;