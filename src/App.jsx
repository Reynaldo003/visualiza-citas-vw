// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import CitasLayout from "./pages/Citas/CitasLayout";
import CitasView from "./pages/Citas/CitasView";

function App() {
  return (
    <Routes>
      {/* Redirige la raíz a /citas */}
      <Route path="/" element={<Navigate to="/citas" replace />} />

      <Route path="/citas" element={<CitasLayout />}>
        <Route index element={<CitasView />} />
      </Route>

      {/* Cualquier ruta desconocida, redirige a /citas */}
      <Route path="*" element={<Navigate to="/citas" replace />} />
    </Routes>
  );
}

export default App;