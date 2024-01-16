import React from "react";
import User from "../_types/User";
import Option from "./Option";

interface SearchSuggestionInterface {
  data?: User[];
  onUserSelect: (id: number) => void;
  focusedItem?: number;
  onMouseDown: () => void;
  onMouseUp: () => void;
}

function SearchSuggestion(props: SearchSuggestionInterface) {
  const { data, onUserSelect, focusedItem, onMouseDown, onMouseUp } = props;

  if (!data || !data.length)
    return (
      <div
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        className="absolute min-w-0 w-full mt-1 h-14 bg-white rounded-md shadow-md"
      >
        <p className="flex items-center justify-center h-full text-gray-500">
          Character not found
        </p>
      </div>
    );
  return (
    <div
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      className="absolute max-h-96 h-auto min-w-0 w-full mt-1 bg-white rounded-md shadow-md overflow-y-auto"
    >
      {data.map((user: User, index) => (
        <Option
          key={index}
          user={user}
          focus={focusedItem == index}
          onClickHandler={() => onUserSelect(user.id)}
        />
      ))}
    </div>
  );
}

export default SearchSuggestion;
