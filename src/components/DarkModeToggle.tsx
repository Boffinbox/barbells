import { useState } from 'react';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

function DarkModeToggle()
{
    let storedTheme = localStorage.getItem("theme")
    if (storedTheme == null)
    {
        storedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const [theme, setTheme] = useState(storedTheme);
    localStorage.setItem('theme', theme)

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () =>
    {
        setIsHover(true);
    };
    const handleMouseLeave = () =>
    {
        setIsHover(false);
    };

    const toggleTheme = () =>
    {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', theme)
        setTheme(newTheme);
    };

    const buttonContainer = {
        background:
            theme === "light" ?
                isHover ? "#666666" : "#444444"
                :
                isHover ? "#ffffff" : "#dddddd",
        width: "32px",
        height: "32px",
        borderRadius: "25%",
        border: "3px solid grey",
        position: "absolute",
        marginLeft: "5px",
        marginTop: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2px",
        cursor: "pointer",
    } as React.CSSProperties;

    const iconStyles = {
        width: "100%",
        height: "100%",
        transform: "translate(0px, -1px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    } as React.CSSProperties;

    return (
        <button
            style={buttonContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleTheme}
            type='button'
            aria-description='Dark Mode Toggle'
        >
            <div style={iconStyles}>
                <div style={{ display: theme === "light" ? "block" : "none" }}>
                    <MoonIcon />
                </div>
                <div style={{ display: theme === "dark" ? "block" : "none", }}>
                    <SunIcon />
                </div>
            </div>
        </button>
    );
}

export default DarkModeToggle;