import brandImage from "../assets/brandImage.jpg";
import customers from "../assets/customers.jpg";
import ArticleCard from "./ArticleCard";
import icon1 from "../assets/icon_1.png";
import article1ImageBig from "../assets/article1big.jpg";
import article2Icon from '../assets/aritcle2Icon.png';
import article2Image from '../assets/article2div.relative.png'
import article3Icon from '../assets/article3Icon.png'
import article3Image from '../assets/aricle3bigdiv.relative.png'
import article4Icon from '../assets/article4Icon.png'
import article4Image from '../assets/article4div.relative.png'


function Main() {
  return (
    <div className="w-full text-center">
      <div className="">
        <div>
          <h1 className=" text-2xl font-bold md:text-7xl">
            Create
            <span
              style={{
                background:
                  "linear-gradient(to left, #0158f7 100%, #7839ee 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {" "}
              Professional Videos
            </span>{" "}
            <br /> in Minutes with AI Avatars
          </h1>
        </div>

        <p className="mt-4" style={{ color: "#34394b" }}>
          Transform your text into engaging video content instantly, while
          saving time and cutting costs.
        </p>

        <div className=" mt-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-7 p-2 rounded-lg mr-2"
          />
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Get a Demo
          </button>
        </div>
      </div>
      <div className="pt-20">
        <img src={brandImage} alt="brand Image" />
      </div>
      {/* Customers */}
      <div className="pt-8">
        <img src={customers} alt="customers" />
      </div>
      {/* features */}
      <div className=" p-16 ">
      <div className="flex justify-between mt-10">
        <div className="w-1/2">
          <ArticleCard
            icon={icon1}
            headingFlex='flex'
            colorHeading="Minutes,"
            blackHeading="not Hours,"
            paragraph="No need for lengthy processes like
              filming, editing, or storyboarding,
              content can be created in minutes
              by simply providing a script."
            link="#"
          />
        </div>
        <div className="w-1/2  ">
          <img src={article1ImageBig} alt="article 1 image" />
        </div>
      </div>

      <div className="flex flex-row-reverse  justify-end md:gap-36 mt-10">
        <div>
          <ArticleCard
          headingFlex='flex-row'
            icon={article2Icon}
            colorHeading="80% "
            blackHeading=" cost reduction"
            paragraph="Eliminate the need for expensive equipment,
location rentals, and professional videographer,
reducing overall production costs."
            link="#"
          />
        </div>
        <div className="w-1/2 ">
          <img src={article2Image} alt="article 1 image" />
        </div>
      </div>

      <div className="flex justify-between mt-10 " >
        <div>
          <ArticleCard
            icon={article3Icon}
            colorHeading="15 vs 1 AI tool "
            blackHeading="A Crew of"
            headingFlex='flex-row-reverse justify-end'
            paragraph="Video production coordination involves managing schedules and equipment. AI videos streamline this, reducing labor and
management efforts."
            link="#"
          />
        </div>
        <div className="w-1/2 ">
          <img src={article3Image} alt="article 1 image" />
        </div>
      </div>

      <div className="flex  mt-10 flex-row-reverse md:gap-36">
        <div>
          <ArticleCard
            icon={article4Icon}
            colorHeading="140 +"
            blackHeading="Languages"
            paragraph="Engage non-English speaking audiences by automating dubbing and translation to create and distribute multilingual videos quickly."
            link="#"
          />
        </div>
        <div className="w-1/2  ">
          <img src={article4Image} alt="article 1 image" />
        </div>
      </div>
      </div>
     
      
    </div>
  );
}

export default Main;
