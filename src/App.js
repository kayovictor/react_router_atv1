import React from "react";
import './app.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Musica } from "./Musica";
import { Cidade } from "./Cidade";

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/musica' exact component={Musica} />
          <Route path='/cidade' exact component={Cidade} />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
