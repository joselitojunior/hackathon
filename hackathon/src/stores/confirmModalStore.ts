import { create } from "zustand";

type confirmModalStateProps = {
    visibility: boolean,
    setVisibility: (value: boolean) => void,
    func: any,
    setFunc: (value: any) => void,
}

export const confirmModalState = create<confirmModalStateProps>(set => ({
    visibility: false,
    setVisibility: (value) => set({ visibility: value }),
    func: null,
    setFunc: (value) => set({ func: value }),
}))