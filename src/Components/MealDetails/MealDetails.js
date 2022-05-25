import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetails = () => {
    const { mealID } = useParams();
    const [meal, setMeal] = useState({});
    console.log(meal);
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`).then((res) => setMeal(res.data.meals[0]));
    }, [mealID]);
    return (
        <div className="text-center">
            <img className="w-[550px] h-[400px] mx-auto object-cover" src={meal.strMealThumb} alt="" />
            <h1 className="text-3xl">{meal.strMeal}</h1>
            <p>{meal.strInstructions}</p>
        </div>
    );
};

export default MealDetails;
