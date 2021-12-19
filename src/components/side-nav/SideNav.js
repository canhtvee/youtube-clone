import React from "react";
import "./SideNav.css";
import SideNavRow from "../side-nav-row/SideNavRow";

import {
  Explore,
  ExploreOutlined,
  History,
  HistoryOutlined,
  Home,
  HomeOutlined,
  Subscriptions,
  SubscriptionsOutlined,
  ThumbUp,
  ThumbUpOutlined,
  VideoLibrary,
  VideoLibraryOutlined,
  WatchLater,
  WatchLaterOutlined,
} from "@mui/icons-material";

export default function SideNav() {
  return (
    <div className="sideNav">
      <SideNavRow
        title="Home"
        activeIcon={<Home />}
        inactiveIcon={<HomeOutlined />}
      />
      <SideNavRow
        title="Explore"
        activeIcon={<Explore />}
        inactiveIcon={<ExploreOutlined />}
      />
      <SideNavRow
        title="Subscriptions"
        activeIcon={<Subscriptions />}
        inactiveIcon={<SubscriptionsOutlined />}
      />
      <hr />
      <SideNavRow
        title="Library"
        activeIcon={<VideoLibrary />}
        inactiveIcon={<VideoLibraryOutlined />}
      />
      <SideNavRow
        title="History"
        activeIcon={<History />}
        inactiveIcon={<HistoryOutlined />}
      />
      <SideNavRow
        title="Watch later"
        activeIcon={<WatchLater />}
        inactiveIcon={<WatchLaterOutlined />}
      />
      <SideNavRow
        title="Liked videos"
        activeIcon={<ThumbUp />}
        inactiveIcon={<ThumbUpOutlined />}
      />
    </div>
  );
}
