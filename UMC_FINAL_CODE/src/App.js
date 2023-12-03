// App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Redux의 Provider 추가
import store from './redux/store/store'; // Redux store import
import Header from './Components/Header';
import Celebrity from './pages/Celebrity';
import Home from './pages/Home';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Tv from './pages/TV';
import MovieDetail from './pages/MovieDetail';
import Login from './pages/login';

function App() {
  return (
    <div className="root-wrap">
      <Provider store={store}> {/* Provider로 store 제공 */}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/movie/:title" element={<MovieDetail />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/person" element={<Celebrity />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
