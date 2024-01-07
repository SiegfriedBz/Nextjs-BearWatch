import HomeMapSwitches from "./HomeMapSwitches"

import Link from "next/link"

const HomeMapFeatures = () => {
  return (
    <div className='my-4 px-2'>
      <div className='flex w-full items-center justify-start space-x-32'>
        <HomeMapSwitches />
      </div>

      <div className='py-4'>
        <p>Toggle the switches to enable the map features.</p>
        <ul className='ms-4 mt-2 list-disc space-y-4'>
          <li>
            <p>
              <span className='text-color font-semibold italic'>Filter </span>
              <span> to show only</span>
              <span className='font-semibold italic text-warning dark:text-warning-light'>
                {" "}
                last week
              </span>
              <span> bear sights.</span>
            </p>
          </li>
          <li>
            <p>
              <span className='text-color font-semibold italic'>Center </span>
              the
              <span className='text-color font-semibold italic'>
                {" "}
                map on you
              </span>
              <span className='text-sm'>
                {" "}
                (requires device access to your location).
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>To </span>
              <span className='text-color font-semibold italic'>
                access all map features
              </span>
              <span>, sign in and visit </span>
              <Link
                href='/my-map'
                className='text-color font-semibold underline underline-offset-[3px]'
              >
                your Map
              </Link>
              .
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomeMapFeatures
