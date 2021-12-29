import { useState, useEffect } from "react";
import { YoutubeApi } from "../../youtube-api/YoutubeApi";

export default function useSearch(queryCode) {
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
    // YoutubeApi.fetchSearchList(queryCode).then((resource) => {
    //   setSeachResult(resource);
    // });
  }, [queryCode]);

  return seachResult;
}
