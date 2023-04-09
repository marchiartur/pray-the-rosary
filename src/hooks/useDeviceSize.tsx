import { useEffect, useState } from 'react'

interface StateI {
  width: number
  height: number
}

const useDeviceSize = (): StateI => {
  const [state, setState] = useState({
    width: 0,
    height: 0
  })

  const handle = (): void => {
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

  return state
}

export default useDeviceSize
