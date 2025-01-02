import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface StoreState {
  counter: number
  increment: () => void
  decrement: () => void
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      counter: 0,
      increment: () => set((state) => ({ counter: state.counter + 1 })),
      decrement: () => set((state) => ({ counter: state.counter - 1 })),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
) 