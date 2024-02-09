import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MealCategories from './components/MealCategories/MealCategories.jsx'
import Meals from './components/Meals/Meals.jsx'
import Meal from './components/Meal/Meal.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App></App>
	},
	{
		path: '/categories',
		element: <MealCategories></MealCategories>,
		loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
		children: [
			{
				path: 'meals/:name',
				element: <Meals></Meals>,
				loader: ({params}) => fetch(`www.themealdb.com/api/json/v1/1/filter.php?a=${params.name}`)
			},
		]
	},
	{
		path: '/random',
		element: <Meal></Meal>,
		loader: () => fetch('https://www.themealdb.com/api/json/v1/1/random.php')
	}
])
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>,
)
