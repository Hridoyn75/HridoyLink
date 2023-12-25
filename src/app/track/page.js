"use client";

import Link from "next/link";
import { useState } from "react";

const TrackPage = () => {
  const [trackingId, setTrackingId] = useState("");
  return (
    <main className=" bg-slate-900 w-full min-h-screen flex justify-center  items-center">
      <div className=" relative card border-[3px] rounded border-blue-600 w-[500px] text-center text-slate-200 max-w-full mx-2 bg-slate-950 p-10">
        <h1 className=" text-4xl font-bold gradient-text">Track Your URL</h1>
        <h2 className=" py-2">Data that's matters!</h2>
        <input
          placeholder="Tracking ID"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          type="text"
          className=" w-5/6 mb-8  md:w-3/4 bg-slate-900 px-4 my-3 py-3 rounded border-2 border-green-600 focus:outline-none"
        />
        <br />
        {trackingId.length > 14 && (
          <Link
            href={"/track/" + trackingId}
            className=" mx-auto py-3 px-4  bg-slate-950 border-yellow-400 border-2 rounded-xl hover:scale-105 transition-all duration-300 hover:border-green-600"
          >
            Track Now
          </Link>
        )}
      </div>
    </main>
  );
};

export default TrackPage;
