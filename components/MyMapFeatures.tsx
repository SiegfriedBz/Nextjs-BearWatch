import HomeMapSwitches from "./HomeMapSwitches"
import MyMapSwitches from "./MyMapSwitches"

const MyMapFeatures = () => {
  return (
    <div id='my-profile-map' className='my-4 px-2'>
      <div className='flex flex-col w-full items-start justify-start'>
        <div className='flex w-full items-center justify-start space-x-32'>
          <HomeMapSwitches />
        </div>
        <div className='flex w-full items-center justify-start space-x-32'>
          <MyMapSwitches />
        </div>
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
              <span className='text-color font-semibold italic'>Filter </span>
              <span> to </span>
              <span className='text-color font-semibold italic'>
                show only your bear sights
              </span>
              .
            </p>
          </li>
          <li>
            <p>
              <span className='text-color font-semibold italic'>Switch</span> to{" "}
              <span className='text-color font-semibold italic'>
                edit mode,
              </span>
              <span> and </span>
            </p>
            <ul className='ms-4 list-disc space-y-2'>
              <li>
                <p className='text-left'>
                  <span className='text-color font-semibold italic'>
                    click on the map
                  </span>{" "}
                  <span> to </span>
                  <span className='text-color font-semibold italic'>
                    add a new bear sight
                  </span>
                  .
                </p>
              </li>
              <li>
                <p>
                  <span className='text-color font-semibold italic'>
                    click on a bear sight
                  </span>{" "}
                  <span> to </span>
                  <span className='text-color font-semibold italic'>
                    delete it
                  </span>
                  .
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MyMapFeatures
