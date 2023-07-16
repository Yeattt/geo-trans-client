import { createSlice } from '@reduxjs/toolkit';

export const modalsSlice = createSlice({
  name: 'modalsSlice',
  initialState: {
    isCreateModalOpen: false,
    isUpdateModalOpen: false,
    isInfoModalOpen: false,
    isChangeStatusModalOpen: false
  },
  reducers: {
    toggleIsCreateModalOpen: (state) => !state,
    toggleIsUpdateModalOpen: (state) => !state,
    toggleIsInfoModalOpen: (state) => !state,
    toggleIsChangeStatusModalOpen: (state) => !state,
  }
});

export const { 
  toggleIsCreateModalOpen, 
  toggleIsUpdateModalOpen, 
  toggleIsInfoModalOpen, 
  toggleIsChangeStatusModalOpen
} = modalsSlice.actions;