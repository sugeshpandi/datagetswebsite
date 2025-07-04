import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, MessageSquare, BarChart3 } from "lucide-react";

const CRMMarketingSection = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-orange-600" />,
      title: "Campaign Strategy & Planning",
      description:
        "Whether it's a new idea or a fresh take on a recurring campaign, Datagets finds the most optimal strategy while giving you every chance to customize.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Optimized Segmentation",
      description:
        "Datagets finds high-performing segments that have worked well and discovers green-shoot segments that usually go unnoticed.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-600" />,
      title: "Personalized Content",
      description:
        "For every segment, Datagets curates tone, features, and offers that bring the highest engagement and conversion.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-600" />,
      title: "Intelligent Reporting & Analytics",
      description:
        "Datagets doesn't just tell you WHAT happened — it uses AI to help explain WHY it happened.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            CRM Marketing 2.0 powered by Agentic AI
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Magic happens when your brilliant Marketing ideas meet the power of Datagets’ agentic AI Platform.
          </p>
        </div>

        {/* Layout: Grid cards + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Grid of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="flex flex-row items-center gap-3 p-0 mb-3">
                  {feature.icon}
                  <CardTitle className="text-md font-semibold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-xl max-w-md w-full bg-[#0F1B3D]">
              <img
                src="https://img.freepik.com/free-vector/ai-technology-brain-background-vector-digital-transformation-concept_53876-124648.jpg"
                alt="CRM marketing illustration"
                className="w-full h-[27rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMMarketingSection;
