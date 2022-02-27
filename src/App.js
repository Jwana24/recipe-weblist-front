// modules
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import NewRecipe from './components/NewRecipe/NewRecipe';
import RecipeList from './components/RecipeList/RecipeList';
import Header from './components/Header/Header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/nouvelle-recette" element={<NewRecipe />} />
                <Route exact path="/" element={<RecipeList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
