import { useState } from "react";
import { FaWhatsapp, FaViber } from "react-icons/fa";

const locations = [
  {
    id: 1,
    name: "Chita",
    address: "Кайдаловская ул., 37, Чита",
    phone1: "+7 (3022) 217856",
    phone2: "+79294830255",
    coords: { top: "40%", left: "30%" },
  },
  {
    id: 2,
    name: "Irkutsk",
    address: "ул. Ленина, 5, Иркутск",
    phone1: "+7 (3952) 123456",
    phone2: "+79876543210",
    coords: { top: "60%", left: "55%" },
  },
];

const InteractiveContactMap = () => {
  const [selected, setSelected] = useState(locations[0]);

  return (
    <div className="relative w-full h-[500px] rounded-[20px] overflow-hidden shadow-md">
      <div className="w-full h-full bg-green-200 relative">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aea6fdbe0cc96b24ce8c2e8ed52d6f4b6b43e7cd55e2d502514dfe084fa2dc5cc&amp;source=constructor"
          alt="map"
          className="w-full h-full object-cover pointer-events-none"
        ></iframe>

        {locations.map((loc) => (
          <div
            key={loc.id}
            className="absolute w-[16px] h-[16px] bg-red-500 rounded-full cursor-pointer hover:scale-110 transition"
            style={{
              top: loc.coords.top,
              left: loc.coords.left,
              transform: "translate(-50%, -50%)",
            }}
            onClick={() => setSelected(loc)}
            title={loc.name}
          ></div>
        ))}
      </div>

      <div className="absolute top-[30px] left-[30px] bg-white rounded-[20px] p-[25px] shadow-xl max-w-[300px] cursor-default">
        <h2 className="text-[#2F70D9] text-[24px] font-bold mb-2">Контакты</h2>
        <div className="w-[60px] h-[5px] bg-gray-300 mb-4 rounded-full"></div>
        
        <div className="mb-3">
          <p className="font-semibold">Адрес:</p>
          <p>{selected.address}</p>
        </div>

        <div className="mb-3">
          <p className="text-[18px]">{selected.phone1}</p>
          <p className="text-[18px]">{selected.phone2}</p>
        </div>

        <div className="flex gap-3 mt-3">
          <a href={`viber://chat?number=${selected.phone2}`}>
            <FaViber className="text-[24px] text-white bg-purple-500 rounded-[8px] p-1 w-[32px] h-[32px]" />
          </a>
          <a href={`https://wa.me/${selected.phone2.replace("+", "")}`}>
            <FaWhatsapp className="text-[24px] text-white bg-green-500 rounded-[8px] p-1 w-[32px] h-[32px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContactMap;
