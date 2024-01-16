import React from "react";
import User from "../_types/User";
import SearchSuggestion from "./SearchSuggestion";

interface SearchInterface {
  searchText?: string;
  searchResults?: User[];
  onUserSelect: (id: number) => void;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Search(props: SearchInterface) {
  const ref = React.useRef<HTMLInputElement>(null);
  const { onChangeHandler, searchResults, onUserSelect, searchText } = props;
  const [focus, setFocus] = React.useState(false);
  const [focusedItem, setFocusedItem] = React.useState(0);
  const [mouseDown, setMouseDown] = React.useState(false);

  const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocusedItem(0);
    onChangeHandler(e);
  };

  const onFocusHandler = () => {
    setFocus(true);
  };

  const onBlurHandler = () => {
    if (mouseDown) {
      ref.current?.focus();
    } else {
      setFocus(false);
    }
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!searchResults?.length) return;
    switch (e.key) {
      case "Escape":
        setFocusedItem(0);
        onBlurHandler();
        break;
      case "ArrowDown":
        setFocusedItem((focusedItem + 1) % searchResults.length);
        break;
      case "ArrowUp":
        setFocusedItem(
          (focusedItem - 1 + searchResults.length) % searchResults.length
        );
        break;
      case "Enter":
        onUserSelect(searchResults[focusedItem].id);
        setFocusedItem(0);
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative m-1">
      <input
        ref={ref}
        type="text"
        onKeyDown={onKeyDownHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        value={searchText}
        placeholder="Search character..."
        className="w-full px-4  py-2 h-12 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
        onChange={onSearchTextChange}
      />
      {focus && (
        <SearchSuggestion
          onMouseDown={() => setMouseDown(true)}
          onMouseUp={() => setMouseDown(false)}
          focusedItem={focusedItem}
          onUserSelect={onUserSelect}
          data={searchResults}
        />
      )}
    </div>
  );
}

export default Search;
