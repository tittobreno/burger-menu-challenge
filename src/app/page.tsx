"use client";
import { restaurantServices } from "@/services/restaurant";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await restaurantServices.getRestaurantDetails();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="w-full h-screen">
      <section className="w-full h-[150px] relative">
        <Image
          src={
            "https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png"
          }
          className="w-full"
          alt="Banner"
          layout="fill"
          objectFit="cover"
        />
      </section>
    </main>
  );
}
