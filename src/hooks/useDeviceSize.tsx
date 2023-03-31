import { useEffect, useState } from 'react'

const useDeviceSize = () => {

    const [state, setState] = useState({
        width: 0,
        height: 0
    });

    const handle = () => {
        setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }


    useEffect(() => {
        handle()
        window.addEventListener('resize', handle)

        return () => {
            window.removeEventListener('resize', handle)
        }
    }, [])

    return state;
}

export default useDeviceSize