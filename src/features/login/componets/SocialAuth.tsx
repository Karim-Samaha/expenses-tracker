import FadeIn from "@shared/ui/FadeIn";
import { AppleIcon, GoogleIcon } from "../../../assets";

const SocialAuth = () => {
  return (
    <FadeIn>
      <div>
        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition mb-3">
          <GoogleIcon />
          Continue With Google
        </button>

        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
          <AppleIcon />
          Continue With Apple
        </button>
      </div>
    </FadeIn>
  );
};

export default SocialAuth;
