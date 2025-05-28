import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/home/HomePage";
import ErrorPage from "./pages/error/ErrorPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
          errorElement: <ErrorPage is404={false} />,
        },
        {
          path: "/home",
          element: <HomePage />,
          errorElement: <ErrorPage is404={false} />,
        },
        {
          path: "*",
          element: <ErrorPage is404={true} />,
          errorElement: <ErrorPage is404={false} />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <ErrorBoundary FallbackComponent={(props) => <ErrorPage {...props} />} />
    </RouterProvider>
  );
}
