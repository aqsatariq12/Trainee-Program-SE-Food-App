import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/api";
import { ENDPOINTS } from "../../api/endpoints";

const fetchAnalytics = async (endpoint, rejectWithValue) => {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return rejectWithValue(data);
    }

    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
};
// revenue overtime
export const fetchRevenueOverTime = createAsyncThunk(
  "adminAnalytics/fetchRevenueOverTime",
  async (_, { rejectWithValue }) => {
    return fetchAnalytics(ENDPOINTS.ADMIN_REVENUE_OVER_TIME, rejectWithValue);
  },
);
// order status
export const fetchOrdersByStatus = createAsyncThunk(
  "adminAnalytics/fetchOrdersByStatus",
  async (_, { rejectWithValue }) => {
    return fetchAnalytics(ENDPOINTS.ADMIN_ORDERS_BY_STATUS, rejectWithValue);
  },
);
// popular items
export const fetchPopularItems = createAsyncThunk(
  "adminAnalytics/fetchPopularItems",
  async (_, { rejectWithValue }) => {
    return fetchAnalytics(ENDPOINTS.ADMIN_POPULAR_ITEMS, rejectWithValue);
  },
);
//popular deals
export const fetchPopularDeals = createAsyncThunk(
  "adminAnalytics/fetchPopularDeals",
  async (_, { rejectWithValue }) => {
    return fetchAnalytics(ENDPOINTS.ADMIN_POPULAR_DEALS, rejectWithValue);
  },
);
// Revenve by restaurant
export const fetchRevenueByRestaurant = createAsyncThunk(
  "adminAnalytics/fetchRevenueByRestaurant",
  async (_, { rejectWithValue }) => {
    return fetchAnalytics(
      ENDPOINTS.ADMIN_REVENUE_BY_RESTAURANT,
      rejectWithValue,
    );
  },
);
export const fetchOverview = createAsyncThunk(
  "adminAnalytics/fetchOverview",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${BASE_URL}${ENDPOINTS.ADMIN_OVERVIEW}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const adminAnalyticsSlice = createSlice({
  name: "adminAnalytics",

initialState: {
  overview: null,
  revenueOverTime: [],
  revenueByRestaurant: [],
  ordersByStatus: [],
  popularItems: [],
  popularDeals: [],
  loading: false,
  error: null,
},

  reducers: {},

  extraReducers: (builder) => {
    builder

      // ================= OVERVIEW =================
      .addCase(fetchOverview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOverview.fulfilled, (state, action) => {
        state.loading = false;
        state.overview = action.payload.data;
      })
      .addCase(fetchOverview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ================= REVENUE OVER TIME =================
      .addCase(fetchRevenueOverTime.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRevenueOverTime.fulfilled, (state, action) => {
        state.loading = false;
        state.revenueOverTime = action.payload.data;
      })
      .addCase(fetchRevenueOverTime.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ================= ORDERS BY STATUS =================
      .addCase(fetchOrdersByStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrdersByStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.ordersByStatus = action.payload.data;
      })
      .addCase(fetchOrdersByStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ================= POPULAR ITEMS =================
      .addCase(fetchPopularItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularItems.fulfilled, (state, action) => {
        state.loading = false;
        state.popularItems = action.payload.data;
      })
      .addCase(fetchPopularItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ================= POPULAR DEALS =================
      .addCase(fetchPopularDeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularDeals.fulfilled, (state, action) => {
        state.loading = false;
        state.popularDeals = action.payload.data;
      })
      .addCase(fetchPopularDeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ================= REVENUE BY RESTAURANT =================
      .addCase(fetchRevenueByRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRevenueByRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.revenueByRestaurant = action.payload.data;
      })
      .addCase(fetchRevenueByRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default adminAnalyticsSlice.reducer;