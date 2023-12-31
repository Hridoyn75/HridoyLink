"use client";
import Loader from "@/components/loader";
import { getLocal, setLocal } from "@/libs/storage";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [TrackingId, setTrackingId] = useState("");
  const [loading, setLoading] = useState(false);
  const [copy, setCopy] = useState("");
  const [aliasFailed, setAliasFailed] = useState("");

  const handleCick = () => {
    if (!url) return alert(" Heyyyy Brooo, Where is your Long URL??????");
    if (url.startsWith("https://" || "https://")) {
      setLoading(true);
      axios
        .get(
          process.env.NEXT_PUBLIC_BACKEND_URL +
            "/shorten?longUrl=" +
            url +
            "&customAlias=" +
            customAlias
        )
        .then((response) => {
          setUrl("");
          setCustomAlias("");
          setShortUrl(response.data.shortUrl);
          setTrackingId(response.data.tracking_id);
          setLoading(false);
          setAliasFailed("");

          const myLinks = getLocal("myLinks") || [];
          const newLinks = [...myLinks, response.data];
          setLocal("myLinks", newLinks);
        })
        .catch((error) => {
          const aliasError =
            error.response.data === "This alias already exists:(";
          if (!aliasError) return error;

          setLoading(false);
          setAliasFailed("This alias already exists:(");
        })
        .catch((error) => console.log(error));
    } else {
      alert("Sorry bro, This is not a valid URL!");
    }
  };

  const handleNew = () => {
    setShortUrl("");
    setTrackingId("");
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(shortUrl)
      .then(() => {
        setCopy("🚀Link copied successfully📷");
        setTimeout(() => {
          setCopy("");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  };
  return (
    <main className=" bg-slate-900 w-full min-h-screen flex justify-center  items-center">
      <div className=" relative card border-[3px] rounded border-blue-600 w-[500px] text-center text-slate-200 max-w-full mx-2 bg-slate-950 p-10">
        {!loading && !shortUrl && (
          <>
            <h1 className=" text-4xl font-bold gradient-text">HridoyLink</h1>
            <h2 className=" py-2">Next Level Linking</h2>
            <input
              placeholder="Paste your long URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              className=" w-5/6  md:w-3/4 bg-slate-900 px-4 my-3 py-3 rounded border-2 border-green-600 focus:outline-none focus:scale-110 transition-all duration-300 focus:border-yellow-600"
            />
            <input
              placeholder="Custom alias (Optional)"
              value={customAlias}
              onChange={(e) => setCustomAlias(e.target.value)}
              type="text"
              className=" w-5/6  md:w-3/4 bg-slate-900 px-4 my-3 py-1 rounded border-2 border-green-600 focus:outline-none focus:scale-110 transition-all duration-300 focus:border-yellow-600"
            />

            <br />
            {aliasFailed && <p className=" text-red-600">{aliasFailed}</p>}
            <button
              onClick={handleCick}
              className=" mt-3 py-3 w-1/2  bg-slate-950 border-yellow-400 border-2 rounded-xl hover:scale-105 transition-all duration-300 hover:border-green-600"
            >
              make it Short
            </button>
          </>
        )}

        {shortUrl && (
          <>
            <p className=" text-xl md:text-2xl mb-5 font-bold text-yellow-500">
              Done🚀 Your Link is ready...🐱‍🏍
            </p>
            <p className=" mx-auto py-3 px-4 w-4/5 bg-slate-800 text-yellow-500 rounded-md font-bold text-center">
              {copy || shortUrl}
            </p>
            <div className=" flex justify-center items-center gap-3 mt-5">
              <button
                onClick={handleNew}
                className=" text-sm py-2 px-4   bg-slate-950 border-yellow-400 border-2 rounded-xl hover:scale-105 transition-all duration-300 hover:border-green-600"
              >
                short a new one
              </button>
              <button
                onClick={copyToClipboard}
                className=" text-sm py-2 px-4  bg-slate-950 border-green-400 border-2 rounded-xl hover:scale-105 transition-all duration-300 hover:border-green-600"
              >
                Click to Copy
              </button>
            </div>
            <p className=" text-slate-300 mt-5">
              Your Tracking ID:{" "}
              <span className="  font-bold px-3 py-1 bg-slate-600 rounded">
                {TrackingId}
              </span>{" "}
            </p>
          </>
        )}

        {loading && <Loader />}
      </div>
    </main>
  );
}
