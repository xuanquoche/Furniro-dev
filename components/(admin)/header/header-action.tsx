"use client";

import {
  SearchIcon,
  FlagMenuIcon,
  NotificationIcon,
  MailIcon,
} from "@/public/icons";
import { HeaderAvatar } from "./header-avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/custom/button";
import { useRef, useState } from "react";
import { useClickOutside } from "../../../hooks/use-click-outside";

const HEADERACTION = [
  {
    icon: SearchIcon,
    title: "Search",
  },
  {
    icon: FlagMenuIcon,
    title: "FlagMenuIcon",
  },
  {
    icon: NotificationIcon,
    title: "NotificationIcon",
  },
  {
    icon: MailIcon,
    title: "MailIcon",
  },
];

export const HeaderAction = () => {
  const [isShowInputSearch, setIsShowInputSearch] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useClickOutside(inputRef, () => setIsShowInputSearch(false));

  const handleShowInputSearch = () => {
    setIsShowInputSearch(true);
  };

  return (
    <div className="flex">
      {HEADERACTION.map((item, index) => (
        <div key={index} className="cursor-pointer flex items-center">
          {item.title == "Search" ? (
            <div className="flex items-center">
              {isShowInputSearch && (
                <Input className="p-0 h-6" ref={inputRef} autoFocus />
              )}
              <Button
                variant="ghost"
                className="hover:bg-background-hover-admin hover:rounded-xl"
                size="sm"
                onClick={handleShowInputSearch}
              >
                <item.icon />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              className="hover:bg-background-hover-admin hover:rounded-xl w-fit"
              size="sm"
            >
              <item.icon />
            </Button>
          )}
        </div>
      ))}
      <HeaderAvatar
        src="https://github.com/shadcn.png"
        name="Alex"
        role="manager"
      />
    </div>
  );
};
