import React from "react";
import mealIcon from "../../Images/meal-icon.png";
import paypalImg from "../../Images/download.svg";
const Welcome = () => {
    return (
        <div className="grid grid-cols-12">
            <img className="col-span-2 w-full" src={mealIcon} alt="" />
            <div className="col-span-8 text-center self-center">
                <h1>Welcome to TheMealDB</h1>
                <p>
                    Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world. We also offer a{" "}
                    <a className="text-yellow-600 hover:text-yellow-800" href="https://www.themealdb.com/api.php">
                        free JSON API
                    </a>{" "}
                    for anyone wanting to use it, with additional features for subscribers.
                </p>

                <button className="my-2 inline-flex justify-center items-start gap-x-2 duration-200 bg-yellow-400 hover:opacity-80 px-6 py-2 rounded-md text-xs">
                    <img className="w-14" src={paypalImg} alt="" /> Subscribe
                </button>
                <p>Click to Support $2 per month (cancel anytime)</p>
                <p>Currently 750 supporters</p>
            </div>
            <img className="col-span-2 w-full" src={mealIcon} alt="" />
        </div>
    );
};

export default Welcome;
