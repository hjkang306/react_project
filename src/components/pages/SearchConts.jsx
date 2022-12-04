import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import SearchContents from "../include/SearchContents";
import Loader from "../layout/Loader";

const SearchConts = () => {
  const [searches, setSearchs] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${searchTerm}`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setSearchs(result))
      .catch((error) => console.log("error", error));
  }, [searchTerm]);

  // if (!searches?.length) return <Loader />;
  return (
    <>
      <Header />
      <Contents id={"search"}>
        <SearchContents searches={searches} />
      </Contents>
    </>
  );
};

export default SearchConts;
