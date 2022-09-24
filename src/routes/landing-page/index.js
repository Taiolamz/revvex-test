import Privacy from "../../component/landing-page/Privacy";
import HomePage from "../../component/landing-page/HomePage";
import Pricing from "../../component/landing-page/Pricing";
import Terms from "../../component/landing-page/Terms";
import Cookies from "../../component/landing-page/Cookies";
import Eula from "../../component/landing-page/Eula";

export const LandingPage_route_group = [
  { path: "/", element: <HomePage /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/privacy-policy", element: <Privacy /> },
  { path: "/terms-of-service", element: <Terms /> },
  { path: "/cookies-policy", element: <Cookies /> },
  { path: "/eula", element: <Eula /> },
];
