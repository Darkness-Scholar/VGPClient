import { atom } from 'recoil'

export const auth = atom({
    key: 'auth', 
    /* type: object */ default: JSON.parse(localStorage.getItem('auth')) || null,
  });