import { coverStickers } from "../../constants/Index";

const Animated = () => {
  return (
    <div className="flex">
      <div className="flex gap-4 flex-wrap">
        {coverStickers.map((item) => (
          <div
            className="flex flex-col w-[250px] md:w-[300px] border pb-2 rounded-2xl border-neutral-700 cursor-pointer"
            key={item.id}
          >
            <img
              src={item.img}
              alt={item.title}
              className="rounded-t-2xl h-44"
            />
            <div className="flex justify-between mt-2">
              <div className="pl-2">
                <h4 className="text-sm font-bold">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400">
                  {item.author}
                </p>
              </div>
              <button className="flex items-center bg-slate-200 text-black px-4 rounded-lg mr-2">
                {item.price} голос
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animated;
