import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
  

  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default Body;
// body is the parent component and routing is happening inside the body component. Whenever we have to navigate, we can only navigate inside the children of the RouterProvider. Navigate will only work inside the appRoute routes. Navigate function will only work for example: inside Login and all the children of Login ........ So i will use the useEffect inside the routerProvider and in a central place which is always there. So the best place is header component. Header will always be present on my website
