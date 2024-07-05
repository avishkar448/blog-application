import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext=createContext();

export const ThemeProvider=({children})=>{ 
    const [theme,setTheme]=useState('light')

    useEffect(()=>{ 
        const saveTheme=localStorage.getItem('theme')
        if(saveTheme){ 
            setTheme(saveTheme)
        }
    },[])

    useEffect(()=>{ 
        document.body.className=theme;
    },[theme])

    const toggleTheme=()=>{ 
        const newTheme=theme=== 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme',newTheme)
    }

    return( 
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}