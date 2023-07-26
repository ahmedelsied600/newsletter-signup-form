import "./App.css";
import Container from "./Components/Container";
import MainPage from "./pages/MainPage";
import SuccessfullySubmittedPage from "./pages/SuccessfullySubmittedPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const router2 = createBrowserRouter([
    {
      path: "/",
      element: <Container />,
      children: [
        { path: "", element: <MainPage /> },
        { path: "submitted", element: <SuccessfullySubmittedPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router2} />;
}

export default App;
