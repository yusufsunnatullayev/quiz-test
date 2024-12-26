import { create } from "zustand";

const useFilter = create((set) => ({
  selectedSubject: "Iqtisodiyot Nazariyasi",
  selectedLevel: "random",
  setSubject: (subject) => set(() => ({ selectedSubject: subject })),
  setLevel: (level) => set(() => ({ selectedLevel: level })),
}));

export default useFilter;
