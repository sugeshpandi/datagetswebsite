import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Landmark,
  LineChart,
  Puzzle,
  Handshake,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Reusable Card Component
const WhyCard = ({
  icon,
  title,
  description,
  bgColor,
  iconColor,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}) => (
  <Card className={`${bgColor} border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all`}>
    <CardContent className="p-8 h-full flex flex-col justify-start">
      <div className="mb-4">{React.cloneElement(icon, { className: `w-8 h-8 ${iconColor}` })}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-base leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const WhyDataGetsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Industry-Leading Solutions",
      description:
        "Our founders have 20+ years of experience building data solutions at Fortune 50 companies. Now, you can access the same sophisticated tools at a fraction of the cost and time.",
      icon: <Landmark />,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Measurable Impact",
      description:
        "A granular attribution framework directly links your data products to measurable outcomes like revenue or KPI lift.",
      icon: <LineChart />,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      id: 3,
      title: "End-to-End or A-la Carte",
      description:
        "Whether you need full-service execution or individual modules, we tailor our solutions to your workload and needs.",
      icon: <Puzzle />,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      id: 4,
      title: "Flexible Engagement Model",
      description:
        "Choose from pay-for-performance, fixed project pricing, or time/labor-based billing. Only pay when we deliver results.",
      icon: <Handshake />,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  const cardsPerPage = 2;
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const currentCards = cards.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Why DataGets</h2>
          <p className="text-gray-600 mt-2 text-lg">
            What sets us apart in the data-driven world
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {currentCards.map((card) => (
            <WhyCard key={card.id} {...card} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-6">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentPage ? "bg-gray-800" : "bg-gray-400"
                } transition-all duration-200`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDataGetsSection;
