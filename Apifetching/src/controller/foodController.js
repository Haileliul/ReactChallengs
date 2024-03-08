// apiController.js

import axios from "axios";
import FoodModel from "../model/foodmodel";

const BASE_URL = "https://api.example.com";

class FoodController {
  static async fetchData() {
    try {
      const response = await axios.get(`${BASE_URL}/data`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }
  // ========With the model ==============
  static async fetchData() {
    try {
      const response = await axios.get(`${BASE_URL}/data`);
      // Map the response data to FoodModel objects
      const foods = response.data.map(
        (food) => new FoodModel(food.id, food.name)
      );
      return foods;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }
  // =================Without model =============
  static async createFood(newFood) {
    try {
      const response = await axios.post(`${BASE_URL}/foods`, newFood);
      return response.data;
    } catch (error) {
      throw new Error("Failed to create food");
    }
  }

  // =================With model ====================

  static async createFood(newFood) {
    try {
      const response = await axios.post(`${BASE_URL}/foods`, newFood);
      // Convert the response data to FoodModel object
      return new FoodModel(response.data.id, response.data.name);
    } catch (error) {
      throw new Error("Failed to create food");
    }
  }

  // ======================with out model====================

  static async updateFood(foodId, updatedFood) {
    try {
      const response = await axios.put(
        `${BASE_URL}/foods/${foodId}`,
        updatedFood
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to update food");
    }
  }
  // =========================With model=====================
  static async updateFood(foodId, updatedFood) {
    try {
      const response = await axios.put(
        `${BASE_URL}/foods/${foodId}`,
        updatedFood
      );
      // Convert the response data to FoodModel object
      return new FoodModel(response.data.id, response.data.name);
    } catch (error) {
      throw new Error("Failed to update food");
    }
  }

  // ===========================with out model======================
  static async deleteFood(foodId) {
    try {
      const response = await axios.delete(`${BASE_URL}/foods/${foodId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to delete food");
    }
  }

  // =====================with model===========================
  static async deleteFood(foodId) {
    try {
      await axios.delete(`${BASE_URL}/foods/${foodId}`);
    } catch (error) {
      throw new Error("Failed to delete food");
    }
  }
}

export default FoodController;
