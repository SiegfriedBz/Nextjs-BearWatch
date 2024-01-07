import Hero from "@/components/Hero"
import HomeFeatures from "@/components/HomeFeatures"
import HomeMapFeatures from "@/components/HomeMapFeatures"
import MapView from "@/components/MapView"

export default function Home() {
  return (
    <div className='layout-gradient'>
      <Hero />

      <section id='sub-hero' className='flex flex-col space-y-4'>
        <div id='features' className='scroll-mt-20 px-4'>
          <HomeFeatures />
        </div>

        <hr />

        <div id='map' className='scroll-mt-24 px-2'>
          <h2 className='text-center font-bold'>Bear Sighting Map</h2>

          <MapView />
          <HomeMapFeatures />
        </div>
      </section>
    </div>
  )
}
