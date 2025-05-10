import { Button } from "@/components/ui/button";

interface MainBtnProps {
  classname:  string
}

export function MainBigBtn() {
  return (
    <div className="flex items-center gap-5">
      <Button variant="outline" size="lg" className="hidden sm:inline-flex bg-[#E3E3E3] rounded-lg border border-[#767676]">
        Log in
      </Button>
      <Button size="lg" className="bg-[#2C2C2C] text-white hover:bg-gray-800">
        Sign up
      </Button>
    </div>
  );
} 