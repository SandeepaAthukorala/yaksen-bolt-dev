import React, { useEffect } from "react";
import { Brain } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import LogoImg from "../../assets/logo.png";

export default function Logo() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top when redirected to home page
  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <div onClick={handleLogoClick} className="flex items-center cursor-pointer">
      <div className="w-[45px]">
        <img src={LogoImg} alt="logo" />
      </div>
      <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
        YAKSEN
      </span>
    </div>
  );
}
