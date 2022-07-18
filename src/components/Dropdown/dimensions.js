import { useState, useCallback, useLayoutEffect } from "react";

const getDimensions = element => element.getBoundingClientRect();

export function useDimensions(resposive = true) {
    const [dimensions, setDimensions] = useState(null);
    const [element, setElement] = useState(null);

    const hook = useCallback(e => setElement(e), []);

    useLayoutEffect(() => {
        if (element){
            const updateDimensions = () => {
                window.requestAnimationFrame(() =>{
                    setDimensions(getDimensions(element));
                });
            };

            updateDimensions();

            if(resposive){
                window.addEventListener('resize', updateDimensions);

                return () => {
                    window.removeEventListener('resize', updateDimensions);
                };
            }
        }
    }, [element, hook, resposive]);

    return [hook, dimensions, element]
}