import Image from "next/image";

const LogoCard = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-b from-white to-stone-100">
      <div className="flex flex-col items-center space-y-2">
        <div className="relative w-32 h-32">
          <Image
            src="/logo.png"
            alt="Rattad24 Logo"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoCard;