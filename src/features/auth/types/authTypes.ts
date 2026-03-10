export const USER_ROLE = {
  WORKER: "WORKER",
  EMPLOYER: "EMPLOYER",
  ADMIN: "ADMIN"
} as const;

export type UserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE];

export interface SignupRequest {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: UserRole;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface AuthResponse {
    accessToken: string;
    refreshToken?: string;
}