import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="relative h-10 w-10 animate-spin">
        <Image alt="Empty" fill src="/logo.png"></Image>
      </div>
      <p className="text-muted-foreground text-sm">Genius is thinking...</p>
    </div>
  );
};
