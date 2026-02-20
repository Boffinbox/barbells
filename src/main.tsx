import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Barbells } from './barbells'
import "@fontsource/inter"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Barbells />
    </StrictMode>,
)
