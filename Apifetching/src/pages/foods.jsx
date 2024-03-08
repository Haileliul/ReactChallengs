import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import FoodController from "../controller/foodController";
const foods = () => {
  const FoodQuery = useQuery({
    queryKey: ["foods"],
    queryFn: FoodController.fetchData(),
  });

  if (FoodQuery.isLoading) {
    return <p> The data is still loading </p>;
  }
  if (FoodQuery.isError) {
    // console.log(Error);
    return <p>It is an error </p>;
  }
  return (
    <div>
      {FoodQuery.data.map((item) => {
        return <p>{item.strCategory}</p>;
      })}
    </div>
  );
};

export default foods;
