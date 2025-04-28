import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/31659583/pexels-photo-31659583.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={16}
            height={16}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>Sary</span>
        </div>
        <div>
          <button className="rounded-md bg-blue-500 text-white text-xs px-2 py-1">
            Celebrate
          </button>
        </div>
      </div>
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image src="/gift.png" alt="" width={20} height={20} />
        <Link className="flex flex-col gap-1 text-xs" href="/">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500">
            See other 16 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
