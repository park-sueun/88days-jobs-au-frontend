"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "../api/authApi";
import { SignupRequest, USER_ROLE, UserRole } from "../types/authTypes";
import Modal from "@/shared/components/ui/Modal";

export default function SignupForm() {

    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [successOpen, setSuccessOpen] = useState(false);

    const [form, setForm] = useState<SignupRequest>({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        role: USER_ROLE.WORKER,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        setForm((prev) => ({
          ...prev,
          [name]: value,
        }));
    };

    const handleRoleChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setForm((prev) => ({
          ...prev,
          role: e.target.value as UserRole,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
          setLoading(true);
          setError("");

          await signup(form);

          setSuccessOpen(true);

        } catch (err: any) {
          setError(err.message || "Signup failed");

        } finally {
          setLoading(false);
        }
    };

    return (
      <>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>

            <input
              name="email"
              placeholder="Email"
              type="email"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              name="password"
              type="password"
              placeholder="Password"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {/* FIRST NAME */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              First Name
            </label>

            <input
              name="firstName"
              placeholder="First Name"
              type="text"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={form.firstName}
              onChange={handleChange}
            />
          </div>

          {/* LAST NAME */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Last Name
            </label>

            <input
              name="lastName"
              placeholder="Last Name"
              type="text"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          {/* ROLE */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Account Type
            </label>

            <select
              name="role"
              value={form.role}
              onChange={handleRoleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value={USER_ROLE.WORKER}>Worker</option>
              <option value={USER_ROLE.EMPLOYER}>Employer</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
        <Modal
          open={successOpen}
          title="🎉 Account Created"
          description="Your account has been successfully created."
        >
          <button
            onClick={() => router.push("/auth/signin")}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg"
          >
            Go to Sign In
          </button>
        </Modal>
      </>
    );
}