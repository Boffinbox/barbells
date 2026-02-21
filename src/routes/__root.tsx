import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import DarkModeToggle from '../components/DarkModeToggle';

export const Route = createRootRoute({
    component: App
})

function App()
{
    /*!
    * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors
    * Licensed under the Creative Commons Attribution 3.0 Unported License.
    */
    const getPreferredTheme = () =>
    {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme)
        {
            return storedTheme
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const setTheme = (theme: string) =>
    {
        if (theme === 'auto')
        {
            document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
        }
        else
        {
            document.documentElement.setAttribute('data-bs-theme', theme)
        }
    }

    setTheme(getPreferredTheme())

    return (
        <>
            <DarkModeToggle />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    )
}