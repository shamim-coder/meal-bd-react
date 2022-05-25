import React from "react";

const SearchBox = ({ handleSearch, meals }) => {
    return (
        <div className="text-center">
            <hr />

            <input onChange={handleSearch} className="w-1/4 mt-5 mb-2" type="text" placeholder="Search for a meal..." />

            <div className="flex gap-5 justify-center mb-5">
                <p>
                    Total Meals: <strong>{meals ? meals.length : 0}</strong>{" "}
                </p>
                <p>
                    Total Ingredients: <strong>574</strong>{" "}
                </p>
                <p>
                    Images: <strong>283</strong>
                </p>
            </div>

            <hr />
        </div>
    );
};

export default SearchBox;
