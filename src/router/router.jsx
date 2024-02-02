import App from "../App";
import DashboardPage from "../modules/Dashboard/component/pages/DashboardPage";
import LogInPage from "../modules/Auth/pages/LogInPage";
import IncomeExpensesPage from "./../modules/Income-Expense/pages/IncomeExpensesPage";
const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/operations",
        element: <IncomeExpensesPage />,
      },
    ],
  },
]);
