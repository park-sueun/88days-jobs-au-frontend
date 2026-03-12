import { apiClient } from "@/lib/apiClient";

export const getMe = async () => {
    const res = await apiClient.get("/api/users/me");
    return res.data;
};