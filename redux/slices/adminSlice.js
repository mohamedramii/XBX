import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setToken, removeToken } from '@/utils/auth';
import AuthService from '@/services/api/auth.service';

const initialState = {
  adminUser: null,
  superAdminUser: null,
  isLoading: false,
  error: null,
};

// Async thunks
export const loginAdmin = createAsyncThunk(
  'admin/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const result = await AuthService.adminSignIn(username, password);
      if (result.success) {
        return result.data;
      }
      return rejectWithValue(result.error);
    } catch (error) {
      return rejectWithValue(error.message || 'Authentication failed');
    }
  }
);

export const loginSuperAdmin = createAsyncThunk(
  'admin/loginSuperAdmin',
  async ({ userName, password }, { rejectWithValue }) => {
    try {
      console.log('Sending request with:', { userName, password });

      // Clear any existing admin tokens
      removeToken('admin');

      const response = await fetch('https://xbx-server.vercel.app/superAdmin/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });

      const data = await response.json();
      console.log('API Response:', data);

      if (!response.ok) {
        return rejectWithValue(data.message || 'Login failed');
      }

      // Set token immediately
      setToken(data.AccessToken, 'superAdmin');

      return {
        AccessToken: data.AccessToken,
        id: data.adminID,
        name: data.superAdminName,
      };
    } catch (error) {
      console.error('API Error:', error);
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

// Logout thunks
export const logoutAdmin = createAsyncThunk('admin/logoutAdmin', async (_, { dispatch }) => {
  removeToken('admin');
  dispatch(resetState());
});

export const logoutSuperAdmin = createAsyncThunk(
  'admin/logoutSuperAdmin',
  async (_, { dispatch }) => {
    removeToken('superAdmin');
    dispatch(resetState());
  }
);

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdminUser: (state, action) => {
      state.adminUser = action.payload;
      state.error = null;
    },
    setSuperAdminUser: (state, action) => {
      state.superAdminUser = action.payload;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearAdminUser: (state) => {
      state.adminUser = null;
      state.error = null;
      state.isLoading = false;
      removeToken('admin');
    },
    clearSuperAdminUser: (state) => {
      state.superAdminUser = null;
      state.error = null;
      state.isLoading = false;
      removeToken('superAdmin');
    },
    resetState: (state) => {
      state.adminUser = null;
      state.superAdminUser = null;
      state.isLoading = false;
      state.error = null;
      removeToken('admin');
      removeToken('superAdmin');
    },
  },
  extraReducers: (builder) => {
    builder
      // Login Admin cases
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adminUser = action.payload.user;
        state.error = null;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Login Super Admin cases
      .addCase(loginSuperAdmin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        console.log('Login pending...');
      })
      .addCase(loginSuperAdmin.fulfilled, (state, action) => {
        console.log('Setting superAdminUser state:', action.payload);
        state.isLoading = false;
        state.error = null;
        state.superAdminUser = action.payload;
      })
      .addCase(loginSuperAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Login failed';
        state.superAdminUser = null;
        console.log('Login rejected:', action.payload);
      })
      // Logout Admin cases
      .addCase(logoutAdmin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutAdmin.fulfilled, (state) => {
        state.isLoading = false;
        state.adminUser = null;
        state.error = null;
      })
      .addCase(logoutAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Logout Super Admin cases
      .addCase(logoutSuperAdmin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutSuperAdmin.fulfilled, (state) => {
        state.isLoading = false;
        state.superAdminUser = null;
        state.error = null;
      })
      .addCase(logoutSuperAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setAdminUser,
  setSuperAdminUser,
  setLoading,
  setError,
  clearError,
  clearAdminUser,
  clearSuperAdminUser,
  resetState,
} = adminSlice.actions;

// Selectors
export const selectAdminUser = (state) => state.admin.adminUser;
export const selectSuperAdminUser = (state) => state.admin.superAdminUser;
export const selectIsLoading = (state) => state.admin.isLoading;
export const selectError = (state) => state.admin.error;
export const selectAdminAuth = (state) => !!state.admin.adminUser;
export const selectSuperAdminAuth = (state) => !!state.admin.superAdminUser;

export default adminSlice.reducer;
