import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GenerateProvider } from "./context/GenerateContext";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import SelectTemplate from "./pages/SelectTemplate";
import EnterContent from "./pages/EnterContent";
import ReviewEmail from "./pages/ReviewEmail";
import Success from "./pages/Success";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GenerateProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/generate/select-template"
            element={
              <Layout>
                <SelectTemplate />
              </Layout>
            }
          />
          <Route
            path="/generate/enter-content"
            element={
              <Layout>
                <EnterContent />
              </Layout>
            }
          />
          <Route
            path="/generate/review-email"
            element={
              <Layout>
                <ReviewEmail />
              </Layout>
            }
          />
          <Route
            path="/generate/success"
            element={
              <Layout>
                <Success />
              </Layout>
            }
          />
        </Routes>
      </GenerateProvider>
    </BrowserRouter>
  );
};
export default App;
