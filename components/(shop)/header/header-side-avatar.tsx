import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderAvatarProps {
  src?: string;
  name?: string;
}

export const HeaderSideAvatar = ({ src, name }: HeaderAvatarProps) => {
  return (
    <div className="flex flex-col gap-3 items-center cursor-pointer">
      <Avatar className="w-32 h-32">
        <AvatarImage src={src} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="text-xl font-semibold leading-5 text-black-800">{name}</p>
      </div>
    </div>
  );
};
