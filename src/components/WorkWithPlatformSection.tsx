import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, Cloud, ShoppingBag } from "lucide-react";

const WorkWithPlatformSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Work with Platform</h2>
          <p className="text-gray-600 mt-2 text-lg">
            Connect your existing tools with minimal effort and maximum flexibility
          </p>
        </div>

        <Card className="border border-gray-200 shadow-md bg-white rounded-2xl">
          <CardContent className="p-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Visuals */}
              <div className="lg:w-1/2 order-2 lg:order-1 relative h-96 flex items-center justify-center">
                <div className="relative w-full h-full max-w-md">
                  {/* Floating Card 1 - Adobe */}
                  <div className="absolute bg-orange-400 rounded-lg w-24 h-32 top-8 left-12 transform rotate-12 shadow-lg hover:rotate-6 transition-transform duration-300 flex items-center justify-center">
                    <Layers className="w-8 h-8 text-white" />
                  </div>

                  {/* Floating Card 2 - Salesforce */}
                  <div className="absolute bg-orange-300 rounded-lg w-24 h-32 top-4 right-8 transform -rotate-6 shadow-lg hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>

                  {/* Floating Card 3 - Shopify */}
                  <div className="absolute bg-orange-500 rounded-lg w-24 h-32 top-24 left-1/2 transform -translate-x-1/2 rotate-3 shadow-lg hover:rotate-0 transition-transform duration-300 flex items-center justify-center z-10">
                    <ShoppingBag className="w-8 h-8 text-white" />
                  </div>

                  {/* Floating Card 4 - Custom */}
                  <div className="absolute bg-orange-200 rounded-lg w-24 h-32 bottom-8 left-8 transform rotate-8 shadow-lg hover:rotate-3 transition-transform duration-300 flex items-center justify-center">
                    <Layers className="w-8 h-8 text-orange-800" />
                  </div>

                  {/* Floating Card 5 - Custom */}
                  <div className="absolute bg-orange-400 rounded-lg w-24 h-32 bottom-12 right-12 transform -rotate-12 shadow-lg hover:-rotate-6 transition-transform duration-300 flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:w-1/2 order-1 lg:order-2 space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Seamless Integration</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Connect your existing tools and workflows with our powerful platform.
                  Experience effortless data synchronization and streamlined operations
                  that scale with your business needs.
                </p>

                <div className="space-y-4">
                  {[
                    "Real-time data processing and analytics",
                    "Multi-platform compatibility",
                    "Advanced security and compliance",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0" />
                      <span className="text-gray-700 text-base">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WorkWithPlatformSection;
