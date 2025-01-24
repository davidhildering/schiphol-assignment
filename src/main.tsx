import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'


// Defer the render until the mock service worker is ready
async function deferRender() {
    const {worker} = await import('./mocks/browser')
    return worker.start()
}

deferRender().then(() => {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <App/>
        </StrictMode>,
    );
});