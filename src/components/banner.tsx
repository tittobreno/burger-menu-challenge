"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Restaurant } from "@/models";
import { Loader } from "lucide-react";

const Banner = () => {
  const [data, setData] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/challenge/venue/9");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error to find data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    );
  }

  const banner = data?.webSettings?.bannerImage;

  return (
    <>
      {banner && (
        <Image
          src={banner}
          className="w-full"
          alt="Banner"
          layout="fill"
          objectFit="cover"
        />
      )}
    </>
  );
};

export default Banner;
