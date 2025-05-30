import React from "react";
import showcase from "../assets/showcase.svg";
import showcase_logo from "../assets/logo.svg";
import section1 from "../assets/section1.svg";
import section1_rectangle from "../assets/section1_rectangle.svg";
import wifi from "../assets/wifi.svg";
import time from "../assets/time.svg";
import tv from "../assets/tv.svg";
import parking from "../assets/parking.svg";
import wash from "../assets/wash.svg";
import banya from "../assets/banya.svg";
import oshxona from "../assets/oshxona.svg";
import banketni_zal from "../assets/banketni_zal.svg";
import qoshu_vilka from "../assets/qoshu_vilka.svg";
import { FaShower, FaBed, FaTv, FaWifi, FaUser } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import malcik from "../assets/malcik.svg";
import devocka from "../assets/devocka.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import user from "../assets/user.svg";
import ContactMapCard from "./ContactMapCard";

function Main() {
  return (
    <div className="flex items-center justify-center pl-[180px] pr-[180px]">
      <main className="flex flex-col items-center justify-center">
        <section className="flex items-center justify-center gap-[30px] pt-[50px] pb-[50px]">
          <div className="flex flex-col items-start justify-center w-[50%] gap-[40px]">
            <div className="w-[70%]">
              <img src={showcase_logo} alt="" draggable="false" />
            </div>
            <div className="w-[70%] overflow-hidden">
              <p className="text-[#686868] text-[16px] font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
            <button className="bg-[#D95845] text-white text-[22px] font-[700] rounded-[10px] p-[16px] pl-[46px] pr-[46px]">
              Забронировать
            </button>
          </div>
          <div className="w-[50%]">
            <img src={showcase} alt="" draggable="false" />
          </div>
        </section>
        <section className="flex items-center justify-center gap-[30px] pt-[50px] pb-[50px]">
          <div className="flex flex-col items-start justify-center gap-[150px] w-[30%]">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-end w-[100%]">
                <div className="w-[120px]">
                  <img src={section1} alt="" draggable="false" />
                </div>
              </div>
              <p className="text-[#2F70D9] text-[50px] font-[700]">
                О гостинице
              </p>
            </div>
            <div className="flex flex-col items-center justify-center overflow-hidden gap-[20px]">
              <p className="text-[#686868] text-[16px] font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <p className="text-[#686868] text-[16px] font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="w-[120px]">
              <img src={section1} alt="" draggable="false" />
            </div>
          </div>
          <div className="w-[70%]">
            <img src={section1_rectangle} alt="" draggable="false" />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-[100%] gap-[80px] pt-[50px] pb-[50px]">
          <div className="w-[100%]">
            <div className="flex flex-col items-start justify-center w-[29%] overflow-hidden">
              <div className="flex items-center justify-end w-[88%]">
                <div className="w-[120px]">
                  <img src={section1} alt="" draggable="false" />
                </div>
              </div>
              <p className="text-[#2F70D9] text-[50px] font-[700]">
                Мы предлагаем
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[70px] w-[70%]">
            <div className="flex items-start justify-between w-[100%] gap-[50px]">
              <div className="flex flex-col items-center justify-center overflow-hidden w-[230px] gap-[20px]">
                <div className="w-[75px]">
                  <img src={wifi} alt="" draggable="false" />
                </div>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <p className="text-[#2F70D9] text-[20px] text-center font-[700]">
                    Бесплатный WI-FI
                  </p>
                  <p className="text-[#686868] text-[14px] text-center font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center overflow-hidden w-[230px] gap-[20px]">
                <div className="w-[75px]">
                  <img src={time} alt="" draggable="false" />
                </div>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <p className="text-[#2F70D9] text-[20px] text-center font-[700]">
                    Круглосуточный доступ
                  </p>
                  <p className="text-[#686868] text-[14px] text-center font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center overflow-hidden w-[230px] gap-[20px]">
                <div className="w-[75px]">
                  <img src={tv} alt="" draggable="false" />
                </div>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <p className="text-[#2F70D9] text-[20px] text-center font-[700]">
                    Телевизор
                  </p>
                  <p className="text-[#686868] text-[14px] text-center font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between w-[100%] gap-[50px]">
              <div className="flex flex-col items-center justify-center overflow-hidden w-[230px] gap-[20px]">
                <div className="w-[75px]">
                  <img src={parking} alt="" draggable="false" />
                </div>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <p className="text-[#2F70D9] text-[20px] text-center font-[700]">
                    Парковка
                  </p>
                  <p className="text-[#686868] text-[14px] text-center font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center overflow-hidden w-[230px] gap-[20px]">
                <div className="w-[75px]">
                  <img src={wash} alt="" draggable="false" />
                </div>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <p className="text-[#2F70D9] text-[20px] text-center font-[700]">
                    Влажная уборка
                  </p>
                  <p className="text-[#686868] text-[14px] text-center font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center overflow-hidden w-[230px] gap-[20px]">
                <div className="w-[75px]">
                  <img src={banya} alt="" draggable="false" />
                </div>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <p className="text-[#2F70D9] text-[20px] text-center font-[700]">
                    Банно-прачечный комплекс
                  </p>
                  <p className="text-[#686868] text-[14px] text-center font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between w-[100%] gap-[50px]">
              <div className="flex flex-col items-center justify-center overflow-hidden w-[230px] gap-[20px]">
                <div className="w-[75px]">
                  <img src={oshxona} alt="" draggable="false" />
                </div>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <p className="text-[#2F70D9] text-[20px] text-center font-[700]">
                    Собственная кухня
                  </p>
                  <p className="text-[#686868] text-[14px] text-center font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center overflow-hidden w-[230px] gap-[20px]">
                <div className="w-[75px]">
                  <img src={banketni_zal} alt="" draggable="false" />
                </div>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <p className="text-[#2F70D9] text-[20px] text-center font-[700]">
                    Банкетный зал
                  </p>
                  <p className="text-[#686868] text-[14px] text-center font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center overflow-hidden w-[230px] gap-[20px]">
                <div className="w-[75px]">
                  <img src={qoshu_vilka} alt="" draggable="false" />
                </div>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <p className="text-[#2F70D9] text-[20px] text-center font-[700]">
                    Просторная столовая
                  </p>
                  <p className="text-[#686868] text-[14px] text-center font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-[100%] gap-[80px] pt-[50px] pb-[50px]">
          <div className="w-[100%]">
            <div className="flex flex-col items-start justify-center w-[29%] overflow-hidden">
              <div className="flex items-center justify-end w-[75%]">
                <div className="w-[120px]">
                  <img src={section1} alt="" draggable="false" />
                </div>
              </div>
              <p className="text-[#2F70D9] text-[50px] font-[700]">
                Наши номера
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-[100%] gap-[30px]">
            <div className="w-[285px]">
              <img src={malcik} alt="" draggable="false" />
            </div>
            <div className="max-w-xs p-6 border border-blue-300 rounded-2xl shadow-sm text-center flex flex-col items-center space-y-4">
              <div className="text-6xl text-gray-600">
                <img src={icon1} alt="" draggable="false" />
              </div>

              <h2 className="text-blue-600 text-lg font-semibold">
                Одноместный номер
              </h2>

              <ul className="w-[100%] text-gray-600 text-sm space-y-1 text-left">
                <li className="flex items-center">
                  <span className="mr-2 text-[25px]">•</span> Душ
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[25px]">•</span> Кровать
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[25px]">•</span> Телевизор
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[25px]">•</span> Wi-Fi
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[25px]">•</span> Что то еще
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[25px]">•</span> Что то еще
                </li>
              </ul>

              <div className="text-center mt-4">
                <div className="text-blue-600 font-semibold text-sm">
                  Стоимость
                </div>
                <div className="text-red-600 text-xl font-bold">
                  1000<span className="text-red-600">₽</span>{" "}
                  <span className="text-orange-600 font-medium">/ сутки</span>
                </div>
              </div>
            </div>
            <div className="max-w-xs p-6 border border-blue-300 rounded-2xl shadow-sm text-center flex flex-col items-center space-y-4">
              <div className="text-6xl text-gray-600">
                <img src={icon2} alt="" draggable="false" />
              </div>

              <h2 className="text-blue-600 text-lg font-semibold">
                Одноместный номер
              </h2>

              <ul className="w-[100%] text-gray-600 text-sm space-y-1 text-left">
                <li className="flex items-center">
                  <span className="mr-2 text-[28px]">•</span> Душ
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[25px]">•</span> Кровать
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[25px]">•</span> Телевизор
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[25px]">•</span> Wi-Fi
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[25px]">•</span> Что то еще
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[25px]">•</span> Что то еще
                </li>
              </ul>

              <div className="text-center mt-4">
                <div className="text-blue-600 font-semibold text-sm">
                  Стоимость
                </div>
                <div className="text-red-600 text-xl font-bold">
                  1000<span className="text-red-600">₽</span>{" "}
                  <span className="text-orange-600 font-medium">/ сутки</span>
                </div>
              </div>
            </div>
            <div className="w-[285px]">
              <img src={devocka} alt="" draggable="false" />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-[100%] gap-[80px] pt-[50px] pb-[50px]">
          <div className="w-[100%]">
            <div className="flex flex-col items-start justify-center w-[29%] overflow-hidden">
              <div className="flex items-center justify-end w-[75%]">
                <div className="w-[120px]">
                  <img src={section1} alt="" draggable="false" />
                </div>
              </div>
              <p className="text-[#2F70D9] text-[50px] font-[700]">
                Ваши отзывы
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[30px]">
            <div className="flex flex-col items-center justify-center pt-[25px] pb-[25px] pl-[25px] pr-[25px] gap-[29px] rounded-[20px] cursor-pointer shadow-lg">
              <div className="flex flex-col items-center justify-center gap-[30px]">
                <div className="flex items-center justify-center w-[100%]">
                  <div className="p-[25px] rounded-[100px] bg-[#BEBEBE]">
                    <div className="w-[50px]">
                      <img src={user} alt="" draggable="false" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-[100%]">
                  <p className="text-[#2F70D9] text-[16px] font-[700]">
                    Иван Иванов
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[28px]">
                <div className="w-[200px] overflow-hidden">
                  <p className="text-[#686868] text-[16px] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor.
                  </p>
                </div>
                <div className="flex items-center justify-center w-[100%]">
                  <p className="text-[#686868] text-[14px] font-[300]">
                    01.02 03.02
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-[25px] pb-[25px] pl-[25px] pr-[25px] gap-[29px] rounded-[20px] cursor-pointer shadow-lg">
              <div className="flex flex-col items-center justify-center gap-[30px]">
                <div className="flex items-center justify-center w-[100%]">
                  <div className="p-[25px] rounded-[100px] bg-[#BEBEBE]">
                    <div className="w-[50px]">
                      <img src={user} alt="" draggable="false" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-[100%]">
                  <p className="text-[#2F70D9] text-[16px] font-[700]">
                    Иван Иванов
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[28px]">
                <div className="w-[200px] overflow-hidden">
                  <p className="text-[#686868] text-[16px] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor.
                  </p>
                </div>
                <div className="flex items-center justify-center w-[100%]">
                  <p className="text-[#686868] text-[14px] font-[300]">
                    01.02 03.02
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-[25px] pb-[25px] pl-[25px] pr-[25px] gap-[29px] rounded-[20px] cursor-pointer shadow-lg">
              <div className="flex flex-col items-center justify-center gap-[30px]">
                <div className="flex items-center justify-center w-[100%]">
                  <div className="p-[25px] rounded-[100px] bg-[#BEBEBE]">
                    <div className="w-[50px]">
                      <img src={user} alt="" draggable="false" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-[100%]">
                  <p className="text-[#2F70D9] text-[16px] font-[700]">
                    Иван Иванов
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[28px]">
                <div className="w-[200px] overflow-hidden">
                  <p className="text-[#686868] text-[16px] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor.
                  </p>
                </div>
                <div className="flex items-center justify-center w-[100%]">
                  <p className="text-[#686868] text-[14px] font-[300]">
                    01.02 03.02
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-[25px] pb-[25px] pl-[25px] pr-[25px] gap-[29px] rounded-[20px] cursor-pointer shadow-lg">
              <div className="flex flex-col items-center justify-center gap-[30px]">
                <div className="flex items-center justify-center w-[100%]">
                  <div className="p-[25px] rounded-[100px] bg-[#BEBEBE]">
                    <div className="w-[50px]">
                      <img src={user} alt="" draggable="false" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-[100%]">
                  <p className="text-[#2F70D9] text-[16px] font-[700]">
                    Иван Иванов
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[28px]">
                <div className="w-[200px] overflow-hidden">
                  <p className="text-[#686868] text-[16px] font-[400]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor.
                  </p>
                </div>
                <div className="flex items-center justify-center w-[100%]">
                  <p className="text-[#686868] text-[14px] font-[300]">
                    01.02 03.02
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center w-[100%] pt-[50px] pb-[50px]">
          <ContactMapCard />
        </section>
      </main>
    </div>
  );
}

export default Main;
