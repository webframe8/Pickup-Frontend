import Router from "./navigators/Router";
import "./assets/styles/Global.scss";
import Alert from "./components/Alert/Alert";
import { useLocation } from "react-router";
import { useEffect } from "react";
import ProgressLoader from "./components/Loader/ProgressLoader";
import { useLoader } from "./contexts/LoaderContext";
import { useNavigate } from "react-router";
import { useAlert } from "./contexts/AlertContext";

function App() {
  const { alert, clearAlert, showAlert } = useAlert();
  const location = useLocation();
  const { progresLoading, hideProgresLoader } = useLoader();
  const navigate = useNavigate();

  useEffect(() => {
    hideProgresLoader();
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e) => {
      showAlert({ type: "info", message: e.detail });
      navigate("/login");
    };

    window.addEventListener("session-expired", handler);
    return () => window.removeEventListener("session-expired", handler);
  }, []);
  return (
    <>
      {progresLoading && (
        <ProgressLoader
          colors={[
            "#ffdd55",
            "#fb5246",
            "#fb5246",
            "#ffdd55",
            "#c837ab",
            "#c837ab",
          ]}
          angle={120}
        />
      )}
      {alert && (
        <Alert
          type={alert?.type}
          message={alert?.message}
          onClose={clearAlert}
        />
      )}
      <Router />
    </>
  );
}

export default App;
