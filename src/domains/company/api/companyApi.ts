import { apiClient } from "@/shared/lib/apiClient";
import { CompanyCreateRequest } from "../components/CompanyForm";

export const createCompany = (data: CompanyCreateRequest) => {
  return apiClient.post("/api/admin/companies", data);
};

export const getCompanies = async () => {
  const res = await apiClient.get("/api/companies")
  console.log(res.data.content)
  return res.data.content
}

export const getCompany = async (id: number) => {
  const res = await apiClient.get(`/api/companies/${id}`)
  return res.data
}

export const updateCompany = async (id: number, data: any) => {
  return apiClient.put(`/api/admin/companies/${id}`, data)
}

export const deleteCompany = async (id: number) => {
  return apiClient.delete(`/api/admin/companies/${id}`)
}