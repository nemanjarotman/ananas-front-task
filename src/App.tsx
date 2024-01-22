import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import PostList from './pages/PostList'
import PostDetails from './pages/PostDetails'
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/posts" element={<PostList />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/*" element={<Navigate to="/posts" replace />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
