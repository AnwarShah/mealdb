import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MealCategories from './components/MealCategories/MealCategories.jsx'
import Meals from './components/Meals/Meals.jsx'
import Meal from './components/Meal/Meal.jsx'
import ErrorRoute from './components/ErrorRoute/ErrorRoute.jsx'
import NoCategories from './components/NoCategories/NoCategories.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App></App>,
		errorElement: <ErrorRoute></ErrorRoute>,
	},
	{
		path: 'categories',
		element: <MealCategories></MealCategories>,
		loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
	},
	{
		path: 'categories/:name',
		element: <Meals></Meals>,
		errorElement: <NoCategories></NoCategories>,
		loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`)
	},
	{
		path: 'categories/:meal_id',
		element: <Meal></Meal>,
		loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i={params.meal_id}`)
	}
])
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>,
)
