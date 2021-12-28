const API_KEY = "AIzaSyAJcItwoGmca60VHbby3LJentpMH1Mzp1A";
const PLAY_LIST_END_POINT =
  "https://www.googleapis.com/youtube/v3/playlistItems";
const VIDEOS_END_POINT = "https://youtube.googleapis.com/youtube/v3/videos";
const SEARCH_PLAY_LIST_END_POINT =
  "https://youtube.googleapis.com/youtube/v3/search";

export const YoutubeApi = {
  fetchPlaylist,
  fetchTrendingVideos,
  fetchSearchList,
};

async function fetchPlaylist() {
  const res = await fetch(`
${PLAY_LIST_END_POINT}?
part=snippet
&playlistId=PLiaWrX4zmrTmAVd0zQuLlXsTNcC62j5rN
&maxResults=20
&key=${API_KEY}
`);
  const data = await res.json();
  const videosList = getPlaylist(data.items);
  console.log(videosList);
}

async function fetchTrendingVideos() {
  const res = await fetch(`
${VIDEOS_END_POINT}?
part=snippet
&chart=mostPopular
&regionCode=VN
&maxResults=20
&key=${API_KEY}
`);
  const data = await res.json();
  console.log(data);
  const trendingList = getTrendingList(data.items);
  return trendingList;
}

function getPlaylist(items) {
  const videosList = [];

  items.forEach((item) => {
    if (item.snippet) {
      const { resourceId, title, thumbnails } = item.snippet;
      let video = {};
      video.id = resourceId.videoId;
      video.title = title;
      video.thumbnail = thumbnails.medium ? thumbnails.medium.url : "";
      videosList.push(video);
    }
  });
  return videosList;
}

function getTrendingList(items) {
  const videosList = [];
  items.forEach((item) => {
    let video = {};
    video.id = item.id;
    video.title = item.snippet.title;
    video.thumbnail = item.snippet.thumbnails.medium.url;
    videosList.push(video);
  });
  return videosList;
}

// async function fetchSearchList(queryCode) {
//   const res = await fetch(`
// ${SEARCH_PLAY_LIST_END_POINT}?
// part=snippet
// &maxResults=10
// &q=${queryCode}
// &key=${API_KEY}
// `);
//   const data = await res.json();
//   console.log("fetchSearchList: res = ", res);
//   console.log("fetchSearchList: data = ", data);
//   const searchList = getSearchList(data.items);
//   return searchList;
// }

function getSearchList(items) {
  const videosList = [];
  items.forEach((item) => {
    let video = {};
    video.id = item.id.videoId;
    video.title = item.snippet.title;
    video.thumbnail = item.snippet.thumbnails.medium.url;
    videosList.push(video);
  });
  return videosList;
}

async function fetchSearchList(queryCode) {
  const url = `${SEARCH_PLAY_LIST_END_POINT}?part=snippet&maxResults=10&q=${queryCode}&key=${API_KEY}`;
  // const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  let res;
  let result = {};

  try {
    res = await fetch(url);
    console.log("fetchSearchList: res = ", res);
    if (res.ok) {
      // result.data = getSearchList(await res.json().items);
      result.data = (await res.json()).items;
      result.status = "successful";
      result.message = "fetch successful";
      console.log("fetchSearchList: result = ", result);
      return result;
    } else {
      result.status = "failed";
      result.message = "fetch failed";
      console.log("fetchSearchList: result = ", result);
      return result;
    }
  } catch (e) {
    // result.status = "error";
    // result.message = `fetch error, ${e}`;
    console.log("fetchSearchList: result = ", result);
  }

  return result;
}
