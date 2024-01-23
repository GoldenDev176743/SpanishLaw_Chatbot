// third-party
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// types
import { ChatStateProps } from "@/types/chat";
import { nanoId } from "@/lib/utils";
import toast from "react-hot-toast";

// ==============================|| SLICE - CHAT||============================== //

const initialState: ChatStateProps = {
  id: nanoId(),
  botType: "caselaw",
  chatList: [],
  history: [],
  loading: null,
  error: null,
};

export interface SendPromptProps {
  botType: string;
  id: string;
  prompt: string;
}

export interface fetchChatStateProps {
  botType: string;
  id: string;
}

export const sendPrompt = createAsyncThunk(
  "chat/sendPrompt",
  async ({ botType, id, prompt }: SendPromptProps) => {
    const response = await fetch(`api/v1/${botType}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, prompt: prompt }),
    });

    return await response.json();
  }
);

export const fetchChatState = createAsyncThunk(
  "chat/fetchChatState",
  async ({ botType, id }: fetchChatStateProps) => {
    const response = await fetch(`api/v1/${botType}?id=${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("fetchChatState----->", response.json());
    return await response.json();
  }
);

export const getHistory = createAsyncThunk(
  "chat/getHistory",
  async (botType: string) => {
    const response = await fetch(`api/v1/history?botType=${botType}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("getHistory----->", response.json());
    return await response.json();
  }
);

const chat = createSlice({
  name: "chatbot",
  initialState,
  reducers: {
    // has Error
    hasError(state, action) {
      state.error = action.payload;
    },

    setBotType(state, action) {
      state.botType = action.payload;
    },

    setId(state, action) {
      state.id = action.payload;
    },

    setChatList(state, action) {
      state.chatList = action.payload;
    },

    addChatList(state, action) {
      state.chatList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendPrompt.pending, (state) => {
        state.loading = "Waiting Response";
        state.error = null;
      })
      .addCase(sendPrompt.fulfilled, (state, action) => {
        state.loading = null;
        state.chatList.push(action.payload);
      })
      .addCase(sendPrompt.rejected, (state) => {
        state.loading = null;
        state.error = "Failed to response chatbot.";
        toast.error(state.error);
        state.chatList.pop();
      })
      .addCase(fetchChatState.pending, (state) => {
        state.loading = "Getting History";
        state.error = null;
      })
      .addCase(fetchChatState.fulfilled, (state, action) => {
        state.loading = null;
        state.chatList = action.payload;
      })
      .addCase(fetchChatState.rejected, (state) => {
        state.loading = null;
        state.error = "Failed to fetch chatstate.";
      })
      .addCase(getHistory.pending, (state) => {
        state.loading = "Getting History";
        state.error = null;
      })
      .addCase(getHistory.fulfilled, (state, action) => {
        state.loading = null;
        state.history = action.payload;
      })
      .addCase(getHistory.rejected, (state) => {
        state.loading = null;
        state.error = "Failed to get History.";
      });
  },
});

export const { setBotType, setId, setChatList, addChatList } = chat.actions;

export default chat.reducer;
