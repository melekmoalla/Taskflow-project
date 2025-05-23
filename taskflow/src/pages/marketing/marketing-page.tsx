import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import '/public/fonts/fonts.css'



const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div style={{ fontFamily: 'MyFont' }} className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          <span className="text-sky-700">Taskflow</span> helps team move
        </h1>
        <div className="text-3xl md:text-6xl text-center bg-gradient-to-tr from-sky-300 to-blue-700 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward.
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskflow.
      </div>
      <Button className="mt-6" size={"lg"} asChild>
        <Link to="/sign-up">Get Task for free</Link>
      </Button>

    </div>

  );
}
export default MarketingPage;
