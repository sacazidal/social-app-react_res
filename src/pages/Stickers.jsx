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
          className="rounded-t-xl border border-neutral-700"
        />
      </div>
      <div className="flex gap-9 py-3 px-4 bg-zinc-800 max-w-[642px] border-b border-r border-l border-neutral-700">
        {stickerLinks.map((item) => (
          <NavLink
            to={item.link}
            key={item.id}
            className={({ isActive }) => `text-base
              ${
                isActive
                  ? "text-white border-b-2 border-blue-700"
                  : "text-neutral-500"
              }`}
          >
            <p>{item.title}</p>
          </NavLink>
        ))}
      </div>
      <div className="p-3 bg-zinc-800 border-b border-r border-l border-neutral-700 max-w-[642px] flex flex-wrap rounded-b-xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Stickers;
