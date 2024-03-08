// FoodList.jsx

import React, { useState, useEffect } from "react";
import FoodController from "./apiController";

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [newFoodName, setNewFoodName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await FoodController.fetchData();
      setFoods(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleAddFood = async () => {
    try {
      const newFood = { name: newFoodName };
      await FoodController.createFood(newFood);
      setNewFoodName("");
      fetchData();
    } catch (error) {
      console.error("Error adding food:", error.message);
    }
  };

  const handleDeleteFood = async (id) => {
    try {
      await FoodController.deleteFood(id);
      fetchData();
    } catch (error) {
      console.error("Error deleting food:", error.message);
    }
  };

  return (
    <div>
      <h1>Food List</h1>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            {food.name}
            <button onClick={() => handleDeleteFood(food.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newFoodName}
          onChange={(e) => setNewFoodName(e.target.value)}
          placeholder="Enter food name"
        />
        <button onClick={handleAddFood}>Add Food</button>
      </div>
    </div>
  );
};

export default FoodList;
