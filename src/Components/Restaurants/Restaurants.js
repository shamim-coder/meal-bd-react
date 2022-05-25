import axios from "axios";
import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import SearchBox from "../SearchBox/SearchBox";
import Welcome from "../Welcome/Welcome";

const Restaurants = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleSearch = (event) => setSearchText(event.target.value);

    useEffect(() => {
        if (searchText) {
            axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`).then((res) => setMeals(res.data.meals));
        } else {
            axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=m`).then((res) => setMeals(res.data.meals));
        }
    }, [searchText]);

    return (
        <div>
            <Welcome />
            <SearchBox meals={meals} handleSearch={handleSearch} />
            {meals ? (
                <div className="grid grid-cols-4 gap-10">
                    {" "}
                    {meals.map((meal) => (
                        <Meal key={meal.idMeal} meal={meal} />
                    ))}{" "}
                </div>
            ) : (
                <h1 className="text-3xl text-center">No Meal Found</h1>
            )}
        </div>
    );
};

export default Restaurants;
