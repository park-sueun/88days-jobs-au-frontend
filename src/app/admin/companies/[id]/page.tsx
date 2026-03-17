"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getCompany, deleteCompany } from "@/services/companies/api/companyApi"
import Modal from "@/components/ui/Modal"

export default function CompanyDetailPage() {
  const { id } = useParams()
  const router = useRouter()

  const [company, setCompany] = useState<any>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      const data = await getCompany(Number(id))
      setCompany(data)
    }
    fetch()
  }, [id])

  if (!company) return <div className="p-6">Loading...</div>

  return (
    <div className="p-8 space-y-8 bg-gray-100">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-400">
        <a href="/admin/companies" className="text-gray-400 cursor-pointer">
                Companies
        </a> / <span className="text-gray-700">{company.name}</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">{company.name}</h1>
          <p className="text-gray-500 text-sm">{company.category}</p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => router.push(`/admin/companies/${id}/edit`)}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-sm"
          >
            Edit
          </button>

          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-sm"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Summary Card */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-400 text-sm">Status</p>
          <span className="inline-block mt-2 px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
            {company.status}
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-400 text-sm">State</p>
          <p className="text-lg font-semibold mt-2">{company.state}</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-400 text-sm">Postcode</p>
          <p className="text-lg font-semibold mt-2">{company.postcode}</p>
        </div>
      </div>

      {/* Detail Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm">

        <h2 className="text-lg font-semibold mb-4">
          Company Information
        </h2>

        <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">

          <Info label="Name" value={company.name} />
          <Info label="Category" value={company.category} />

          <Info label="Unit" value={company.unit || "-"} />
          <Info label="Street" value={company.street} />

          <Info label="Suburb" value={company.suburb} />
          <Info label="State" value={company.state} />

          <Info label="Postcode" value={company.postcode} />
          <Info label="Latitude" value={company.lat} />

          <Info label="Longitude" value={company.lng} />

        </div>
      </div>

      {/* Modal */}
      <Modal
        open={open}
        title="Delete Company"
        description="This action cannot be undone."
        onClose={() => setOpen(false)}
      >
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={() => setOpen(false)}
            className="px-6 py-2 border rounded"
          >
            Cancel
          </button>

          <button
            onClick={async () => {
                await deleteCompany(Number(id))
                router.push("/admin/companies")
            }}
            className="px-7 py-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      </Modal>

    </div>
  )
}

/* 재사용 컴포넌트 */
function Info({ label, value }: { label: string; value: any }) {
  return (
    <div>
      <p className="text-gray-400">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  )
}