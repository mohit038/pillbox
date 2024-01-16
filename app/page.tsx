"use client";

import React from "react";
import PillBox from "./_components/PillBox";

const userData = [
  {
    id: 1,
    name: "Sheldon",
    email: "sheldon@bbt.com",
    avatar: "https://api.multiavatar.com/sheldon.svg",
  },
  {
    id: 2,
    name: "Penny",
    email: "penny@bbt.com",
    avatar: "https://api.multiavatar.com/penny.svg",
  },
  {
    id: 3,
    name: "Leonard",
    email: "leonard@bbt.com",
    avatar: "https://api.multiavatar.com/leonard.svg",
  },
  {
    id: 4,
    name: "Raj",
    email: "raj@btt.com",
    avatar: "https://api.multiavatar.com/raj.svg",
  },
  {
    id: 5,
    name: "Howard",
    email: "howard@btt.com",
    avatar: "https://api.multiavatar.com/howard.svg",
  },
  {
    id: 6,
    name: "Bernadette",
    email: "bernadette@bbt.com",
    avatar: "https://api.multiavatar.com/bernadette.svg",
  },
  {
    id: 7,
    name: "Amy",
    email: "amy@bbt.com",
    avatar: "https://api.multiavatar.com/amy.svg",
  },
  {
    id: 8,
    name: "Stuart",
    email: "stuart@bbt.com",
    avatar: "https://api.multiavatar.com/stuart.svg",
  },
  {
    id: 9,
    name: "Kripke",
    email: "kripke@bbt.com",
    avatar: "https://api.multiavatar.com/kripke.svg",
  },
  {
    id: 10,
    name: "Wil",
    email: "wil@bbt.com",
    avatar: "https://api.multiavatar.com/wil.svg",
  },
  {
    id: 11,
    name: "Leslie",
    email: "leslie@bbt.com",
    avatar: "https://api.multiavatar.com/leslie.svg",
  },
  {
    id: 12,
    name: "Barry",
    email: "barry@bbt.com",
    avatar: "https://api.multiavatar.com/barry.svg",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PillBox data={userData} />
    </main>
  );
}
