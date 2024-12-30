import { create } from "zustand";

const useGetUser = create((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));

export default useGetUser;
