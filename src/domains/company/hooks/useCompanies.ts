"use client";

import { useEffect, useState } from "react";
import { getCompanies } from "../api/companyApi";
import { Company, CompanyCategory } from "../types/company";

export function useCompanies(category: CompanyCategory) {
  const [companies, setCompanies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    getCompanies({ category })
      .then((data) => {
        setCompanies(data ?? []); // undefined 방지
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch companies");
        setCompanies([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return { companies, loading, error };
}