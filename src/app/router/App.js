import { Route, Routes } from "react-router-dom";

import { NotFoundPage, SingInPage, SingUpPage, MainPage } from "../../pages";

function App() {
  console.log("Succses!");

  return (
    <Routes>

        <Route exact path="/" element={<MainPage />} />
        
        <Route path="/signin" element={<SingInPage />} />
        <Route path="/signup" element={<SingUpPage />} />  
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>        
  );
}

export default App;
