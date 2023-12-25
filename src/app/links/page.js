"use client";

import { getLocal } from "@/components/libs/storage";
import Link from "next/link";

const MyLinksPage = () => {
  const MyLinks = getLocal("myLinks") || [];

  return (
    <main className=" py-10 bg-slate-900 w-full min-h-screen flex justify-center  items-center">
      <div className=" relative card border-[3px] rounded border-blue-600 w-[800px] text-center text-slate-200 max-w-full mx-2 bg-slate-950 p-10">
        <h1 className=" text-4xl font-bold gradient-text">My Links</h1>
        <div className=" flex gap-3 flex-wrap py-5">
          {MyLinks.length !== 0 ? MyLinks.map((link, index) => (
            <Link
              key={index}
              className="w-full"
              href={"/track/" + link.tracking_id}
            >
              <div className=" border border-slate-600 rounded p-5">
                <h1>{link.shortUrl}</h1>
              </div>
            </Link>
          ))
          : <p className=" w-fit mx-auto">No Links found!</p>}
        </div>
      </div>
    </main>
  );
};

export default MyLinksPage;
