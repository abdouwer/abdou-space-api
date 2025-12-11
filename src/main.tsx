import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Blog, HomeLayout, News, Home, ErrorMain } from './pages';
import { newsPageLoader } from './pages/News';
import { ErrorElement } from './components';
import { blogsPageLoader } from './pages/Blog';


const router = createBrowserRouter([
    { 
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorMain />,
        children: [
            { index: true, element: <Home />}, 
            { path: "news", element: <News />, loader: newsPageLoader, errorElement: <ErrorElement />}, // avant de lancer la page news on va lancer newsPaggeLoader
            { path: "blogs", element: <Blog />,  loader: blogsPageLoader, errorElement: <ErrorElement />},
        ],
    },
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router = {router} />);
