import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Sidebar } from './components/Sidebar';
import { Clients } from './pages/Clients';
import { NewClient } from './pages/NewClient';
import { Requests } from './pages/Requests';
import { NewRequest } from './pages/NewRequest';
import { Costs } from './pages/Costs';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Sidebar>
            <Route path="/clients" exact component={Clients} />
            <Route path="/new/client" exact component={NewClient} />
            <Route path="/requests" exact component={Requests} />
            <Route path="/new/request" exact component={NewRequest} />
            <Route path="/costs" exact component={Costs} />
          </Sidebar>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
