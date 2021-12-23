const API_KEY = "AIzaSyAJcItwoGmca60VHbby3LJentpMH1Mzp1A";
const PLAY_LIST_HTTP = "https://www.googleapis.com/youtube/v3/playlistItems";
const VIDEOS_HTTP = "https://youtube.googleapis.com/youtube/v3/videos";

export const YoutubeApi = {
  fetchPlaylist,
  fetchTrendingVideos,
};

async function fetchPlaylist() {
  const res = await fetch(`
${PLAY_LIST_HTTP}?
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
${VIDEOS_HTTP}?
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
  items.map((item) => {
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
  items.map((item) => {
    let video = {};
    video.id = item.id;
    video.title = item.snippet.title;
    video.thumbnail = item.snippet.thumbnails.medium.url;
    videosList.push(video);
  });
  return videosList;
}
