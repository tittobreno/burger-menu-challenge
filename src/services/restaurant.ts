// src/services/restaurantServices.js
import api from "@/lib/axios";
import { Restaurant } from "@/models";

export const restaurantServices = {
  async getRestaurantDetails() {
    try {
      const res: Restaurant = await api.get("/challenge/venue/9");
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};
