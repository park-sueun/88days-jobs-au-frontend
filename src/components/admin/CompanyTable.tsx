"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getCompanies } from "@/services/companies/api/companyApi"

type Company = {
  id: number
  name: string
  unit?: string | null
  street?: string | null
  suburb?: string | null
  state: string
  postcode: string
  category: string
  status: "ACTIVE" | "PENDING" | "INACTIVE"
}

export default function CompanyTable() {
  const router = useRouter()

  const [companies, setCompanies] = useState<Company[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getCompanies()
        setCompanies(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }

    fetch()
  }, [])

  const getStatusStyle = (status: Company["status"]) => {
    switch (status) {
      case "ACTIVE":
        return "bg-green-100 text-green-700"
      case "PENDING":
        return "bg-yellow-100 text-yellow-700"
      case "INACTIVE":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  const formatAddress = (c: Company) => {
    return `${c.unit ? c.unit + " / " : ""}${c.street ? c.street : ""} ${c.suburb ? c.suburb : ""}`
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">

      {/* header */}
      <div className="flex justify-between mb-6">

        <div className="flex gap-4">

          <input
            placeholder="Search companies..."
            className="border rounded px-4 py-2 w-80"
          />

          <select className="border rounded px-4 py-2">
            <option>All Categories</option>
            <option>Farm</option>
            <option>Factory</option>
            <option>Agency</option>
            <option>Hostel</option>
          </select>

        </div>

        <button
          onClick={() => router.push("/admin/companies/new")}
          className="bg-orange-500 text-white px-4 py-2 rounded"
        >
          + Register Company
        </button>

      </div>

      {/* table */}
      <table className="w-full border-collapse">

        <thead>
          <tr className="text-left border-b">
            <th className="py-3">Name</th>
            <th>Address</th>
            <th>State</th>
            <th>Postcode</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {companies.map((c) => (
            <tr
              key={c.id}
              onClick={() => router.push(`/admin/companies/${c.id}`)}
              className="border-b hover:bg-gray-50 cursor-pointer"
            >
              <td className="py-3 font-medium text-blue-600">
                {c.name}
              </td>

              <td>{formatAddress(c)}</td>

              <td>{c.state}</td>

              <td>{c.postcode}</td>

              <td>{c.category}</td>

              <td>
                <span
                  className={`px-2 py-1 text-xs rounded ${getStatusStyle(c.status)}`}
                >
                  {c.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}