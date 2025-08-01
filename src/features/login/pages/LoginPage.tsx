import LoginForm from "../componets/LoginForm";
import SocialAuth from "../componets/SocialAuth";

export default function LoginPage() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="min-h-screen w-full max-w-[880px] rounded-2xl p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-12 min-h-[32px] min-w-[327px]">
          Expenset.
        </h1>
        <h2 className="text-xl font-bold text-center min-h-[32px] min-w-[327px]">
          Login
        </h2>
        <div className="space-y-4">
          <LoginForm />
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-[.8rem] font-semibold">
              Or Login with
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <SocialAuth />
          <p className="text-sm text-center text-gray-500">
            Didn't have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
