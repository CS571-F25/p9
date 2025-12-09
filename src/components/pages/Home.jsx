import { LinkButton } from '@/components/LinkButton'
import globePNG from '@/assets/globe.png'
import '@/App.css'

export function Home() {
  return (
    <div className="stretch-provider flex-row items-center justify-center gap-10 bg-gradient-to-br from-[#50a050] to-[#7098d8]">
      <img className="align-middle h-[650px] w-auto" src={globePNG} alt="globeIMG" />
      <div className="flex flex-col items-center gap-4 max-w-[50%]">
        <div className="flex flex-row items-center justify-center">
        <h1 className="m-2">Globe Getter</h1>
        </div>
        <hr className="border-4 border-black w-[80%]" />
        <span>
          Explore the world through an interactive 3D globe, where you can rotate, zoom, and click on countries to instantly access key facts and cultural highlights. Search or browse nations via a side panel, seamlessly linking data with the globe for a visually engaging experience. Discover new places, learn about their geography, economy, and culture, all through an intuitive and dynamic interface.
        </span>
        <LinkButton url="/explore" label="Get Started" internal />
      </div>
    </div>
  )
}
