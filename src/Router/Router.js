import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import About from "../components/Pages/About";
import ContactUs from "../components/Pages/ContactUs/ContactUs";
import Projects from "../components/Pages/Projects/Projects";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/projects',
                element: <Projects></Projects>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>,
            },
        ]
    }
]);

export default router;