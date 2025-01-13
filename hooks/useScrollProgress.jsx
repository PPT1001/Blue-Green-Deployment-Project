import React, {useState, useEffect} from 'react';

function useScrollProgress() {
    const [completion, setCompletion] = useState(0)

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setCompletion(Number(currentProgress / scrollHeight).toFixed(2)*100);
            }
        }

        //Add event
        window.addEventListener('scroll', updateScrollCompletion);
        //Clear event
        return () => window.removeEventListener('scroll', updateScrollCompletion);
    }, []);
  return completion;
}

export default useScrollProgress;