import { Routes, Route } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import Home from "./pages/Home";
import React, {Suspense} from "react";

const About = React.lazy(()=> import ("./pages/About"));  // React.lazy only works with default
const Contact = React.lazy(()=> import("./pages/Contact"));
const NoPage = React.lazy(()=> import("./pages/NoPage"));

const App = () => {
  return (
    <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            
            <Route index element={<Home />} />

            <Route path="about" element={
              <Suspense fallback="....Loading">
                <About />
              </Suspense>
            } />

            <Route path="contact" element={
              <Suspense fallback="....Loading">
                <Contact />
              </Suspense>
            } />

            <Route path="*" element={
              <Suspense fallback="....Loading">
                <NoPage />
              </Suspense>
            } />

          </Route>
        </Routes>
    </div>
  );
};

export default App;
