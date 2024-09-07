import { create } from "zustand";

const useStore = create((set) => ({
  token: null,
  me: null,
  setToken: (token) =>
    set(() => ({
      token,
    })),
  setMe: (me) =>
    set(() => ({
      me,
    })),
  
}));
export default useStore