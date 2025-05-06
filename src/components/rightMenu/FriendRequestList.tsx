import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
  return (
    <div>
      {requests.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={item.sender.avatar || "./noAvatar.png"}
              alt=""
              width={16}
              height={16}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span>
              {item.sender.name && item.sender.surname
                ? item.sender.name + " " + item.sender.surname
                : item.sender.username}
            </span>
          </div>
          <div className="flex gap-3 justify-end">
            <form action="">
              <button>
                <Image
                  src="/accept.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
            <form action="">
              <button>
                <Image
                  src="/reject.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestList;
