import { useRoutes } from 'react-router-dom';
import Login from './components/Login';
import route from './routes';

function App() {
  return (
    useRoutes(route)
  );
}

export default App;
