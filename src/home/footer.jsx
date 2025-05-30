import React from "react";
import { FaWhatsapp, FaViber, FaArrowUp } from "react-icons/fa";
import footer_logo from "../assets/footer_logo.svg";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-[100%] bg-[#2C2F33] text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 xl:gap-8 justify-items-start">
        <div className="w-[180px]">
          <img src={footer_logo} alt="" draggable="false" />
        </div>
        <div className="col-span-1">
          <h3 className="text-[#3B82F6] text-lg font-semibold mb-4">
            Навигация
          </h3>
          <ul className="text-white text-sm space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                Главная
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                О гостинице
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                Преимущества
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                Номера
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                Отзывы
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-[#3B82F6] text-lg font-semibold mb-4">
            Быстрая связь
          </h3>
          <div className="flex flex-col space-y-4">
            <button className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 cursor-pointer">
              Забронировать
            </button>
            <button className="bg-transparent border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 cursor-pointer">
              Обратный звонок
            </button>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center col-span-1">
          <button
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#2C2F33] transition-colors duration-200 text-2xl"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="text-[#3B82F6] text-lg font-semibold mb-4">
            Контакты
          </h3>
          <p className="font-semibold text-white mb-2">Адрес:</p>
          <p className="text-sm text-white mb-4">Кайдаловская ул., 37, Чита</p>
          <p className="text-sm text-white">+7 (3022) 217856</p>
          <p className="text-sm text-white mb-4">+79294830255</p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] flex items-center justify-center cursor-pointer transition-colors duration-200"
              aria-label="Viber"
            >
              <FaViber className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-[#4CAF50] hover:bg-[#388E3C] flex items-center justify-center cursor-pointer transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center text-gray-400 text-xs mt-8 pt-6 border-t border-gray-700">
        <p>© Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;