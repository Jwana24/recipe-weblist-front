// modules
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import NewRecipe from './components/NewRecipe/NewRecipe';
import RecipeList from './components/RecipeList/RecipeList';
import Header from './components/Header/Header';

function App() {
    return (
        <Router>
            <Switch>
                <>
                    <Header />
                    <Route path="/nouvelle-recette" component={NewRecipe} />
                    <Route exact path="/" component={RecipeList} />
                </>
            </Switch>
        </Router>
    );
}

export default App;
