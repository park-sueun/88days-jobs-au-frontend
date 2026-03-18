import { apiClient } from "@/shared/lib/apiClient";
import { LoginRequest, SignupRequest } from "../types/authTypes";

export const signup = async (data: SignupRequest) => {
    const res = await apiClient.post("api/auth/signup", data);
    return res.data;
};

export const login = async (data: LoginRequest) => {
    const res = await apiClient.post("api/auth/login", data);
    return res.data;
};