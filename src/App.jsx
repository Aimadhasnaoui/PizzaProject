import AppLayout from "./ui/AppLayout";
import Menu from "./feature/menu/Menu";
import SubmitOrder ,{Action as creatAction} from "./feature/order/SubmitOrder";
import Cart from "./feature/cart/Cart";
import Order from "./feature/order/Order";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
      { path: "/", element: <AppLayout />, 
        children:[
                { path: "/", element: <Menu />  },
                { path: "/cart", element: <Cart /> },
                {path: "/Addneworder", element: <SubmitOrder></SubmitOrder>, action:creatAction},
                {path: "/order", element: <Order></Order>}
        ]

      },
    ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
