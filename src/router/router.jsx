import App from "../App";
import DashboardPage from "../modules/Dashboard/component/pages/DashboardPage";
import LogInPage from "../modules/Auth/pages/LogInPage";
import SettingsPage from "../modules/Settings/pages/SettingsPage";
import { ErrorPage } from "./ErrorModule/errorPage";
import BudgetPage from "../modules/Budget/pages/BudgetPage";
import Trasactions from "../modules/Transactions/pages/TransactionsPage";
const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/login",
        element: <LogInPage />,
      },
      {
        path: "/transactions",
        element: <Trasactions/>
      },
      {
        path: "/budget",
        element: <BudgetPage/>,
      },
      {
        path: "/setings",
        element: <SettingsPage />,
      },
    ],
  },
]);
