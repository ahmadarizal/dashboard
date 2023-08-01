import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./pages/AllApps";
import Authentication from "./pages/Authentication";
import Settings from "./pages/Settings";

// submenu
import Auth from "./layouts/sidebar/DropdownBuild/Auth";
import AppSettings from "./layouts/sidebar/DropdownBuild/AppSettings";
import Stroage from "./pages/Stroage";
import Hosting from "./layouts/sidebar/DropdownBuild/Hosting";
import Dashboard from "./layouts/sidebar/DropdownAnalytics/Dashboard";
import Realtime from "./layouts/sidebar/DropdownAnalytics/Realtime";
import Event from "./layouts/sidebar/DropdownAnalytics/Event";

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<AllApps />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/stroage" element={<Stroage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/build/auth" element={<Auth />} />
          <Route path="/build/app settings" element={<AppSettings />} />
          <Route path="/build/stroage" element={<Stroage />} />
          <Route path="/build/hosting" element={<Hosting />} />
          <Route path="/analytics/dashboard" element={<Dashboard />} />
          <Route path="/analytics/Realtime" element={<Realtime />} />
          <Route path="/analytics/event" element={<Event />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
