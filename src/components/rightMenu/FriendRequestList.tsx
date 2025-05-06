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
              src="https://images.pexels.com/photos/31659583/pexels-photo-31659583.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={16}
              height={16}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span>Sary</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestList;
