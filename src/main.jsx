import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React Rotuer DOM:
import { BrowserRouter } from 'react-router-dom'
// Swiper React CSS:
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// React AOS CSS:
import 'aos/dist/aos.css';
// React Lazy Load Image CSS:
import 'react-lazy-load-image-component/src/effects/blur.css';
// React Query / Tanstack:
// Create a client:
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
