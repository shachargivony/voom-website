import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Zap } from "lucide-react";
import logo from "../../Logo.png";


// Letter animation variants
const letterVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.4, rotate: -12 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", damping: 10, stiffness: 100 }
  }
};

const sentenceVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: customDelay }
  })
};

// Magnetic button hook
function MagneticButton({ children, className, onClick }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left - width / 2;
    const clientY = e.clientY - rect.top - height / 2;

    x.set(clientX * 0.35);
    y.set(clientY * 0.35);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.playbackRate = 0.75;
      videoRef.current.play()
        .then(() => {
          setIsVideoVisible(true);
        })
        .catch((err) => {
          console.warn("Video autoplay failed:", err);
        });
    }
  }, []);

  const handleVideoEnded = () => {
    setIsVideoVisible(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.75;
        videoRef.current.play()
          .then(() => {
            setIsVideoVisible(true);
          })
          .catch((err) => {
            console.warn("Video loop replay failed:", err);
          });
      }
    }, 2000); // 2-second pause before replay
  };

  const scrollToTachles = () => {
    document.getElementById("tachles-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#070707] py-12 sm:py-16 md:py-20 px-4 select-none"
      dir="rtl"
    >
      {/* Background radial glow - placed at z-0 behind the video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4a853]/5 via-[#070707] to-black" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4a853]/5 rounded-full blur-[160px]"
          animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Video Background - placed at z-10 on top of the radial glow */}
      <div className="absolute inset-0 w-full h-full z-10 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          className={`absolute inset-0 w-full h-full object-cover scale-[1.15] transition-opacity duration-1000 filter brightness-[0.45] contrast-[1.1] saturate-[0.8] ${
            isVideoVisible ? "opacity-[0.22]" : "opacity-0"
          }`}
        >
          <source src="/Use_the_EXACT_logo_provided_in.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay gradients to blend it perfectly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/30 via-transparent to-[#070707]" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center">

        {/* VOOM — letter-by-letter entrance */}
        <div className="mb-4 md:mb-6 overflow-hidden flex" dir="ltr">
          {"VOOM".split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="voom-animate text-7xl md:text-9xl font-black tracking-wide font-sans inline-block"
              style={{ display: "inline-block" }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Main headline */}
        <motion.h2
          custom={0.45}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-4xl font-black text-white/95 leading-tight"
        >
          השינוי של העסק שלך מתחיל כאן
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          custom={0.6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-white/60 text-sm md:text-base font-medium mt-3 md:mt-4 max-w-xl leading-relaxed"
        >
          הגיע הזמן לעבור משיטות שיווק ידניות ומפוזרות למעטפת שיווק ואוטומציה 360°.{" "}
          <span className="text-[#f0d78a] font-bold">תתחילו את השינוי עוד היום</span> והובילו את העסק לצמיחה ומדידה.
        </motion.p>

        {/* CTA Buttons — magnetic effect */}
        <motion.div
          custom={0.8}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4 mt-6 sm:mt-8 md:mt-10 flex-wrap"
        >
          <MagneticButton
            onClick={scrollToContact}
            className="px-7 py-3 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1c1407] font-bold text-xs md:text-sm rounded-xl shadow-[0_4px_15px_rgba(212,168,83,0.2)] hover:shadow-[0_6px_25px_rgba(212,168,83,0.45)] border border-[#d4a853]/40 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden after:absolute after:inset-y-0 after:-left-[100%] after:w-[50%] after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:skew-x-[-25deg] hover:after:left-[150%] after:transition-all after:duration-[1000ms] after:ease-in-out transition-all duration-300"
          >
            <Zap className="w-3.5 h-3.5" />
            קבל הצעה עכשיו
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10"
        onClick={scrollToContact}
      >
        <ArrowDown className="w-5 h-5 text-[#d4a853]" />
      </div>
    </section>
  );
}
