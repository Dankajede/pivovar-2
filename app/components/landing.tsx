"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion, useAnimation } from "framer-motion";

// Definice interface pro bubliny
interface Bubble {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

// Konstantní hodnota pro červenou barvu použitou v celé komponentě - nastaveno na sytou červenou
const BRAND_RED = "#ff0000"; // Čistá sytá červená
const BRAND_RED_RGBA = "rgba(255, 0, 0, 0.7)"; // Odpovídající RGBA hodnota

const Landing = () => {
  const textControls = useAnimation();
  const [flyAnimationComplete, setFlyAnimationComplete] = useState(false);
  const [bubbles, setBubbles] = useState<Bubble[]>([]); // Správná inicializace typovaného pole
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  // Generování bublin při načtení
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // Vytvořit náhodné bubliny
      const newBubbles: Bubble[] = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        size: Math.random() * 30 + 5,
        delay: Math.random() * 10,
        duration: Math.random() * 15 + 10,
        opacity: Math.random() * 0.5 + 0.1,
      }));
      setBubbles(newBubbles);

      // Event listener pro změnu velikosti okna
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Varianta animace pro zachvění mouchy při najetí myší
  const shakeAnimation = {
    hover: {
      x: [0, -5, 5, -5, 5, 0],
      y: [0, -3, 2, -2, 3, 0],
      rotate: [0, -1, 2, -2, 1, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Varianta animace pro tlačítka při najetí myší
  const buttonHoverAnimation = {
    hover: {
      scale: 1.05,
      backgroundColor: "#cc0000", // Tmavší červená při hoveru
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <Head>
        <title>Pivovar Moucha - Originální čerstvé pivo</title>
        <meta
          name="description"
          content="Objevte Pivovar Moucha, kde se tradice mísí s inovací a precizností a každé pivo je připraveno na míru. Ochutnejte čerstvě plněné sudy!"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Raleway:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Hero sekce s animovaným pozadím */}
      <div className="w-full h-screen overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 fixed top-0 left-0 flex flex-col items-center justify-center text-white relative">
        {/* Animované pozadí - bubliny */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Dekorativní prvek - vlnky */}
          <svg
            className="absolute w-full h-full opacity-20"
            preserveAspectRatio="none"
          >
            <motion.path
              d={`M0,${windowSize.height * 0.7} 
                 C${windowSize.width * 0.2},${windowSize.height * 0.6} 
                 ${windowSize.width * 0.4},${windowSize.height * 0.8} 
                 ${windowSize.width * 0.6},${windowSize.height * 0.7} 
                 S${windowSize.width * 0.8},${windowSize.height * 0.65} 
                 ${windowSize.width},${windowSize.height * 0.7} 
                 V${windowSize.height} H0 Z`}
              fill={`rgba(225, 29, 72, 0.05)`}
              animate={{
                d: [
                  `M0,${windowSize.height * 0.7} 
                   C${windowSize.width * 0.2},${windowSize.height * 0.6} 
                   ${windowSize.width * 0.4},${windowSize.height * 0.8} 
                   ${windowSize.width * 0.6},${windowSize.height * 0.7} 
                   S${windowSize.width * 0.8},${windowSize.height * 0.65} 
                   ${windowSize.width},${windowSize.height * 0.7} 
                   V${windowSize.height} H0 Z`,
                  `M0,${windowSize.height * 0.75} 
                   C${windowSize.width * 0.2},${windowSize.height * 0.85} 
                   ${windowSize.width * 0.4},${windowSize.height * 0.7} 
                   ${windowSize.width * 0.6},${windowSize.height * 0.8} 
                   S${windowSize.width * 0.8},${windowSize.height * 0.7} 
                   ${windowSize.width},${windowSize.height * 0.75} 
                   V${windowSize.height} H0 Z`,
                  `M0,${windowSize.height * 0.7} 
                   C${windowSize.width * 0.2},${windowSize.height * 0.6} 
                   ${windowSize.width * 0.4},${windowSize.height * 0.8} 
                   ${windowSize.width * 0.6},${windowSize.height * 0.7} 
                   S${windowSize.width * 0.8},${windowSize.height * 0.65} 
                   ${windowSize.width},${windowSize.height * 0.7} 
                   V${windowSize.height} H0 Z`,
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d={`M0,${windowSize.height * 0.8} 
                 C${windowSize.width * 0.3},${windowSize.height * 0.7} 
                 ${windowSize.width * 0.5},${windowSize.height * 0.9} 
                 ${windowSize.width * 0.7},${windowSize.height * 0.75} 
                 S${windowSize.width * 0.9},${windowSize.height * 0.85} 
                 ${windowSize.width},${windowSize.height * 0.8} 
                 V${windowSize.height} H0 Z`}
              fill={`rgba(225, 29, 72, 0.1)`}
              animate={{
                d: [
                  `M0,${windowSize.height * 0.8} 
                   C${windowSize.width * 0.3},${windowSize.height * 0.7} 
                   ${windowSize.width * 0.5},${windowSize.height * 0.9} 
                   ${windowSize.width * 0.7},${windowSize.height * 0.75} 
                   S${windowSize.width * 0.9},${windowSize.height * 0.85} 
                   ${windowSize.width},${windowSize.height * 0.8} 
                   V${windowSize.height} H0 Z`,
                  `M0,${windowSize.height * 0.85} 
                   C${windowSize.width * 0.3},${windowSize.height * 0.95} 
                   ${windowSize.width * 0.5},${windowSize.height * 0.8} 
                   ${windowSize.width * 0.7},${windowSize.height * 0.9} 
                   S${windowSize.width * 0.9},${windowSize.height * 0.75} 
                   ${windowSize.width},${windowSize.height * 0.85} 
                   V${windowSize.height} H0 Z`,
                  `M0,${windowSize.height * 0.8} 
                   C${windowSize.width * 0.3},${windowSize.height * 0.7} 
                   ${windowSize.width * 0.5},${windowSize.height * 0.9} 
                   ${windowSize.width * 0.7},${windowSize.height * 0.75} 
                   S${windowSize.width * 0.9},${windowSize.height * 0.85} 
                   ${windowSize.width},${windowSize.height * 0.8} 
                   V${windowSize.height} H0 Z`,
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </svg>

          {/* Červená záře */}
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: BRAND_RED }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: BRAND_RED }}
          ></div>

          {/* Bubliny */}
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute rounded-full bg-gray-100"
              style={{
                width: bubble.size,
                height: bubble.size,
                left: bubble.x,
                opacity: bubble.opacity * 0.7, // Snížená opacita pro nižší kontrast
              }}
              initial={{ y: windowSize.height + bubble.size }}
              animate={{
                y: -bubble.size * 2,
                x: bubble.x + Math.sin(bubble.id) * 50,
              }}
              transition={{
                duration: bubble.duration,
                repeat: Infinity,
                delay: bubble.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Overlay s jemným vzorem */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Hlavní obsah */}
        <div className="container mx-auto px-4 z-10 text-center">
          {/* Efekt rozmazané záře za logem */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 opacity-5 rounded-full blur-3xl"
            style={{ backgroundColor: BRAND_RED }}
          ></div>

          {/* Logo sekce - červená moucha s animací */}
          <div className="mb-4 mt-10 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
              <motion.img
                src="/images/hero.svg"
                alt="Pivovar Moucha"
                className="w-full h-full object-contain cursor-pointer drop-shadow-lg"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(9%) sepia(98%) saturate(7456%) hue-rotate(0deg) brightness(106%) contrast(113%)",
                }}
                initial={{
                  x: -1000,
                  y: 300,
                  rotate: -45,
                  scale: 0.5,
                  opacity: 1,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                }}
                onAnimationComplete={() => {
                  setFlyAnimationComplete(true);
                  textControls.start({ opacity: 1, y: 0 });
                }}
                whileHover="hover"
                variants={shakeAnimation}
              />
            </div>
          </div>

          {/* Název a motto - s postupným objevením po doletu mouchy */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={textControls}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 font-serif text-white"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
            >
              PIVOVAR MOUCHA
            </h1>

            {/* Motto s blikajícím textem a záře */}
            <div className="mb-5">
              <motion.span
                className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide"
                style={{ color: BRAND_RED }}
                animate={{
                  opacity: [1, 0.3, 1, 0.7, 1, 0.5, 1],
                  textShadow: [
                    `0 0 7px ${BRAND_RED_RGBA}, 0 0 15px ${BRAND_RED_RGBA}, 0 0 25px ${BRAND_RED_RGBA}`,
                    `0 0 3px ${BRAND_RED_RGBA}, 0 0 5px ${BRAND_RED_RGBA}`,
                    `0 0 10px ${BRAND_RED_RGBA}, 0 0 20px ${BRAND_RED_RGBA}, 0 0 30px ${BRAND_RED_RGBA}`,
                    `0 0 5px ${BRAND_RED_RGBA}, 0 0 10px ${BRAND_RED_RGBA}`,
                    `0 0 8px ${BRAND_RED_RGBA}, 0 0 15px ${BRAND_RED_RGBA}`,
                    `0 0 3px ${BRAND_RED_RGBA}, 0 0 5px ${BRAND_RED_RGBA}`,
                    `0 0 7px ${BRAND_RED_RGBA}, 0 0 15px ${BRAND_RED_RGBA}, 0 0 25px ${BRAND_RED_RGBA}`,
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 1],
                  delay: -1,
                }}
              >
                S MOUCHOU NENALETÍŠ
              </motion.span>
            </div>

            {/* Popisek */}
            <div className="mb-12 max-w-2xl mx-auto text-gray-200">
              <p
                className="text-xl leading-relaxed"
                style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
              >
                Jsme malý pivovar s velkým charakterem.
              </p>
            </div>

            {/* Sekce s jedním tlačítkem */}
            <div className="mb-10 relative">
              {/* Jedno vycentrované tlačítko */}
              <div className="flex justify-center w-full mb-3">
                <motion.a
                  href="/nase-piva"
                  className="text-white font-bold py-4 px-16 rounded-full shadow-lg text-center backdrop-blur-sm relative overflow-hidden"
                  style={{
                    backgroundColor: BRAND_RED,
                    maxWidth: "400px",
                    minWidth: "250px",
                  }}
                  whileHover="hover"
                  variants={buttonHoverAnimation}
                >
                  <span className="relative z-10 text-lg">
                    Aktuální nabídka piv
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white opacity-10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Landing;
