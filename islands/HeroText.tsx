import { IS_BROWSER } from "$fresh/runtime.ts"
import { useWindowSize } from "../hooks/useWindowSize.ts"
import ASCIIText from "../islands/ASCIIText.tsx"

const HeroText = ({ text }: { text: string }) => {
  if (!IS_BROWSER) return <div></div>

  const { width } = useWindowSize()
  const { s, h } = optsByWidth(width)

  return (
    <ASCIIText
      text={text}
      enableWaves={true}
      asciiFontSize={s}
      planeBaseHeight={h}
      textColor="rgb(252 231 243)"
    />
  )
}

const optsByWidth = (width: number) => {
  if (width <= 360) return { s: 6, h: 4.5 }
  if (width <= 560) return { s: 6, h: 6 }
  if (width <= 760) return { s: 6, h: 8 }
  if (width <= 960) return { s: 6, h: 10 }
  if (width <= 1160) return { s: 8, h: 14 }
  if (width <= 1360) return { s: 9, h: 16 }
  if (width <= 1560) return { s: 10, h: 18 }

  return { s: 11, h: 20 }
}

export default HeroText
