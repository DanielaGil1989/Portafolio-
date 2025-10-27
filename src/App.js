import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>

    </Router>
  );
}

export default App;
