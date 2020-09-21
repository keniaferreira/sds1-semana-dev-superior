import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Records from './pages/Records';
import Charts from './pages/Charts';

const Routes = () =>(
    <BrowserRouter>
        <Header />
        <switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/records">
                <Records />
            </Route>
            <Route path="/charts">
                <Charts />
            </Route>
        </switch>
    </BrowserRouter>
    
);

export default Routes;