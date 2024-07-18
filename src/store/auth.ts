import { UserSchemaInfer } from "@/models";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string;
  user?: UserSchemaInfer;
  isAuth: boolean;
};

type Actions = {
  setToken: (token: string) => void;
  setUser: (user: UserSchemaInfer) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      user: undefined,
      isAuth: false,
      setToken: (token: string) =>
        set(() => ({
          token,
          isAuth: true,
        })),
      setUser: (user: UserSchemaInfer) => set({ user }),
      logout: () =>
        set(() => ({
          token: "",
          user: undefined,
          isAuth: false,
        })),
    }),
    { name: "auth" }
  )
);
