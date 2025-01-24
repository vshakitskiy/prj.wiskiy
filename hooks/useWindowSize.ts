import { useEffect, useState } from "preact/hooks"

interface WindowSize {
  width: number
  height: number
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof globalThis.window !== "undefined"
      ? globalThis.window.innerWidth
      : 0,
    height: typeof globalThis.window !== "undefined"
      ? globalThis.window.innerHeight
      : 0,
  })

  useEffect(() => {
    if (typeof globalThis.window === "undefined") {
      return
    }

    const handleResize = () => {
      setWindowSize({
        width: globalThis.window.innerWidth,
        height: globalThis.window.innerHeight,
      })
    }

    globalThis.window.addEventListener("resize", handleResize)

    handleResize()

    return () => globalThis.window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}
