import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import Button from "../Ui/Button";
import Image from "next/image";

// Define the type for the props
interface CardProps {
  title: string;
  description: string;
  image: string;
}

// Card component with dummy details
const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md overflow-hidden transform transition-transform hover:scale-105">
      <div className="relative w-full h-32 mb-4 rounded-md overflow-hidden">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="mt-[8px]">
        <label className="text-md font-semibold">{title}</label>
      </div>
      <div className=" flex   gap-2 flex-row mt-[8px]">
        <Image src="/assets/ClientDP.svg" alt={"dp"} width={20} height={20} />
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

function Templates() {
  // Sample data for the First set of cards
  const cards1 = [
    {
      title: "Landing pages",
      description: `Creator's Name`,
      image: "/assets/informaz.svg",
    },
    {
      title: "Landing pages",
      description: `Creator's Name`,
      image: "/assets/news.svg",
    },
    {
      title: "Landing pages",
      description: `Creator's Name`,
      image: "/assets/newYorkTimes.svg",
      width: "369px",
      height: "275px",
    },
    {
      title: "Landing pages",
      description: `Creator's Name`,
      image: "/assets/magazine.svg",
    },
    // Add more cards as needed
  ];

  // Sample data for the Second set of cards
  const cards2 = [
    {
      title: "Icon 1",
      description: `Creator's Name`,
      image: "/assets/informaz.svg",
    },
    {
      title: "Icon 2",
      description: `Creator's Name`,
      image: "/assets/informaz.svg",
    },
    {
      title: "Icon 3",
      description: `Creator's Name`,
      image: "/assets/informaz.svg",
    },
    {
      title: "Icon 4",
      description: `Creator's Name`,
      image: "/assets/informaz.svg",
    },
    // More icons cards can be inserted when needed
  ];

  // Sample data for the third set of cards
  const cards3 = [
    {
      title: "Landing pages",
      description: `Creator's Name`,
      image: "/assets/informaz.svg",
    },
    {
      title: "Card 2",
      description: `Creator's Name`,
      image: "/assets/news.svg",
    },
    {
      title: "Card 3",
      description: `Creator's Name`,
      image: "/assets/newYorkTimes.svg",
      width: "369px",
      height: "275px",
    },
    {
      title: "Card 4",
      description: `Creator's Name`,
      image: "/assets/magazine.svg",
    },
    // Add more cards as needed
  ];

  // Sample data for the Fourth set of cards
  const cards4 = [
    {
      title: "Landing pages",
      description: `Creator's Name`,
      image: "/assets/informaz.svg",
    },
    {
      title: "Card 2",
      description: `Creator's Name`,
      image: "/assets/news.svg",
    },
    {
      title: "Card 3",
      description: `Creator's Name`,
      image: "/assets/newYorkTimes.svg",
      // width: "369px",
      // height: "275px",
    },
    {
      title: "Card 4",
      description: `Creator's Name`,
      image: "/assets/magazine.svg",
    },
    // Add more cards as needed
  ];

  return (
    <div className="flex flex-col w-full min-h-[550px] max-w-[1240px] px-4 sm:px-8 xl:px-10 2xl:px-14 mt-[80px] mb-[80px] ">
      {/* First set of cards */}
      <div className="flex justify-between items-center gap-24 animate-slide-right">
        <div className="text-lg font-bold">Templates </div>
        <Button className="flex items-center gap-2 text-[#265D5C]">
          See all <IoChevronForwardOutline className="h-4 w-4" />
        </Button>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 mb-6 animate-slide-right ">
        {/* Map through the first set of cards and render each card */}
        {cards1.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>

      {/* Second set of cards */}
      <div className="flex justify-between items-center gap-24 animate-slide-up">
        <div className="text-lg font-bold">Icons</div>
        <Button className="flex items-center text-blue-100">
          See all <IoChevronForwardOutline className="h-4 w-4 ml-1" />
        </Button>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6 mt-8 animate-slide-up">
        {/* Map through the second set of cards and render each card */}
        {cards2.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>

      {/* Third set of cards */}
      <div className="flex justify-between items-center gap-24 animate-slide-left">
        <div className="text-lg font-bold">Web apps</div>
        <Button className="flex items-center gap-2 text-[#265D5C]">
          See all <IoChevronForwardOutline className="h-4 w-4" />
        </Button>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  mb-6 mt-8 animate-slide-left">
        {/* Map through the first set of cards and render each card */}
        {cards3.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>

      {/* Fourth set of cards */}
      <div className="flex justify-between items-center md:gap-24 animate-slide-right">
        <div className="text-lg font-bold">Mobile apps</div>
        <Button className="flex items-center gap-2 text-blue-100">
          See all <IoChevronForwardOutline className="h-4 w-4" />
        </Button>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 animate-slide-right">
        {/* Map through the first set of cards and render each card */}
        {cards4.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Templates;
