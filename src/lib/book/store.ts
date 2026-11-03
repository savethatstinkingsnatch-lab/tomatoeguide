import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ZoneId } from "./types";

type BookState = {
  zone: ZoneId;
  setZone: (zone: ZoneId) => void;
  read: string[];
  markRead: (slug: string) => void;
};

export const useBookStore = create<BookState>()(
  persist(
    (set, get) => ({
      zone: 6,
      setZone: (zone) => set({ zone }),
      read: [],
      markRead: (slug) => {
        const read = get().read;
        if (read.includes(slug)) return;
        set({ read: [...read, slug] });
      },
    }),
    { name: "the-tomato-book" },
  ),
);
