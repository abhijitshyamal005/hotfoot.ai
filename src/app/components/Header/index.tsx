import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="bg-black text-white py-3 border-b border-[#262626]">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-10">
        <div className="text-lg font-normal">Magic UI</div>
        <div className="flex space-x-3">
          <Button variant="ghost" className="text-white text-md font-normal">
            Log in
          </Button>
          <Button className="bg-[#262626] text-white px-4 py-1.5 rounded-lg text-sm">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
