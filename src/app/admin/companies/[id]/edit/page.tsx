"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getCompany, updateCompany } from "@/domains/company/api/companyApi";
import SummaryItem from "@/domains/company/components/SummaryItem";
import FormInput from "@/domains/company/components/FormInput";
import FormSelect from "@/domains/company/components/FormSelect";

export default function CompanyEditPage() {
  const { id } = useParams()
  const router = useRouter()

  const [form, setForm] = useState<any>(null)

  useEffect(() => {
    const fetch = async () => {
      const data = await getCompany(Number(id))
      setForm(data)
    }
    fetch()
  }, [id])

  if (!form) return <div className="p-6">Loading...</div>

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    await updateCompany(Number(id), form)
    router.push(`/admin/companies/${id}`)
  }

  return (
    <div className="p-6 space-y-6 bg-gray-100">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-400">
        <a href="/admin/companies" className="text-gray-400 cursor-pointer">
                Companies
        </a> / <span className="text-gray-700">{form.name}</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Edit Company</h1>
          <p className="text-gray-500 text-sm">{form.category}</p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-sm"
          >
            Save
          </button>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm">

        <h2 className="text-lg font-semibold mb-6">
          Company Information
        </h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-5">

          <FormInput label="Name" name="name" value={form.name} onChange={handleChange} />
          <FormInput label="Category" name="category" value={form.category} onChange={handleChange} />

          <FormInput label="Unit" name="unit" value={form.unit || ""} onChange={handleChange} />
          <FormInput label="Street" name="street" value={form.street} onChange={handleChange} />

          <FormInput label="Suburb" name="suburb" value={form.suburb} onChange={handleChange} />
          <FormInput label="State" name="state" value={form.state} onChange={handleChange} />

          <FormInput label="Postcode" name="postcode" value={form.postcode} onChange={handleChange} />

          <FormSelect
            label="Status"
            name="status"
            value={form.status}
            onChange={handleChange}
            options={["ACTIVE", "PENDING", "INACTIVE"]}
          />

        </div>
      </div>

    </div>
  )
}