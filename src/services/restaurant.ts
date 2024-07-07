// src/services/restaurantServices.js
import api from "@/lib/axios";

export const restaurantServices = {
  async getRestaurantDetails() {
    try {
      const res = await api.get("/challenge/venue/9");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
};
