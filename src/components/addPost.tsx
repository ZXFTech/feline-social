import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/30595230/pexels-photo-30595230.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        className="w-12 h-12 object-cover rounded-full"
        width={48}
        height={48}
      />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <div className="flex gap-4">
          <textarea
            placeholder="今天的心情怎么样?"
            className="bg-slate-100 rounded-lg flex-1 p-2 text-md"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            className="w-5 h-5 cursor-pointer self-end"
            width={20}
            height={20}
          />
        </div>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addImage.png"
              alt=""
              className="w-5 h-5 cursor-pointer self-end"
              width={20}
              height={20}
            />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addVideo.png"
              alt=""
              className="w-5 h-5 cursor-pointer self-end"
              width={20}
              height={20}
            />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addEvent.png"
              alt=""
              className="w-5 h-5 cursor-pointer self-end"
              width={20}
              height={20}
            />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/poll.png"
              alt=""
              className="w-5 h-5 cursor-pointer self-end"
              width={20}
              height={20}
            />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
