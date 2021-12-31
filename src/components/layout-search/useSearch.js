import { useState, useEffect } from "react";
import { YoutubeApi } from "../../youtube-api/YoutubeApi";

export default function useSearch(searchTerm) {
  const [seachResult, setSearchResult] = useState({
    status: "",
    data: [],
    message: "",
  });

  useEffect(() => {
    setSearchResult({
      status: "loading",
      data: [],
      message: "",
    });
    const fetchFromRemote = async (queryString) => {
      setSearchResult({
        status: "loading",
        data: [],
        message: "",
      });

      let resource = await YoutubeApi.fetchSearchList(queryString);
      console.log("useSearch: resource = ", resource);
      setSearchResult(resource);
    };

    // fetchFromRemote(searchTerm);
  }, [searchTerm]);

  return seachResult;
}
