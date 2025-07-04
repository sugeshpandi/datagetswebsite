import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll(".parallax");
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || "0.1");
        const yPos = -scrollY * speed;
        element.style.setProperty("--parallax-y", `${yPos}px`);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <section
      className="overflow-hidden relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      id="hero"
      style={{
        padding: isMobile ? "100px 12px 40px" : "120px 20px 60px",
      }}
    >
      {/* Background Blob */}
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-10 blur-3xl rounded-full"></div>

      {/* Hero Content */}
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div
          className="relative bg-cover bg-center rounded-xl p-6 sm:p-12 shadow-lg"
          style={{
            backgroundImage: `url('https://img.freepik.com/premium-vector/digital-technology-background-digital-data-dots-blue-pattern-pixel-background_322958-4602.jpg')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-xl z-0" />

          {/* Text Content */}
          <div className="relative z-10">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight opacity-0 animate-fade-in text-gray-900"
              style={{ animationDelay: "0.3s" }}
            >
              Activate Your 1P Data.<br className="hidden sm:inline" />
              <span className="text-blue-600">Drive Personalization.</span>
              <br className="hidden sm:inline" />
              <span className="text-purple-600">Increase Revenue</span>
            </h1>

            <p
              style={{ animationDelay: "0.5s" }}
              className="mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-700 font-normal text-base sm:text-lg text-left"
            >
              AI-based Productized Solution that blends a scalable product with domain expertise for eCommerce and digital marketing
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              <button className="flex items-center justify-center group w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Product Demo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="flex items-center justify-center group w-full sm:w-auto text-center bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-6 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-200">
                Talk to an Expert
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full mt-12">
          <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black relative">
            {showVideo ? (
              <>
                <div className="aspect-video flex items-center justify-center">
                  <p className="text-white text-center">
                    Video player placeholder
                    <br />
                    <span className="text-sm text-gray-400">
                      60-second explainer video would be embedded here
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white"
                >
                  ×
                </button>
              </>
            ) : (
              <div
                className="aspect-video relative group cursor-pointer"
                onClick={() => setShowVideo(true)}
              >
                <img
                  ref={imageRef}
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2070&q=80"
                  alt="Video Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition">
                    <Play className="text-blue-600 w-6 h-6 ml-1" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Parallax Circle */}
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
