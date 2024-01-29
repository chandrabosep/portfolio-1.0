import React from "react";
import "@/app/page.css";
import Image from "next/image";
import Card from "@/components/Card";
import GreetingComponent from "@/components/Greeting";
const page = () => {
  const skills = [
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "solidity",
    "React",
    "NextJS",
    "TailwindCSS",
    "GSAP",
    "Material UI",
    "Shadcn",
    "Firebase",
    "Figma",
  ];

  return (
    <div className="overflow-hidden max-w-screen-3xl mx-auto">
      <div className="px-10 md:px-20 border-theme-light">
        <div className="px-6 border-x border-theme-light  py-6"></div>
      </div>
      <div className="px-10 md:px-20 border-theme-light border-t flex">
        <div className="py-12 md:py-10 border-theme-light border-x px-6 text-white w-full">
          <div className="w-full md:w-fit flex flex-col relative">
            <h1 className="font-bold text-6xl order-2 md:text-[9rem] md:h-fit relative">
              Chandra Bose.
            </h1>
            <div className="md:px-20 z-10 order-1 pb-5 md:absolute md:flex w-full md:w-4/12 md:right-0 md:top-0">
              <GreetingComponent />
            </div>
          </div>
        </div>

        <div className="invisible hidden border-r border-theme-light w-0 md:w-2/5 md:visible px-8 md:flex justify-center flex-col items-end bg-gradient-to-br from-[#3943575d] from-1% via-[#10131a3a]  backdrop-blur-xl to-[#05060831] to-80%">
          <div className="captalize text-lg font-medium m-x-2 w-fit items-right py-4 text-gray-500">
            Recent Favorite
          </div>
          <div className="border-b border-theme-light w-full"></div>
          <div className="flex gap-4 pt-4">
            <a
              href="https://open.spotify.com/track/6ljbkNIzfmFrGyYUTUAleN"
              target="_blank"
              className=" flex flex-col items-end"
            >
              <div className="text-base font-light">Fort Minor</div>
              <div className="font-normal text-base text-gray-500">
                Remember the Name
              </div>
            </a>
            <div className="w-12 rounded-full">
              <Image
                src="https://i.scdn.co/image/ab67616d0000b273100fb4649eae80922bf1acbf"
                alt="Spotify"
                className="rounded-full animate-spin-slow"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-bottom md:justify-between border-theme-light border-y">
        <div className="px-10 md:p-0 md:w-3/12 text-center text-6xl font-bold md:order-2 flex justify-center items-center ">
          <div className="md:border-x-0 py-8 border-x border-theme-light flex w-full justify-center items-center">
            <Image
              src="/profile.jpg"
              width={2000}
              height={2000}
              alt="Chandra Bose"
              class="w-10/12 rounded-lg md:rounded-lg"
            />
          </div>
        </div>
        <div className="px-10 md:pl-20 md:w-5/12">
          <div className="pb-10 md:h-full pt-6 px-6 border-x border-theme-light">
            <div className=" text-5xl font-bold md:text-4xl">About me</div>
            <div className="md:flex md:flex-col md:justify-between md:h-full md:pb-8">
              <div className="py-8 text-lg font-lightopacity-70 max-w-2xl md:text-lg text-[#b8bdc4]">
                I am a front-end wizard on a mission to unlock the secrets of
                the web3 universe. Constantly curious, forever coding, and
                always ready to dive into the latest tech trends.
                <div className="pt-6">
                  I like{" "}
                  <span className="text-[#e7e7e7] border-b border-green-500">
                    reading book's
                  </span>
                  , gobbling up knowledge like a{" "}
                  <span className="text-[#e7e7e7] border-b border-green-400">
                    financial-literacy-loving
                  </span>{" "}
                  nerd!
                </div>
              </div>
              <div className="flex ">
                <Image
                  width={500}
                  height={500}
                  src="/signature.png"
                  alt="Chandra Bose"
                  className="w-2/6 md:w-1/5 opacity-90"
                />
              </div>
              <div className="">
                <div className="font-normal text-lg text-right">FIND ME AT</div>
                <div className="flex gap-2 md:gap-4 mt-4 justify-end text-[#77818F]">
                  <a
                    href="https://twitter.com/Chandra_Bose31"
                    target="_blank"
                    className="h-14 w-14 border rounded-full md:h-8 md:w-8 md:p-5 border-theme-light flex items-center justify-center"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      class="w-5 flex-shrink-0 text-green "
                    >
                      <path
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/chandrabose.eth/"
                    target="_blank"
                    className="h-14 w-14 border rounded-full md:h-8 md:w-8 md:p-5 border-theme-light flex items-center justify-center"
                  >
                    <svg
                      viewBox="0 0 22 22"
                      fill="none"
                      class="w-5 flex-shrink-0 text-gray-40 "
                    >
                      <path
                        d="M11 0C8.01167 0 7.63858 0.01375 6.46525 0.066C5.29375 0.121 4.49625 0.30525 3.795 0.5775C3.07175 0.858 2.45758 1.23475 1.84617 1.84617C1.23475 2.45758 0.857083 3.07083 0.5775 3.795C0.30525 4.49625 0.120083 5.29375 0.066 6.46525C0.011 7.63858 0 8.01167 0 11C0 13.9883 0.01375 14.3614 0.066 15.5348C0.121 16.7053 0.30525 17.5038 0.5775 18.205C0.858 18.9273 1.23475 19.5424 1.84617 20.1538C2.45758 20.7643 3.07083 21.1429 3.795 21.4225C4.49717 21.6938 5.29467 21.8799 6.46525 21.934C7.63858 21.989 8.01167 22 11 22C13.9883 22 14.3614 21.9863 15.5348 21.934C16.7053 21.879 17.5038 21.6938 18.205 21.4225C18.9273 21.142 19.5424 20.7643 20.1538 20.1538C20.7643 19.5424 21.1429 18.9301 21.4225 18.205C21.6938 17.5038 21.8799 16.7053 21.934 15.5348C21.989 14.3614 22 13.9883 22 11C22 8.01167 21.9863 7.63858 21.934 6.46525C21.879 5.29467 21.6938 4.49533 21.4225 3.795C21.142 3.07175 20.7643 2.45758 20.1538 1.84617C19.5424 1.23475 18.9301 0.857083 18.205 0.5775C17.5038 0.30525 16.7053 0.120083 15.5348 0.066C14.3614 0.011 13.9883 0 11 0ZM11 1.98C13.9361 1.98 14.2863 1.99467 15.4458 2.04508C16.5183 2.0955 17.1004 2.27333 17.4873 2.4255C18.0024 2.62442 18.3673 2.86275 18.7541 3.24683C19.1382 3.63183 19.3765 3.99758 19.5754 4.51275C19.7258 4.89958 19.9054 5.48167 19.954 6.55417C20.0063 7.71467 20.0182 8.063 20.0182 11C20.0182 13.937 20.0044 14.2863 19.9503 15.4458C19.8944 16.5183 19.7157 17.1004 19.5644 17.4873C19.3591 18.0024 19.1253 18.3673 18.7403 18.7541C18.3563 19.1382 17.985 19.3765 17.4753 19.5754C17.0903 19.7258 16.4991 19.9054 15.4266 19.954C14.2588 20.0063 13.915 20.0182 10.9725 20.0182C8.02908 20.0182 7.68533 20.0044 6.51842 19.9503C5.445 19.8944 4.85375 19.7157 4.46875 19.5644C3.94717 19.3591 3.58875 19.1253 3.20467 18.7403C2.81875 18.3563 2.57217 17.985 2.37967 17.4753C2.22842 17.0903 2.05058 16.4991 1.99467 15.4266C1.95342 14.2716 1.93875 13.915 1.93875 10.9862C1.93875 8.05658 1.95342 7.69908 1.99467 6.53033C2.05058 5.45783 2.22842 4.8675 2.37967 4.4825C2.57217 3.96 2.81875 3.6025 3.20467 3.21658C3.58875 2.8325 3.94717 2.585 4.46875 2.39342C4.85375 2.24125 5.43217 2.0625 6.50467 2.0075C7.67342 1.96625 8.01717 1.9525 10.9588 1.9525L11 1.98ZM11 5.3515C7.87875 5.3515 5.3515 7.8815 5.3515 11C5.3515 14.1213 7.8815 16.6485 11 16.6485C14.1213 16.6485 16.6485 14.1185 16.6485 11C16.6485 7.87875 14.1185 5.3515 11 5.3515ZM11 14.6667C8.97417 14.6667 7.33333 13.0258 7.33333 11C7.33333 8.97417 8.97417 7.33333 11 7.33333C13.0258 7.33333 14.6667 8.97417 14.6667 11C14.6667 13.0258 13.0258 14.6667 11 14.6667ZM18.1922 5.12875C18.1922 5.8575 17.6 6.44875 16.8722 6.44875C16.1434 6.44875 15.5522 5.85658 15.5522 5.12875C15.5522 4.40092 16.1443 3.80967 16.8722 3.80967C17.5991 3.80875 18.1922 4.40092 18.1922 5.12875Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/chandrabosep"
                    target="_blank"
                    className="h-14 w-14 border rounded-full md:h-8 md:w-8 md:p-5 border-theme-light flex items-center justify-center"
                  >
                    <svg
                      viewBox="0 0 22 22"
                      fill="none"
                      class="w-5 flex-shrink-0 text-gray-40 "
                    >
                      <path
                        d="M11 0C4.9225 0 0 5.0503 0 11.2793C0 16.2638 3.1515 20.4907 7.52125 21.9805C8.07125 22.0867 8.27292 21.738 8.27292 21.4382C8.27292 21.1703 8.26375 20.4606 8.25917 19.5207C5.19933 20.2012 4.554 18.0074 4.554 18.0074C4.0535 16.7056 3.33025 16.3578 3.33025 16.3578C2.33383 15.6585 3.40725 15.6726 3.40725 15.6726C4.51183 15.7515 5.09208 16.8343 5.09208 16.8343C6.07292 18.5591 7.667 18.061 8.29583 17.7724C8.39483 17.043 8.67808 16.5458 8.9925 16.2638C6.54958 15.9818 3.982 15.0118 3.982 10.6899C3.982 9.45862 4.40825 8.45289 5.11408 7.66334C4.99033 7.37853 4.61908 6.23181 5.21033 4.67808C5.21033 4.67808 6.13158 4.37542 8.23533 5.83421C9.11533 5.58325 10.0503 5.45918 10.9853 5.45354C11.9203 5.45918 12.8553 5.58325 13.7353 5.83421C15.8253 4.37542 16.7466 4.67808 16.7466 4.67808C17.3378 6.23181 16.9666 7.37853 16.8566 7.66334C17.5578 8.45289 17.9841 9.45862 17.9841 10.6899C17.9841 15.0231 15.4128 15.9771 12.9653 16.2544C13.3503 16.5928 13.7078 17.2846 13.7078 18.3411C13.7078 19.8506 13.6941 21.0631 13.6941 21.4297C13.6941 21.7258 13.8866 22.0783 14.4503 21.9655C18.8512 20.486 22 16.2563 22 11.2793C22 5.0503 17.0748 0 11 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chandra-bose-p/"
                    target="_blank"
                    className="h-14 w-14 border rounded-full md:h-8 md:w-8 md:p-5 border-theme-light flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 flex-shrink-0 text-gray-40 "
                    >
                      <circle cx="4.983" cy="5.009" r="2.188"></circle>
                      <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10 md:pr-20 md:w-2/5 border-y border-theme-light md:border-0 md:order-3">
          <div className="py-10 px-6 md:h-full border-x border-theme-light dots_bg">
            <div className="text-xl font-medium text-[#00CB2C] uppercase flex items-center gap-2">
              <svg
                viewBox="0 0 17 16"
                fill="none"
                class="h-4 text-[#00CB2C] dark:text-white"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.69968 1.52865V6.17265C6.69968 6.90165 6.40968 7.60065 5.89468 8.11665L4.67768 9.33265C5.89128 9.29107 7.10025 9.50256 8.22768 9.95365L8.72968 10.1546C10.056 10.6853 11.5095 10.8122 12.9077 10.5196L10.5047 8.11665C9.98925 7.60098 9.6997 6.90174 9.69968 6.17265V1.52865C8.70003 1.49133 7.69933 1.49133 6.69968 1.52865ZM11.1997 1.61265L11.3897 1.62765C11.4887 1.63719 11.5887 1.62694 11.6837 1.59747C11.7787 1.56801 11.867 1.51993 11.9432 1.45604C12.0195 1.39214 12.0823 1.31371 12.128 1.22531C12.1736 1.1369 12.2013 1.0403 12.2092 0.941115C12.2172 0.841933 12.2053 0.742159 12.1744 0.647604C12.1434 0.553049 12.0939 0.465603 12.0288 0.39036C11.9637 0.315117 11.8843 0.253581 11.7951 0.209336C11.706 0.165091 11.609 0.139022 11.5097 0.132648C9.30655 -0.044216 7.0928 -0.044216 4.88968 0.132648C4.69375 0.151531 4.5131 0.246682 4.3867 0.397571C4.2603 0.54846 4.19828 0.742992 4.21403 0.939196C4.22978 1.1354 4.32203 1.31755 4.47088 1.44635C4.61973 1.57514 4.81325 1.64026 5.00968 1.62765L5.19968 1.61265V6.17265C5.19968 6.50365 5.06768 6.82165 4.83368 7.05565L0.799677 11.0906C-0.696323 12.5866 -0.017323 15.2406 2.20268 15.5656C4.16068 15.8526 6.16268 16.0006 8.19968 16.0006C10.2367 16.0006 12.2387 15.8526 14.1967 15.5646C16.4167 15.2396 17.0967 12.5856 15.5997 11.0896L11.5657 7.05565C11.3315 6.82143 11.1999 6.50385 11.1997 6.17265V1.61265Z"
                  fill="currentColor"
                ></path>
              </svg>
              Skills
            </div>
            <div className="flex flex-wrap gap-4 pt-10">
              {skills.map((e) => (
                <span className="border rounded-lg md:text-sm border-theme-light w-fit px-8 py-2">
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-theme-light w-full border-b flex flex-col md:flex-row justify-between ">
        <div className="px-10 border-b md:pl-20 md:pr-0 md:border-0 w-full md:w-2/4 border-theme-light h-full">
          <div className="py-16 md:py-28 md:h-full border-x italic font-extralight text-base md:text-3xl border-theme-light text-gray-500">
            <div className="text-center">
              <span className="md:text-4xl">"</span>Keep on{" "}
              <span className="border-b-2 text-[#e2e2e2] border-green-500">
                Building
              </span>
              , Keep on{" "}
              <span className="border-b-2 text-[#e2e2e2] border-green-500">
                Learning,
              </span>
              <div className="pt-2 md:pt-4 ">
                {" "}
                and Never Stop{" "}
                <span className="border-b-2 text-[#e2e2e2] border-green-500">
                  Dreaming!
                </span>
                <span className="text-lg md:text-4xl">"</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/4 bg-gradient-to-br px-10 md:px-0 from-[#3943573a] via-[#050608] to-[#050608] text-center flex md:items-center md:justify-center">
          <div className="flex flex-col gap-6 border-x border-theme-light md:border-0 w-full md:w-fit py-20">
            <div className="text-2xl font-medium">Email me at.</div>
            <a
              href="mailto:chandrabosep3112@gmail.com"
              className="w-full justify-center flex md:contents"
            >
              <div className="border-theme-light border rounded-xl md:w-full px-4 md:px-6 py-4 font-light text-[#77818F] flex items-center gap-4 bg-[#0c0f14bd]">
                <span>
                  <svg
                    viewBox="0 0 20 16"
                    fill="none"
                    class="w-5 flex-shrink-0 text-[#77818f9d]"
                  >
                    <path
                      d="M20 2.90909V3.0623L10.7486 8.85915C10.5234 9.00017 10.2643 9.07483 10 9.07483C9.73568 9.07483 9.47655 9.00017 9.25143 8.85915L0 3.0623V2.90909C0 2.13755 0.30102 1.39761 0.836838 0.852053C1.37266 0.306493 2.09938 0 2.85714 0H17.1429C17.9006 0 18.6273 0.306493 19.1632 0.852053C19.699 1.39761 20 2.13755 20 2.90909Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M0 13.0909V4.77091L6.30277 8.71923L2.56413 11.3897C2.22707 11.6304 2.149 12.0989 2.38976 12.4359C2.63051 12.773 3.09893 12.851 3.43599 12.6103L7.67766 9.58052L8.50286 10.0975C8.9531 10.3795 9.47137 10.5288 10 10.5288C10.5286 10.5288 11.0469 10.3795 11.4971 10.0975L12.3224 9.58048L16.5641 12.6103C16.9012 12.851 17.3696 12.773 17.6104 12.4359C17.8511 12.0989 17.773 11.6304 17.436 11.3897L13.6973 8.71919L20 4.77091V13.0909C20 13.8624 19.699 14.6024 19.1632 15.1479C18.6273 15.6935 17.9006 16 17.1429 16H2.85714C2.09938 16 1.37266 15.6935 0.836838 15.1479C0.30102 14.6024 0 13.8624 0 13.0909Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                chandrabosep3112@gmail.com
              </div>
            </a>
          </div>
        </div>

        <div className="mr-20 border-l border-theme-light"></div>
      </div>

      <div className="px-10 md:px-20 border-b border-theme-light">
        <div className="py-10 px-6 border-x border-theme-light dots_bg">
          <div className="text-xl font-medium text-[#00CB2C] uppercase flex items-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-6 text-[#00CB2C] dark:text-white"
              >
                <path
                  d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            Projects
          </div>
          <div className="flex flex-wrap gap-6 pt-10">
            <Card />
          </div>
        </div>
      </div>

      <div className="px-10 md:px-20 border-b  border-theme-light">
        <div className="py-16 px-6 border-x border-theme-light text-center">
          <div className="font-light text-base text-[#77818F]">
            Have an interesting, stupid or crazy idea you'd like some help
            building?{" "}
            <span className="border-b text-gray-200 border-green-500">
              <a href="mailto:chandrabosep3112@gmail.com">Let's talk.</a>
            </span>
          </div>
          <div className="text-medium font-light text-[#3D4654] py-4">
            {new Date().getFullYear()} © Chandra Bose
          </div>
        </div>
      </div>
      <div className="px-10 md:px-20 border-theme-light">
        <div className="py-8 px-6 border-x border-theme-light"></div>
      </div>
    </div>
  );
};

export default page;
