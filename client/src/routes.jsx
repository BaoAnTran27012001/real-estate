import { Newspaper } from "lucide-react";
import App from "./App";
import { pathname } from "./lib/pathname";
import { Homepage, PublicLayout, RentProperties, SoldProperties } from "./pages/publics";

const routes = [
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:pathname.publics.layout,
        element:<PublicLayout/>,
        children:[
          {
            path:pathname.publics.homepage,
            element:<Homepage/>
          },
          {
            path:pathname.publics.news,
            element:<Newspaper/>
          },
          {
            path:pathname.publics.rentProperties,
            element:<RentProperties/>
          },
          {
            path:pathname.publics.soldProperties,
            element:<SoldProperties/>
          },
        ]
      }
    ]
  }
]
export default routes;