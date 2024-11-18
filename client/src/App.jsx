import { Routes } from "react-router-dom"



function App() {


  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common component */}
      <h1>Header Component</h1>

      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<AuthLogin/>} />
          <Route path="register" element={<AuthRegister/>} />
        </Route>
      </Routes>

    </div>
  )
}

export default App;