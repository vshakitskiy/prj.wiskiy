import ASCIIText from "../islands/ASCIIText.tsx"

export default function Home() {
  return (
    <div className="bg-[#070707] w-screen h-screen text-violet-200">
      <div className="mx-auto w-full h-full relative overflow-hidden">
      <ASCIIText
        text="wiskiy"
        enableWaves={true}
        asciiFontSize={18}
        planeBaseHeight={10}
        textColor="rgb(221 214 254)"
      />
      </div>
    </div>
  )
}
