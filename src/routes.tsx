import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@/pages/home'
import { Notes } from '@/pages/notes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/notes',
    element: <Notes />,
  },
])
