"use client";

import { switchBlock, switchFollow } from "@/lib/actions";
import { useOptimistic, useState } from "react";

const UserInfoCardInteraction = ({
  userId,
  isBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  isBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isBlocked,
    followingRequestSent: isFollowingSent,
  });

  const follow = async () => {
    setOptimisticState("follow");
    try {
      await switchFollow(userId);
      setUserState((prev) => {
        return {
          ...prev,
          following: !prev.following && false,
          followingRequestSent: !prev.followingRequestSent ? true : false,
        };
      });
    } catch (error) {}
  };

  const block = async () => {
    setOptimisticState("blocked");
    try {
      await switchBlock(userId);
      setUserState((prev) => {
        return {
          ...prev,
          blocked: !prev.blocked,
        };
      });
    } catch (error) {}
  };

  const [optimisticState, setOptimisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "blocked") =>
      value === "follow"
        ? {
            ...state,
            following: state.following && false,
            followingRequestSent:
              !state.following && !state.followingRequestSent ? true : false,
          }
        : {
            ...state,
            blocked: !state.blocked,
          }
  );

  return (
    <>
      <form action={follow}>
        <button className="w-full bg-blue-500 text-white rounded-md p-2">
          {optimisticState.following
            ? "Following"
            : optimisticState.followingRequestSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action={block} className="self-end">
        <button>
          <span className="text-red-400 self-end cursor-pointer text-xs">
            {userState.blocked ? "Unblock User" : "Block User"}
          </span>
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
