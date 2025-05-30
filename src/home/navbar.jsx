import React from "react";
import logo from "../assets/logo.svg";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="w-[100%] p-[30px] pl-[180px] pr-[180px]">
      <header className="flex items-center justify-between w-[100%]">
        <div className="w-[160px]">
          <img src={logo} alt="" draggable="false" />
        </div>
        <div className="flex items-center justify-center gap-[50px]">
          <div className="flex items-center justify-center gap-[30px]">
            {[t("Главная"), t("О гостинице"), t("Преимущества"), t("Номера"), t("Отзывы")].map(
              (text, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-[10px]"
                >
                  <p className="text-[#686868] hover:text-[#2F70D9] text-[18px] font-[400] cursor-pointer">
                    {text}
                  </p>
                </div>
              )
            )}
          </div>
          <button className="text-[#2F70D9] text-[18px] font-[600] p-[7px] pl-[19px] pr-[19px] border-[#2F70D9] border-[2px] rounded-[5px]">
            {t("Обратный звонок")}
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;