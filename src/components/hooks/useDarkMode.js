
import React, {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('darkMode', false);

    useEffect(() => {
        const element = document.querySelector('body');
        if(value === true) { element.classList.remove('dark-mode')}
        
        else { element.classList.add('dark-mode')}
    }, [value])
    console.log(value.key);

    return [value, setValue];
}