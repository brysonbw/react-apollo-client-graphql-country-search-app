import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navagation from './components/Navagation';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com/'
  })


  return (
    <ApolloProvider client={client}>
    <div className="App">
       <Router>
      <Navagation />
      <Switch>

      <Route path='/' exact component={Home} />
      <Route path='/search' exact component={Search} />

      </Switch>

      </Router>
    </div>
    </ApolloProvider>
  );
}

export default App;
