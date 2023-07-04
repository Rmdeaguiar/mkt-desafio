import { useState } from 'react';

export function useAside() {
    const [aside, setAside] = useState(false);

    function handleModal(){
        setAside(!aside)
        console.log(aside)
      }

    return {
        aside,
        setAside,
        handleModal
    };
}

