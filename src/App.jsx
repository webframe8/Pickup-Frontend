import Router from "./navigators/Router"
import { HelmetProvider } from "@vuer-ai/react-helmet-async"

function App() {

  return (
      <>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
      </>
  )
}

export default App
