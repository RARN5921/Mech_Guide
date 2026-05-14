import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import VisualAdvisor from './pages/VisualAdvisor';
import SelectionEngine from './pages/SelectionEngine';
import CADLibrary from './pages/CADLibrary';
import MaterialOptimizer from './pages/MaterialOptimizer';
import CommerceConnector from './pages/CommerceConnector';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="visual-advisor" element={<VisualAdvisor />} />
          <Route path="selection-engine" element={<SelectionEngine />} />
          <Route path="cad-library" element={<CADLibrary />} />
          <Route path="material-optimizer" element={<MaterialOptimizer />} />
          <Route path="commerce-connector" element={<CommerceConnector />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
