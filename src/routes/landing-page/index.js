import Privacy from "../../component/landing-page/Privacy";
import HomePage from "../../component/landing-page/HomePage";
import Pricing from "../../component/landing-page/Pricing";
import Terms from "../../component/landing-page/Terms";
import Cookies from "../../component/landing-page/Cookies";
import Eula from "../../component/landing-page/Eula";

export const LandingPage_route_group = [
  { path: "/", component: HomePage },
  { path: "/pricing", component: Pricing },
  { path: "/privacy-policy", component: Privacy },
  { path: "/terms-of-service", component: Terms },
  {path:"/cookies-policy", component: Cookies},
  {path:"/eula", component: Eula }
];
