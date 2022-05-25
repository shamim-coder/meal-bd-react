import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/details/` + meal.idMeal);
    };
    return (
        <div>
            <img src={meal.strMealThumb} alt="" />
            <h1 className="text-lg font-semibold mt-3">{meal.strMeal}</h1>
            <div className="flex justify-between my-3">
                <button onClick={handleDetails} className="bg-amber-400 hover:bg-amber-400/70 py-1 px-3 rounded font-semibold">
                    See Details
                </button>
                <Link className="bg-sky-400 hover:bg-sky-400/70 py-1 px-3 rounded font-semibold" to={"/details/" + meal.idMeal}>
                    See Details
                </Link>
            </div>
        </div>
    );
};

export default Meal;
