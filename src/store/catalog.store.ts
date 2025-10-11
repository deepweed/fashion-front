import { create } from "zustand";
import type { IStore } from "./store.types";

const initialQueryParams: Pick<IStore, "queryParams"> = {
  queryParams: {
    search: "",
    page: 1,
    perPage: 10,
  },
};

const useFiltersStore = create<IStore & { resetVersion: number }>((set) => ({
  ...initialQueryParams,
  isFilterUpdated: false,
  resetVersion: 0,

  updateQueryParam: ({ key, value }) =>
    set((state) => ({
      queryParams: { ...state.queryParams, [key]: value },
      isFilterUpdated: true,
    })),

  reset: () =>
    set(() => ({
      ...initialQueryParams,
      isFilterUpdated: true,
      resetVersion: Date.now(),
    })),
}));

export default useFiltersStore;
