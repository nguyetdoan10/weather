import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type SearchItem = {
  keyword: string;
  time: Date;
};

type WeatherStore = {
  searchValue: string | null;
  searchList: Array<SearchItem> | null;
  setSearchValue: (value: string) => void;
  removeSearch: (searchIndex: number) => void;
};

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set) => ({
      searchValue: null,
      searchList: null,
      setSearchValue: (value: string) => {
        set((prevState) => ({
          searchValue: value,
          searchList: [
            {
              keyword: value,
              time: new Date(),
            },
            ...(prevState.searchList || []),
          ],
        }));
      },

      removeSearch: (searchIndex: number) => {
        set((state) => ({
          searchList: state.searchList?.filter((_, idx) => idx !== searchIndex),
        }));
      },
    }),
    {
      name: 'search-list',
      storage: createJSONStorage(() => localStorage),
      partialize: (state: WeatherStore) => ({
        searchList: state.searchList,
      }),
    }
  )
);
