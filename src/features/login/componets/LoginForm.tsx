import InputField from "@shared/ui/Input";
import useLogin from "../hooks/useLogin";

const LoginForm = () => {
  const { formValues, handleChange, register, handleLoginForm, errors } =
    useLogin();
  return (
    <form className="space-y-6" onSubmit={handleLoginForm}>
      <InputField
        label="Email"
        placeholder="Enter your Name"
        inputClassName="focus:ring-2 focus:ring-blue-400 bg-gray-100 border-none"
        value={formValues.email}
        {...register("email")}
        onChange={handleChange}
        error={errors.email}
      />
      <div className="relative">
        <InputField
          label="Password"
          type="Password"
          placeholder="••••••••"
          inputClassName="focus:ring-2 focus:ring-blue-400 bg-gray-100 border-none"
          value={formValues.password}
          {...register("password")}
          onChange={handleChange}
          error={errors.password}
        />
        <div className="text-right mt-1">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forget Password
          </a>
        </div>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
