import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Sidebar } from './components/Sidebar';
import { Clients } from './pages/Clients';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Sidebar>
            <Route path="/" exact component={Clients} />
            <Route path="/teste" exact component={Clients} />
          </Sidebar>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
