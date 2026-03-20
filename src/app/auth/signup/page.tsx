import Image from "next/image";
import SignupForm from "@/domains/auth/components/SignupForm";

export default function SignupPage() {
  return (
    <div className="flex h-screen w-full">
      {/* LEFT IMAGE */}
      <div className="relative hidden w-1/2 lg:block">
        <Image
          src="/login-bg.jpg"
          alt="signup background"
          fill
          className="object-cover"
        />

        <div className="absolute top-8 left-8 text-white text-4xl font-bold">
          {/* carparkly */}
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-50">
        <div className="w-full max-w-md px-8">
          <h1 className="text-3xl font-semibold mb-3">Create Account</h1>

          <p className="text-gray-500 mb-8">
            Join our platform and start finding working holiday jobs today.
          </p>

          <SignupForm />

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
