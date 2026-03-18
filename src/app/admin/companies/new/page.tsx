"use client"

import { createCompany } from "@/domains/company/api/companyApi";
import { useState } from "react"
import { useRouter } from "next/navigation"
import GoogleMapProvider from "@/shared/lib/GoogleMapProvider";
import AddressSearch from "@/domains/company/components/AddressSearch";
import { CompanyCreateRequest } from "@/domains/company/components/CompanyForm";

export default function CompanyCreatePage() {
    const router = useRouter();

  const [form, setForm] = useState<CompanyCreateRequest>({
    name: "",
    contactNumber: "",
    email: "",
    website: "",
    description: "",

    unit: "",
    street: "",
    suburb: "",
    state: "",
    postcode: "",

    latitude: null,
    longitude: null,

    season: "",
    category: "",
    cropType: "",

    isVisaExtensionEligible: false,

    status: "ACTIVE"
    })

  const handleAddress = (data: Partial<CompanyCreateRequest>) => {
  setForm((prev) => ({
    ...prev,
    ...data
  }))
}

  const submit = async () => {
  try {

    const payload = {
      ...form,
      latitude: form.latitude ?? undefined,
      longitude: form.longitude ?? undefined
    }

    await createCompany(payload)

    router.push("/admin/companies")

  } catch (err) {
    console.error(err)
  }
}

  return (
    <GoogleMapProvider>

      <div className="max-w-3xl mx-auto p-8">

        <h1 className="text-2xl font-bold mb-6">
          Register Company
        </h1>

        <div className="space-y-4">

          <input
            placeholder="Company Name"
            className="border w-full p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder="Contact Number"
            className="border w-full p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, contactNumber: e.target.value })
            }
          />

          <input
            placeholder="Email"
            className="border w-full p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <select
            className="border w-full p-2 rounded"
            value={form.category}
            onChange={(e) =>
                setForm({ ...form, category: e.target.value })
            }
            >
            <option value="">Select Category</option>
            <option value="FARM">Farm</option>
            <option value="FACTORY">Factory</option>
            <option value="HOSPITALITY">Hospitality</option>
            <option value="FISHING">Fishing</option>
            <option value="WORKING_HOSTEL">Working Hostel</option>
            <option value="AGENCY">Agency</option>
        </select>

          <input
            placeholder="Website"
            className="border w-full p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, website: e.target.value })
            }
          />

          <AddressSearch onSelect={handleAddress} />

          <div className="grid grid-cols-2 gap-4">

            <input
              value={form.unit}
              placeholder="Unit"
              className="border p-2 rounded"
              readOnly
            />

            <input
              value={form.street}
              placeholder="Street"
              className="border p-2 rounded"
              readOnly
            />

            <input
              value={form.suburb}
              placeholder="Suburb"
              className="border p-2 rounded"
              readOnly
            />

            <input
              value={form.state}
              placeholder="State"
              className="border p-2 rounded"
              readOnly
            />

            <input
              value={form.postcode}
              placeholder="Postcode"
              className="border p-2 rounded"
              readOnly
            />

          </div>

          <input
            placeholder="Crop Type"
            className="border w-full p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, cropType: e.target.value })
            }
          />

          <input
            placeholder="Season"
            className="border w-full p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, season: e.target.value })
            }
          />

          <textarea
            placeholder="Description"
            className="border w-full p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <select
            className="border w-full p-2 rounded"
            value={form.status}
            onChange={(e) =>
                setForm({ ...form, status: e.target.value })
            }
            >
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
            <option value="PENDING">Pending</option>
            <option value="SUSPENDED">Suspended</option>
            <option value="DELETED">Deleted</option>
        </select>

          <div className="flex items-center gap-3">

            <input
                type="checkbox"
                checked={form.isVisaExtensionEligible}
                onChange={(e) =>
                setForm({
                    ...form,
                    isVisaExtensionEligible: e.target.checked
                })
                }
                className="w-4 h-4"
            />

            <label className="text-sm">
                Eligible for Visa Extension (2nd / 3rd WHV)
            </label>

        </div>

          <button
            onClick={submit}
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            Register
          </button>

        </div>

      </div>

    </GoogleMapProvider>
  )
}