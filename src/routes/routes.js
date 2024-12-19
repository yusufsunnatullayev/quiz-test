import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Profile = lazy(() => import("../pages/Profile"));
const Ratings = lazy(() => import("../pages/Ratings"));
const Test = lazy(() => import("../pages/Test"));
const Feedback = lazy(() => import("../pages/Feedback"));

export const routes = [
  {
    id: 1,
    route: Home,
    path: "/",
  },
  {
    id: 2,
    route: Profile,
    path: "/profile",
  },
  {
    id: 3,
    route: Ratings,
    path: "/ratings",
  },
  {
    id: 4,
    route: Test,
    path: "/test",
  },
  {
    id: 5,
    route: Feedback,
    path: "/feedback",
  },
];
