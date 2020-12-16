import React from "react";
import { Route } from "react-router";
import "./App.css";
// import { AttachAuthHeader } from "./services/http";
// import { ProtectedRoute } from "./auth/protected-route";
import Main from "./components/Main";
import Dashboard from "./components/dashboardComponents/Dashboard";
import { EnterTrades } from "./components/formComponents/EnterTrades";

function App() {
  // const [isToken, setIsToken] = useState(false);
  //this sets a default auth header to axios;
  // AttachAuthHeader(setIsToken);

  return (
    <div className="App">
      <Route exact path="/" component={Main} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/enter-trades/:id?" component={EnterTrades} />
    </div>
  );
}

export default App;
