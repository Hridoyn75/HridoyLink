import Link from "next/link";

const HelpPage = () => {
  return (
    <main className=" bg-slate-900 w-full min-h-screen flex justify-center  items-center">
      <div className=" relative card border-[3px] rounded border-blue-600 w-[500px] text-center text-slate-200 max-w-full mx-2 bg-slate-950 p-10">
        <h1 className=" text-4xl font-bold gradient-text">/Help</h1>

        <p className=" py-3 text-slate-300">Get in touch</p>
        <div className="  flex justify-center items-center gap-3">
          <Link href={"https://github.com/hridoyn75/"} target="_blank">
            <svg
              className=" text-slate-600 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>
          <Link href={"mailto:hridoyn75@gmail.com"} target="_blank">
            <svg
              className=" text-slate-600 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </Link>
          <Link
            href={"https://www.facebook.com/nazmulhridoy001"}
            target="_blank"
          >
            <svg
              className=" text-slate-600 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HelpPage;
