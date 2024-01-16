import React from "react";
import User from "../_types/User";
import Pill from "./Pill";

interface PillRendererInterface {
  users: User[];
  onPillRemove: (id: number) => void;
  focusedItem: number;
}

function PillRenderer(props: PillRendererInterface) {
  const { users, onPillRemove, focusedItem } = props;
  if (!users || !users.length) return null;
  return users.map((user, index) => (
    <div key={user.id}>
      <Pill
        focus={focusedItem == user.id}
        onPillRemove={onPillRemove}
        user={user}
      />
    </div>
  ));
}

export default PillRenderer;
