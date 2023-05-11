import Events from "../pages/Events";
import Event from "../pages/Event";
import Login from "../pages/Login";
import About from "../pages/About";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Account from "../pages/Account";
import EditAccount from "../pages/EditAccount";
import UserListing from "../pages/UserListing";
import EditEvent from "../pages/EditEvent";
import CreateTickets from "../pages/CreateTickets";
import CreateEvent from "../pages/CreateEvent";
import EventTickets from "../pages/EventTickets";
import EnterEmail from "../pages/EnterEmail";
import ForgetString from "../pages/ForgetString";
import EnterPassword from "../pages/EnterPassword";

export const publicRoutes = [
    {path: '/events', element: <Events/>,},
    {path: '/events/:id', element: <Event/>,},
    {path: '/login', element: <Login/>,},
    {path: '/about', element: <About/>,},
    {path: '/', element: <Home/>,},
    {path: '/register', element: <Register/>,},
    {path: '/enter_email', element: <EnterEmail/>,},
    {path: '/forget_string', element: <ForgetString/>,},
    {path: '/enter_password', element: <EnterPassword/>,}
]
export const authorizedRoutes = [
    {path: '/account', element: <Account/>,},
    {path: '/account_edit', element: <EditAccount/>,}
]

export const adminRoutes = [
    {path: '/user_listing', element: <UserListing/>,},
    {path: '/edit_event/:id', element: <EditEvent/>,},
    {path: '/create_event', element: <CreateEvent/>,},
    {path: '/create_tickets/:id', element: <CreateTickets/>,},
    {path: '/all_tickets/:id', element: <EventTickets/>,}
]