"use client";

import Image from "next/image";
import React from "react";
import CancelIcon from "../_icons/CrossIcon";
import User from "../_types/User";

interface PillInterface {
  user: User;
  focus?: boolean;
  onPillRemove: (id: number) => void;
}

function Pill(props: PillInterface) {
  const { user, onPillRemove, focus } = props;
  const { name, avatar } = user;
  return (
    <div
      className={`flex items-center justify-center m-1 px-2 py-1 rounded-md bg-gray-100 border border-gray-300 h-12 ${
        focus ? "ring-1 ring-red-600 bg-red-100 border-transparent" : ""
      }`}
    >
      <Image width={35} height={35} src={avatar} alt="avatar" />
      <p className="ml-2 mr-1 self-center font-medium text-sm">{name}</p>
      <button onClick={() => onPillRemove(user.id)} className="self-center">
        <CancelIcon />
      </button>
    </div>
  );
}

export default Pill;
