import { create } from "zustand";

type navbarStateProps = {
    page: number,
    setPage: (value: number) => void,
}

export const navbarState = create<navbarStateProps>(set => ({
    page: 0,
    setPage: (value) => set({ page: value }),
}))