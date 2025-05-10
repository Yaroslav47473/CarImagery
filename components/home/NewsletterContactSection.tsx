import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export function NewsletterContactSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Newsletter */}
          <div className="px-10">
            <h2 className="text-[48px] font-bold mb-6">Stay Up-to-Date</h2>
            <div className="flex gap-1">
              <Input
                placeholder="you@example.com"
                className="bg-gray-200 text-[20px] border-gray-300 focus:ring-0 p-7 w-[50%] focus:border-gray-400"
              />
              <Button className="bg-gray-700 text-[20px] text-white hover:bg-gray-600 p-7 w-[50%] ">
                Submit
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col px-20">
            <h2 className="text-[48px] mb-6">Contact & Support</h2>
            <div className="space-y-3">
              <div className="flex text-[28px] items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>Support@carimagery.com</span>
              </div>
              <div className="flex text-[24px] items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+49 151 47918371</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
