import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './pages/nav';
import Home from './pages/home';
import CreateIdea from './pages/createIdea';
import BrowseIdeas from './pages/browseIdeas';

export default function Routes(){
    
    return(
        <>
            <Nav />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/create" component={CreateIdea} />
                    <Route path="/browse" component={BrowseIdeas} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

/*

*/