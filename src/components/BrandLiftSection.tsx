import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  TrendingUp,
  MailOpen,
  MousePointerClick,
  Rocket,
} from "lucide-react";

// Reusable Metric Card Component with Increased Padding
const BrandMetricCard = ({
  icon,
  title,
  subtitle,
  bgColor,
  iconColor,
}: {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  bgColor: string;
  iconColor: string;
}) => (
  <div
    className={`${bgColor} rounded-xl px-6 py-12 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-md`}
  >
    <div className="mb-4">
      {React.cloneElement(icon, { size: 36, className: `${iconColor}` })}
    </div>
    <div className="text-xl font-bold text-gray-800">{title}</div>
    <div className="text-sm text-gray-600 mt-2">{subtitle}</div>
  </div>
);

const BrandLiftSection = () => {
  const brandMetrics = [
    {
      id: 1,
      title: "+30% Conversion",
      subtitle:
        "Increase in same-session conversion with Website/App Personalization",
      icon: <Rocket />,
      bgColor: "bg-violet-100",
      iconColor: "text-violet-700",
    },
    {
      id: 2,
      title: "+3X Higher CVR",
      subtitle:
        "For retargeting vs. best-performing batch CRM campaigns",
      icon: <TrendingUp />,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      id: 3,
      title: "+50% Open Rate",
      subtitle: "Boost in email campaign open rates",
      icon: <MailOpen />,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 4,
      title: "+35% CTR",
      subtitle: "Lift in click-through rate across channels",
      icon: <MousePointerClick />,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      id: 5,
      title: "+20% CVR",
      subtitle: "Overall increase in conversion rates",
      icon: <BarChart3 />,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-700",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Brand Lift</h2>
          <p className="text-gray-600 mt-2 text-lg">
            Key performance benchmarks showcasing our impact
          </p>
        </div>

        <Card className="max-w-7xl mx-auto border border-gray-200 shadow-sm bg-gray-50 rounded-2xl p-4">
          <CardContent className="p-14">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {brandMetrics.map((card) => (
                <BrandMetricCard key={card.id} {...card} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BrandLiftSection;
