import React from "react";

const SearchContents = ({searches}) => {
  return (
    <div class="search__result__inner">
        <img src={searches.url} alt={searches.title} />
        <h2 class="search__img__tit">{searches.title}</h2>
        <div class="search__img__desc">{searches.explanation}</div>
    </div>
  );
}
export default SearchContents;
