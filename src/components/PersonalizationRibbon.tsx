import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, TrendingUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PersonalizationRibbon = () => {
  const features = [
    {
      icon: <Target className="w-14 h-14 text-blue-600" />,
      title: "Real-time Website and App Personalization",
      description:
        "Deliver personalized experiences instantly based on user behavior and preferences. Our AI-powered engine analyzes customer interactions in real-time to provide tailored content, product recommendations, and user journeys that increase engagement and conversion rates.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <Zap className="w-14 h-14 text-purple-600" />,
      title: "Automated and Hyper-personalized Re-targeting",
      description:
        "Smart re-targeting campaigns that adapt to individual customer journeys. Our advanced algorithms create dynamic audience segments and personalized messaging that brings customers back with relevant offers and content at the perfect moment.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: <TrendingUp className="w-14 h-14 text-green-600" />,
      title: "Measurable Lift in 2 Weeks",
      description:
        "See immediate impact on conversion rates and revenue growth. Our solution provides detailed analytics and performance metrics, showing clear ROI within the first two weeks of implementation with continued optimization over time.",
      color: "bg-green-50 border-green-200",
    },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <div className="mx-auto px-4 max-w-[100rem]">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Incremental Online Revenue through Personalization and Hyper Re-targeting
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Transform your customer engagement with AI-powered personalization that delivers measurable results
          </p>
        </div>

        <div className="w-full relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center basis-full"
                >
                  <div className="w-full max-w-6xl p-6"> {/* Expanded card size */}
                    <Card
                      className={`${feature.color} border-2 hover:shadow-2xl transition-all duration-300 h-full px-14 py-14`}
                    >
                      <CardHeader className="text-center pb-8">
                        <div className="flex justify-center mb-6">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-4xl font-bold text-gray-900 mb-4">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-gray-600 mb-10 text-xl leading-relaxed">
                          {feature.description}
                        </p>
                        <Button
                          variant="outline"
                          className="group text-lg px-10 py-4"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Pagination Arrows */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />

          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PersonalizationRibbon;
