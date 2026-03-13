"use client";

import Image from "next/image";
import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "WORKER",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex h-screen w-full">
      {/* LEFT IMAGE */}
      <div className="relative hidden w-1/2 lg:block">
        <Image
          src="/login-bg.jpg"
          alt="parking"
          fill
          className="object-cover"
        />

        <div className="absolute top-8 left-8 text-white text-4xl font-bold">
          carparkly
        </div>
      </div>

      {/* RIGHT SIGNUP FORM */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-50">
        <div className="w-full max-w-md px-8">
          <h1 className="text-3xl font-semibold mb-3">Create Account</h1>

          <p className="text-gray-500 mb-8">
            Join our platform and start finding working holiday jobs today.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* FIRST NAME */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                First Name
              </label>

              <input
                name="firstName"
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
                type="text"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>

              <input
                name="email"
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
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={form.password}
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
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="WORKER">Worker</option>
                <option value="EMPLOYER">Employer</option>
              </select>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
            >
              SIGN UP
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <a href="/auth/signin" className="text-green-600 font-medium">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
