"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { formatDistance, parseISO } from "date-fns";
import Loader from "@/components/loader";
import Link from "next/link";
import { IoReloadCircleOutline } from "react-icons/io5";

const LinkTrackPage = ({ params }) => {
  const TrackingId = params.id;
  const [data, setData] = useState({});
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_BACKEND_URL + "/track/" + TrackingId)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [refresh]);
  return (
    <main className=" bg-slate-900 w-full min-h-screen flex justify-center  items-center">
      <div className=" relative card border-[3px] rounded border-blue-600 w-[600px] text-center text-slate-200 max-w-full mx-2 bg-slate-950 p-10">
        {data.id ? (
          <>
            <button onClick={()=> setRefresh(!refresh)} className=" text-4xl text-blue-600 absolute right-3 top-3 cursor-pointer">
              <IoReloadCircleOutline />
            </button>
            <h1 className=" mb-3  text-4xl font-bold gradient-text">
              Analytics
            </h1>
            <div className=" mb-3 bg-slate-900 rounded w-fit mx-auto pl-3 flex justify-center items-center gap-2">
              <p>{process.env.NEXT_PUBLIC_BACKEND_URL + "/" + data.shortUrl}</p>
              <Link
                className="bg-slate-800 rounded px-3 py-1"
                target="_blank"
                href={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + data.shortUrl}
              >
                {" "}
                Visit Link
              </Link>
            </div>
            <p>
              Tracking ID:{" "}
              <span className=" text-slate-300">{data.tracking_id}</span>
            </p>
            <p className=" my-1 mb-3">
              created{" "}
              {data.created_at &&
                formatDistance(parseISO(data.created_at), new Date(), {
                  addSuffix: true,
                })}
            </p>
            <div className=" py-3 px-8 bg-slate-800 rounded w-fit mx-auto">
              <p>Total Clicks</p>
              <p className=" text-5xl gradient-text">{data.count}</p>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </main>
  );
};

export default LinkTrackPage;
