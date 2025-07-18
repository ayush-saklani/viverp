import { useEffect, useState, useRef } from "react";
import { motion, type PanInfo, useMotionValue } from "framer-motion";
import React, { type JSX } from "react";

export interface CarouselItem {
  id: number;
  img: string; // URL or path to the image
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    id: 1,
    img: "https://placehold.co/1920x1080/2563EB/FFFFFF?text=Image+1",
  },
  {
    id: 2,
    img: "https://placehold.co/1920x1080/10B981/FFFFFF?text=Image+2",
  },
  {
    id: 3,
    img: "https://placehold.co/1920x1080/9333EA/FFFFFF?text=Image+3",
  },
  {
    id: 4,
    img: "https://placehold.co/1920x1080/F97316/FFFFFF?text=Image+4",
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 0; // No gap for full-screen images

export default function Carousel({
  items = DEFAULT_ITEMS,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
}: CarouselProps): JSX.Element {
  const [itemWidth, setItemWidth] = useState(0);

  React.useLayoutEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.offsetWidth;
        setItemWidth(newWidth);
        console.log('Carousel container offsetWidth:', newWidth);
      }
    };

    updateWidth(); // Set initial width
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  // Removed unused isResetting state

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);


  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      x.set(0);
      setCurrentIndex(0);
      // Removed isResetting logic
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
      dragConstraints: {
        left: -trackItemOffset * (carouselItems.length - 1),
        right: 0,
      },
    };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full h-full"
    >
      <motion.div
        className="flex h-full" // Ensure flex container takes full height
        drag="x"
        {...dragProps}
        style={{
          width: carouselItems.length * itemWidth,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        // transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="relative shrink-0 h-full" // Removed w-full
              style={{
                width: itemWidth,
                height: "100%",
              }}
            >
              <img
                src={item.img}
                alt={`Carousel Image ${item.id}`}
                className="w-full h-full object-cover" // Make image cover the entire div
              />
            </motion.div>
          );
        })}
      </motion.div>
      {/* Removed dot navigation */}
    </div>
  );
}
