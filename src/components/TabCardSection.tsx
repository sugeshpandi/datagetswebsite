import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";

const TabCardSection = () => {
  const [activeTab, setActiveTab] = useState("campaign-strategy");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  const cardData = [
    {
      id: "campaign-strategy",
      title: "Campaign Strategy & Planning",
      heading: "Campaign Strategy & Planning",
      description:
        "Whether it is a completely new campaign idea or a new iteration for a regular campaign, Datagets finds the most optimal strategy for you, while giving you every opportunity to customize.",
    },
    {
      id: "optimized-segmentation",
      title: "Optimized Segmentation",
      heading: "Optimized Segmentation",
      description:
        "Datagets not only picks high-performing segments that have worked well in the past, but also brings new green-shoot segments that fall under your radar.",
    },
    {
      id: "personalized-content",
      title: "Personalized Content",
      heading: "Personalized Content",
      description:
        "For each target segment, Datagets curates the right tonality, product features, and offers that would bring the highest engagement and revenue.",
    },
    {
      id: "intelligent-reporting",
      title: "Intelligent Reporting & Analytics",
      heading: "Intelligent Reporting & Analytics",
      description:
        "Datagets brings detailed reporting that tells you WHAT happened with your campaigns, but more importantly leverages AI to explain WHY it happened.",
    },
  ];

  const handleTabClick = (tabId: string) => {
    const index = cardData.findIndex((card) => card.id === tabId);
    if (emblaApi && index !== -1) {
      emblaApi.scrollTo(index);
      setActiveTab(tabId);
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const selectedIndex = emblaApi.selectedScrollSnap();
      setActiveTab(cardData[selectedIndex].id);
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Tabs value={activeTab} onValueChange={handleTabClick} className="w-full">
          {/* Tabs List */}
          <TabsList className="flex flex-wrap justify-center w-full mb-10 gap-2 bg-gray-200 p-2 h-[5rem] rounded-xl shadow border border-gray-200">
            {cardData.map((card) => (
              <TabsTrigger
                key={card.id}
                value={card.id}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200 bg-gray-200 border-2  ${
                  activeTab === card.id
                    ? "bg-gray-200 text-white shadow"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {card.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Carousel Cards */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex space-x-6">
              {cardData.map((card) => (
                <div key={card.id} className="min-w-full">
                  <Card className="rounded-xl shadow-md border border-gray-200 bg-white h-60">
                    <CardContent className="p-3">
                      <div className="flex flex-col md:flex-row items-stretch">
                        {/* Text */}
                        <div className="md:w-2/3 p-10">
                          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                            {card.heading}
                          </h3>
                          <p className="text-gray-600">{card.description}</p>
                        </div>

                        {/* Visual */}
                        <div className="md:w-1/3 bg-blue-50 flex items-center justify-center p-8">
                          <div className="w-36 h-36 bg-blue-200 rotate-45 rounded-xl shadow-inner" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default TabCardSection;
