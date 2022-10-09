import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalContext";
import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import DashboardJobList from "../pages/DashboardJobList";
import DashboardForm from "../pages/DashboardForm";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import LayoutLanding from "../widget/LayoutLanding";
import NotFound from "../pages/NotFound";
import LayoutDashboard from "../widget/LayoutDashboard";
import DetailJob from "../pages/DetailJob";
import JobList from "../pages/JobList";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutLanding>
                <Home />
              </LayoutLanding>
            }
          />

          <Route
            path="/list-job-vacancy"
            element={
              <LayoutLanding>
                <JobList />
              </LayoutLanding>
            }
          />

          <Route
            path="/list-job-vacancy/:idData"
            element={
              <LayoutLanding>
                <DetailJob />
              </LayoutLanding>
            }
          />

          <Route
            path="/dashboard"
            element={
              <LayoutDashboard>
                <Dashboard />
              </LayoutDashboard>
            }
          />

          <Route
            path="/dashboard/list-job-vacancy"
            element={
              <LayoutDashboard>
                <DashboardJobList />
              </LayoutDashboard>
            }
          />

          <Route
            path="/dashboard/list-job-vacancy/form"
            element={
              <LayoutDashboard>
                <DashboardForm />
              </LayoutDashboard>
            }
          />

          <Route
            path="/dashboard/list-job-vacancy/:idData"
            element={
              <LayoutDashboard>
                <DashboardForm />
              </LayoutDashboard>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default RouterApp;
