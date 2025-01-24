import HeroText from "../islands/HeroText.tsx"

export default function Home() {
  return (
    <div className="bg-[#070707] text-pink-100">
      <div className="mx-auto flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
        <div className="w-full h-96 2xl:h-[30rem] relative">
          <HeroText text="wiskiy" />
        </div>
      </div>
      {
        /* <DecryptedText
        text="work in progress"
        animateOn="view"
        speed={100}
        maxIterations={10}
        sequential={true}
        revealDirection="start"
        className="font-bold font-polite text-6xl"
        encryptedClassName="font-bold font-polite text-6xl"
        parentClassName="w-fit"
      />
      18 10 rgb(221 214 254) */
      }
    </div>
  )
}
