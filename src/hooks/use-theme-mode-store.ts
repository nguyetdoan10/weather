import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { ThemeMode } from '../theme';

type ThemeModeStore = {
  mode: ThemeMode;
  toggleThemeMode: () => void;
};

export const useThemeModeStore = create<ThemeModeStore>()(
  persist(
    (set) => ({
      mode: 'light',
      toggleThemeMode: () => {
        set((prevState) => {
          return {
            mode: prevState.mode === 'light' ? 'dark' : 'light',
          };
        });
      },
    }),

    {
      name: 'theme-mode',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
