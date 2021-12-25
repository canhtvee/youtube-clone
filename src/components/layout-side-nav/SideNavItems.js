import {
  Home,
  HomeOutlined,
  Explore,
  ExploreOutlined,
  Subscriptions,
  SubscriptionsOutlined,
  VideoLibrary,
  VideoLibraryOutlined,
  History,
  HistoryOutlined,
  WatchLater,
  WatchLaterOutlined,
  ThumbUp,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

const names = [
  "home",
  "explore",
  "subscriptions",
  "library",
  "history",
  "watchlater",
  "likedvideos",
];

const titles = [
  "Home",
  "Explore",
  "Subscriptions",
  "Library",
  "History",
  "Watch later",
  "Liked videos",
];

const icons = [
  Home,
  HomeOutlined,
  Explore,
  ExploreOutlined,
  Subscriptions,
  SubscriptionsOutlined,
  VideoLibrary,
  VideoLibraryOutlined,
  History,
  HistoryOutlined,
  WatchLater,
  WatchLaterOutlined,
  ThumbUp,
  ThumbUpAltOutlined,
];

const SideNavItemNames = {};
titles.forEach((title, index) => {
  SideNavItemNames[title] = names[index];
});

export {
  icons as SideNavItemIcons,
  titles as SideNavItemTitles,
  SideNavItemNames,
};
