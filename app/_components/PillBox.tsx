import React, { useEffect } from "react";
import User from "../_types/User";
import Search from "./Search";
import PillRenderer from "./PillRenderer";

interface PillBoxInterface {
  data: User[];
}

function PillBox(props: PillBoxInterface) {
  const { data } = props;
  const [searchResults, setSearchResults] = React.useState<User[]>(data);
  const [selectedUsers, setSelectedUsers] = React.useState<number[]>([]);
  const [searchText, setSearchText] = React.useState("");
  const [focusedPill, setFocusedPill] = React.useState<number | null>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);
    const suggestions = data.filter(
      (user) =>
        user.name.toLowerCase().includes(text.toLowerCase()) &&
        !selectedUsers.includes(user.id)
    );
    setSearchResults(suggestions);
  };

  const onUserSelect = (id: number) => {
    setSelectedUsers((selectedUsers) => [...selectedUsers, id]);
    setSearchResults((searchResults) =>
      searchResults.filter((user) => user.id !== id)
    );
  };

  const onPillRemove = (id: number) => {
    setSelectedUsers((selectedUsers) =>
      selectedUsers.filter((user) => user !== id)
    );
    const user = data.find((user) => user.id === id);
    if (!user) return;
    setSearchResults((searchResults) => [...searchResults, user]);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Backspace") {
      if (searchText.length) return;
      if (!selectedUsers.length) return;
      if (!!focusedPill) {
        onPillRemove(focusedPill);
        setFocusedPill(null);
      } else if (selectedUsers.length > 0) {
        setFocusedPill(selectedUsers[selectedUsers.length - 1]);
      }
    }
  };

  return (
    <div
      onKeyDown={onKeyDownHandler}
      className="flex relative flex-wrap items-center justify-start w-full p-2 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
    >
      <PillRenderer
        focusedItem={focusedPill || -1}
        onPillRemove={onPillRemove}
        users={selectedUsers
          .map((id) => data.find((user) => user.id === id))
          .filter((user): user is User => user !== undefined)}
      />
      <Search
        searchText={searchText}
        onUserSelect={onUserSelect}
        searchResults={searchResults}
        onChangeHandler={onChangeHandler}
      />
    </div>
  );
}

export default PillBox;
