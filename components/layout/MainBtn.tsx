import { Button } from "@/components/ui/button";

export function MainBtn() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" size="sm" className="hidden sm:inline-flex bg-[#E3E3E3] rounded-lg border border-[#767676]">
        Log in
      </Button>
      <Button size="sm" className="bg-gray-900 text-white hover:bg-gray-800">
        Sign up
      </Button>
    </div>
  );
} 