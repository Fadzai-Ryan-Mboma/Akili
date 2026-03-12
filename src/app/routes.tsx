import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Playground } from "./pages/Playground";
import { Pricing } from "./pages/Pricing";
import { Documentation } from "./pages/Documentation";
import { Login } from "./pages/Login";
import { Layout } from "./components/Layout";
import { DashboardLayout } from "./components/DashboardLayout";
import { Overview } from "./pages/dashboard/Overview";
import { ApiKeys } from "./pages/dashboard/ApiKeys";
import { Activity } from "./pages/dashboard/Activity";
import { Settings } from "./pages/dashboard/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "playground", Component: Playground },
      { path: "pricing", Component: Pricing },
      { path: "docs", Component: Documentation },
      { path: "login", Component: Login },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Overview },
      { path: "keys", Component: ApiKeys },
      { path: "activity", Component: Activity },
      { path: "settings", Component: Settings },
    ],
  },
]);
