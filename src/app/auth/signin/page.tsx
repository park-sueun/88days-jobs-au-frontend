"use client";

import Image from "next/image";
import { useState } from "react";
import { login } from "@/domains/auth/api/authApi";
import { getMe } from "@/domains/user/api/userApi";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const router = useRouter();

  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await login({ email, password });
      const token = res.accessToken;
      setToken(token);

      const user = await getMe();
      setUser(user);

      router.push("/");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="flex h-screen w-full">
      {/* LEFT IMAGE SECTION */}
      <div className="relative hidden w-1/2 lg:block">
        <Image
          src="/login-bg.jpg"
          alt="signup background"
          fill
          className="object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* branding */}
        <div className="absolute top-8 left-8 text-white">
          <h1 className="text-4xl font-bold">{/* Australia Jobs */}</h1>
          <p className="mt-2 text-sm text-gray-200">
            {/* Find farms, factories, and opportunities across Australia */}
          </p>
        </div>
      </div>

      {/* RIGHT LOGIN SECTION */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-50">
        <div className="w-full max-w-md px-8">
          <h1 className="text-3xl font-semibold mb-3">Welcome Back</h1>

          <p className="text-gray-500 mb-8">
            Sign in to explore jobs and manage your applications.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>

              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="text-right mt-1 text-sm text-gray-500 cursor-pointer hover:underline">
                Forgot your password?
              </div>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-950 text-white py-3 rounded-lg transition"
            >
              Sign In
            </button>
          </form>

          {/* DIVIDER */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* SOCIAL LOGIN */}
          <div className="flex justify-center gap-4">
            <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
              G
            </button>

            <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
              f
            </button>

            <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
              
            </button>
          </div>

          {/* SIGNUP */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <a
              href="/auth/signup"
              className="text-blue-900 font-medium hover:underline"
            >
              Register Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}