import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './store/store.jsx'
import { Provider } from 'react-redux'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from "@vercel/analytics/react"
import './index.css'
import ErrorBoundary from './pages/errorBoundary/ErrorBoundary.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ErrorBoundary>
            <App />
            <SpeedInsights />
            <Analytics/>
        </ErrorBoundary>
    </Provider>
)
