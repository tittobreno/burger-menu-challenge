"use client";
import { restaurantServices } from "@/services/restaurant";
import { Search } from "lucide-react";
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

      <section className="w-full flex flex-col items-center justify-center">
        <section className="w-[1024px]">
          <div className="w-full bg-white border border-gray-400 rounded-lg flex items-center p-3 gap-3 my-[6px]">
            <Search className="text-gray-400" />
            <input
              type="text"
              placeholder="Search menu items"
              className="w-full border-none bg-transparent shadow-none outline-none focus:outline-none focus:ring-0 p-0 m-0"
            />
          </div>
          <section className="bg-gray-100 w-full">
            <span>asdas</span>
          </section>
        </section>
      </section>
    </main>
  );
}
