import { useAuth } from "@shared/context/AuthContext";
import React from "react";
interface AvatarProps {
  user: string;
}
const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className="w-[38px] h-[38px] rounded-[50%] text-white bg-[#D7A97D] border-white border-1 flex items-center justify-center text-bold font-semibold">
      {user.substring(0, 2).toLocaleUpperCase()}
    </div>
  );
};

export default Avatar;
