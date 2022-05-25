import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header/Header";
import MealDetails from "./Components/MealDetails/MealDetails";
import NotFound from "./Components/NotFound";
import Restaurants from "./Components/Restaurants/Restaurants";

function App() {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Restaurants />} />
                <Route path="/details/:mealID" element={<MealDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/meals" element={<h1 className="text-5xl">This is Meals</h1>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
