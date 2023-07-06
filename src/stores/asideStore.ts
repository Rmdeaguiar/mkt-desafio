import { useState } from 'react';

export function useAside() {
    const [aside, setAside] = useState(false);

    function handleModal(){
        setAside(!aside)
      }

    return {
        aside,
        setAside,
        handleModal
    };
}

