import Image from "next/image";
import React from "react";
import User from "../_types/UserData";

interface OptionInterface {
  user: User;
  onClickHandler?: () => void;
  focus?: boolean;
}

function Option(props: OptionInterface) {
  const { user, onClickHandler, focus } = props;
  const { name, email, avatar, id } = user;
  return (
    <div
      className={`flex items-center justify-between p-3 cursor-pointer rounded-md ${
        focus ? "bg-gray-200" : "hover:bg-gray-200"
      }`}
      onClick={onClickHandler}
    >
      <div className="flex items-center w-full">
        <Image
          width={10}
          height={10}
          src={avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col ml-2">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-500">{email}</p>
        </div>
      </div>
    </div>
  );
}

export default Option;
