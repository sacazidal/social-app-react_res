import { NavLink, Outlet } from "react-router-dom";
import gusPackImg from "/img/gusPack.png";
import { stickerLinks } from "../constants/Index";

const Stickers = () => {
  // Стикеры
  return (
    <div className="container mx-auto">
      <div className="">
        <img
          src={gusPackImg}
          alt="gusPackImg"
          className="rounded-t-xl"
        />
      </div>
      <div className="flex gap-9 mt-3">
        {stickerLinks.map((item) => (
          <NavLink
            to={item.link}
            key={item.id}
            className={({
              isActive,
            }) => `text-gray-600 text-base
              ${
                isActive
                  ? "text-white border-b-2 border-blue-700"
                  : ""
              }`}
          >
            <p>{item.title}</p>
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Stickers;
