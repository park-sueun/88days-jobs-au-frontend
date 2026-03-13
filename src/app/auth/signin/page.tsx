"use client";

import Image from "next/image";
import { useState } from "react";
import { login } from "@/services/auth/api/authApi";
import { getMe } from "@/services/users/userService";
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

      // 1. 로그인
      const res = await login({ email, password });

      // 2. 토큰 저장
      const token = res.accessToken;
      setToken(token);

      // 3. 유저 조회
      const user = await getMe();

      // 4. 유저 저장
      setUser(user);

      // 5. 메인 이동
      router.push("/");
    };

    return (
      <div className="flex h-screen w-full">
        {/* LEFT IMAGE SECTION */}
        <div className="relative hidden w-1/2 lg:block">
          <Image
            src="/login-bg.jpg"
            alt="farming"
            fill
            className="object-cover"
          />

          <div className="absolute top-8 left-8 text-white text-4xl font-bold">
            Australia Jobs
          </div>
        </div>

        {/* RIGHT LOGIN SECTION */}
        <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-50">
          <div className="w-full max-w-md px-8">
            <h1 className="text-3xl font-semibold mb-3">Welcome Back 👋</h1>

            <p className="text-gray-500 mb-8">
              Today is a new day. You shape it. Sign in to start managing your
              car parking solutions.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* EMAIL */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Id
                </label>

                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className="text-right mt-1 text-sm text-gray-500">
                  Forgot your password?
                </div>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
              >
                SIGN IN
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
              <button className="bg-gray-200 px-4 py-2 rounded-lg">G</button>

              <button className="bg-gray-200 px-4 py-2 rounded-lg">f</button>

              <button className="bg-gray-200 px-4 py-2 rounded-lg"></button>
            </div>

            {/* SIGNUP */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Don’t have account?{" "}
              <a href="/auth/signup" className="text-green-600 cursor-pointer">
                Register Now
              </a>
              {/* <span className="text-green-600 cursor-pointer">Register Now</span> */}
            </p>
          </div>
        </div>
      </div>
    );
}
