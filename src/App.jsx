// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import CitasLayout from "./pages/Citas/CitasLayout";
import CitasView from "./pages/Citas/CitasView";

function App() {
  return (
    <Routes>
     
      <Route path="/" element={<Navigate to="/citas" replace />} />

      <Route path="/citas" element={<CitasLayout />}>
        <Route index element={<Navigate to="tabla" replace />} />
        <Route path="agenda" element={<CitasView />} />
        <Route path="tabla" element={<CitasView />} />
        <Route path="graficos" element={<CitasView />} />
      </Route>

      
      <Route path="*" element={<Navigate to="/citas" replace />} />
    </Routes>
  );
}

export default App;