import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MealCategories from './components/MealCategories/MealCategories.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App></App>
	},
	{
		path: '/categories',
		element: <MealCategories></MealCategories>,
		loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
	}
])
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>,
)
