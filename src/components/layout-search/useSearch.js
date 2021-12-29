import { useState, useEffect } from "react";
import { YoutubeApi } from "../../youtube-api/YoutubeApi";

export default function useSearch(searchTerm) {
  const fetchFromRemote = async (queryString) => {
    let resource = await YoutubeApi.fetchSearchList(queryString);
    setSeachResult(resource);
  };

  const [seachResult, setSeachResult] = useState({
    status: "",
    data: [],
    message: "",
  });

  useEffect(() => {
    setSeachResult({
      status: "loading",
      data: [],
      message: "",
    });
    // fetchFromRemote(searchTerm);
  }, [searchTerm]);

  return seachResult;
}
