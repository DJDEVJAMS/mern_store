import { Routes } from "react-router-dom"



function App() {


  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common component */}
      <h1>Header Component</h1>

      <Routes>
        <Routes path="/auth" element={<AuthLayout />}>
        </Routes>
      </Routes>

    </div>
  )
}

export default App;