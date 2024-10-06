import { create } from "zustand";

const useStore = create((set, get) => ({
  myString: "", // Initial state for the string
  setString: (newString) => set({ myString: newString }), // Function to update the string
  // getString: () => console.log(get().myString),
}));

export default useStore;
