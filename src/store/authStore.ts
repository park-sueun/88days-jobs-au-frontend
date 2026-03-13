import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profileImageUrl: string;
}

interface AuthState {
  token: string | null;
  user: User | null;

  setToken: (token: string) => void;
  setUser: (user: User | null) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,

      setToken: (token) => {
        localStorage.setItem("accessToken", token);
        set({ token });
      },

      setUser: (user) => set({ user }),

      logout: () => {
        localStorage.removeItem("accessToken");
        set({ token: null, user: null });
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);