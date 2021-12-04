import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link } from 'react-router-dom';

import CreateComponent from './components/Create.component';
import EditComponent from './components/Edit.component';
import IndexComponent from './components/Index.component';

function App() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">CRUDApp</a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/index" className="nav-link" >Index</Link>
            </li>
            <li class="nav-item">
              <Link to="/create" className="nav-link" >Create</Link>
            </li>
          </ul>
        </div>
      </nav>
        <Switch>
          <Route path="/index" component={IndexComponent}/>
          <Route exact path="/create" component={CreateComponent}/>
          <Route path="/edit/:id" component={EditComponent}/>
        </Switch>
    </div>
  );
}

export default App;