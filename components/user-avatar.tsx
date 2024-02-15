import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserAvatar = () => {
  const { user } = useUser();
  const firstName = user?.firstName || "";
  const lastName = user?.lastName || "";
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={user?.imageUrl} />
      <AvatarFallback>
        {firstName.charAt(0)}
        {lastName.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};
