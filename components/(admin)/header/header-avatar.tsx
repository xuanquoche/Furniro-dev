import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderAvatarProps {
  src?: string;
  name?: string;
  role?: string;
}

export const HeaderAvatar = ({ src, name, role }: HeaderAvatarProps) => {
  return (
    <div className="flex gap-3 ml-10 items-center cursor-pointer">
      <Avatar>
        <AvatarImage src={src} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="text-sm font-medium leading-5 text-black-800">{name}</p>
        <p className="text-xs font-medium leading-4 text-black-500">{role}</p>
      </div>
    </div>
  );
};
