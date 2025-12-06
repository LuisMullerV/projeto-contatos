import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Contact {
  id: string
  name: string
  email: string
  phone: string
}

interface ContactsState {
  list: Contact[]
  editingId: string | null
}

const initialState: ContactsState = {
  list: [],
  editingId: null
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      state.list.push({
        id: String(Date.now()),
        ...action.payload
      })
    },

    removeContact: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(c => c.id !== action.payload)
    },

    startEditing: (state, action: PayloadAction<string>) => {
      state.editingId = action.payload
    },

    cancelEditing: (state) => {
      state.editingId = null
    },

    updateContact: (
      state,
      action: PayloadAction<{ id: string; name: string; email: string; phone: string }>
    ) => {
      const index = state.list.findIndex(c => c.id === action.payload.id)
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...action.payload }
      }
      state.editingId = null
    }
  }
})

export const {
  addContact,
  removeContact,
  startEditing,
  cancelEditing,
  updateContact
} = contactsSlice.actions

export default contactsSlice.reducer
