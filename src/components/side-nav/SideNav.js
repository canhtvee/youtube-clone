import React from "react";
import SideNavRow from "../side-nav-row/SideNavRow";
import "./SideNav.css";

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
  ThumbUpAltOutlined,
  VideoLibrary,
  VideoLibraryOutlined,
  WatchLater,
  WatchLaterOutlined,
} from "@mui/icons-material";

export default function SideNav() {
  return (
    <div className="sideNav">
      <SideNavRow title="Home" ActiveIcon={Home} InactiveIcon={HomeOutlined} />
      <SideNavRow
        title="Explore"
        ActiveIcon={Explore}
        InactiveIcon={ExploreOutlined}
      />
      <SideNavRow
        title="Subscriptions"
        ActiveIcon={Subscriptions}
        InactiveIcon={SubscriptionsOutlined}
      />
      <SideNavRow
        title="Library"
        ActiveIcon={VideoLibrary}
        InactiveIcon={VideoLibraryOutlined}
      />

      <SideNavRow
        title="History"
        ActiveIcon={History}
        InactiveIcon={HistoryOutlined}
      />
      <SideNavRow
        title="Watch later"
        ActiveIcon={WatchLater}
        InactiveIcon={WatchLaterOutlined}
      />
      <SideNavRow
        title="Liked videos"
        ActiveIcon={ThumbUp}
        InactiveIcon={ThumbUpAltOutlined}
      />
    </div>
  );
}
