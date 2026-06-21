"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function BannerCarousel({ banners }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index) => {
      setActiveIndex((index + banners.length) % banners.length);
    },
    [banners.length],
  );

  useEffect(() => {
    if (banners.length <= 1) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  if (!banners.length) return null;

  const banner = banners[activeIndex];

  return (
    <section className="relative overflow-hidden" aria-label="แบนเนอร์โปรโมชั่น">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div
          key={banner.id}
          className="animate-banner relative overflow-hidden rounded-2xl shadow-lg"
          style={{ background: banner.background }}
        >
          {banner.image && (
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                sizes="100vw"
                className="object-cover opacity-80"
                priority
              />
            </div>
          )}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="relative flex min-h-[160px] flex-col justify-center px-6 py-8 sm:min-h-[200px] sm:px-10 sm:py-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80 sm:text-sm">
              Inblackm Termgame
            </p>
            <h1 className="mt-1 max-w-lg text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              {banner.title}
            </h1>
            <p className="mt-2 max-w-md text-sm text-white/90 sm:text-base">{banner.subtitle}</p>
            {banner.link && (
              <Link
                href={banner.link}
                className="mt-4 inline-flex w-fit items-center rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-white/90"
              >
                {banner.cta ?? "ดูเพิ่มเติม"}
              </Link>
            )}
          </div>
        </div>

        {banners.length > 1 && (
          <>
            {/*
            <button
              type="button"
              className="absolute left-6 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur transition-colors hover:bg-black/50 sm:inline-flex"
              aria-label="แบนเนอร์ก่อนหน้า"
              onClick={() => goTo(activeIndex - 1)}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              className="absolute right-6 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur transition-colors hover:bg-black/50 sm:inline-flex"
              aria-label="แบนเนอร์ถัดไป"
              onClick={() => goTo(activeIndex + 1)}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            */}

            <div className="mt-3 flex justify-center gap-2">
              {banners.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted"
                  }`}
                  aria-label={`ไปที่แบนเนอร์ ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
