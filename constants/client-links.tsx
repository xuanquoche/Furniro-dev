import {
  SearchIcon,
  FlagMenuIcon,
  NotificationIcon,
  MailIcon,
  UserIcon,
  CartIcon,
  LoveIcon,
} from "@/public/icons";
import { ROUTES } from "./routes";

export const HEADER_ACTION = [
  {
    icon: <SearchIcon />,
    title: "Search",
  },
  {
    icon: <FlagMenuIcon />,
    title: "FlagMenuIcon",
  },
  {
    icon: <NotificationIcon />,
    title: "NotificationIcon",
  },
  {
    icon: <MailIcon />,
    title: "MailIcon",
  },
];

export const HEADER_SHOP_ACTION = [
  {
    icon: <UserIcon />,
    title: "users",
  },
  {
    icon: <SearchIcon />,
    title: "Search",
  },
  {
    icon: <LoveIcon />,
    title: "Love",
  },
  {
    icon: <CartIcon />,
    title: "cart",
  },
];

export const HEADER_NAV = [
  {
    title: "Home",
    url: ROUTES.HOME,
  },
  {
    title: "Shop",
    url: ROUTES.SHOP,
  },
  {
    title: "About",
    url: ROUTES.ABOUT,
  },
  {
    title: "Contact",
    url: ROUTES.CONTACT,
  },
];
