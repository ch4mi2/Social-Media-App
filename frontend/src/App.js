import { BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and components
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
