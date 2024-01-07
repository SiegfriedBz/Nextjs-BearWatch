import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faHelicopter } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { SigninButton } from "./CustomButton"
import OpenHelpButton from "./OpenHelpButton"
import { Logo } from "./Logo"

const HomeFeatures = () => {
  return (
    <div className='flex flex-col space-y-4'>
      <div id='features-header'>
        <h2 className='mt-8 text-color text-center font-extrabold'>
          Bear Watch&apos;s Key Features
        </h2>
        <p>
          <span className='text-color font-semibold italic'>Bear Watch </span>is
          your ultimate companion for outdoor adventures. Whether you&apos;re an
          enthusiastic hiker, seasoned camper, or a nature lover, our app offers
          3 essential features to{" "}
          <span className='text-color font-semibold italic'>
            keep you safe and connected
          </span>
          .
        </p>
      </div>

      <div id='features-content' className='flex flex-col space-y-6'>
        <div>
          <Link
            href='/#map'
            className='h3 flex items-center space-x-2 font-bold'
          >
            <FontAwesomeIcon
              icon={faEye}
              className='rounded-full text-secondary dark:text-secondary-light'
            />
            <span className='text-color'>Bear Sighting Map</span>
          </Link>
          <p>
            <Link
              href='/#map'
              target='_self'
              className='text-color font-semibold italic underline underline-offset-[3px]'
            >
              View bear markers
            </Link>{" "}
            added by fellow hikers. Gain insights into recent bear sightings, so
            you can make informed decisions about your route and stay vigilant
            during your outdoor journey.
          </p>
        </div>

        <div>
          <h3 className='flex items-center space-x-2 font-bold'>
            <Logo
              smallLogo={true}
              className='h-6 w-6 bg-secondary dark:bg-secondary-light'
            />
            <span>Report Bear Encounters</span>
          </h3>
          <p>
            Share your experience and help create a bear encounters community to
            benefit all outdoor enthusiasts.
          </p>
          <ul className='ms-4 mt-4 list-decimal space-y-4'>
            <li>
              <p>
                <SigninButton
                  callbackUrl='/my-map'
                  className='text-color whitespace-nowrap font-semibold italic underline underline-offset-[3px]'
                >
                  Sign in
                </SigninButton>

                <span> with Google.</span>
              </p>
            </li>
            <li>
              <p>
                <span>To </span>
                <span className='text-color font-semibold italic'>add </span>or
                <span className='text-color font-semibold italic'>
                  {" "}
                  delete{" "}
                </span>
                <span className='text-color font-semibold italic'>
                  your own bear sights
                </span>
                <span>, visit </span>
                <SigninButton
                  callbackUrl='/my-map'
                  className='text-color font-semibold underline underline-offset-[3px]'
                >
                  your Map
                </SigninButton>
                .
              </p>
            </li>
          </ul>
        </div>

        <div>
          <OpenHelpButton className='h3 flex items-center space-x-2 font-bold'>
            <span className='flex h-6 w-6 items-center justify-center rounded-full bg-secondary dark:bg-secondary-light'>
              <FontAwesomeIcon
                icon={faHelicopter}
                className='rounded-full text-sm text-white dark:text-black'
              />
            </span>
            <span>Send SOS Message</span>
          </OpenHelpButton>

          <p>
            The{" "}
            <span className='text-color font-semibold italic'>
              {" "}
              Get Help feature
            </span>{" "}
            is your lifeline in emergencies. Quickly send your current location
            to a trusted friend, complete with your blood group information and
            a link to your precise coordinates on Google Maps. Stay connected
            and ensure a swift response when you require assistance.
          </p>
          <ul className='ms-4 mt-4 list-decimal space-y-4'>
            <li>
              <p>
                <SigninButton
                  callbackUrl='/my-profile'
                  className='text-color whitespace-nowrap font-semibold italic underline underline-offset-[3px]'
                >
                  Sign in
                </SigninButton>

                <span> with Google.</span>
              </p>
            </li>
            <li>
              <p>
                <Link
                  href='/my-profile'
                  target='_self'
                  className='text-color font-semibold italic'
                >
                  Update{" "}
                  <span className='underline underline-offset-[3px]'>
                    your Profile
                  </span>
                </Link>{" "}
              </p>
              <ul className='ms-8 list-disc'>
                <li>
                  <p>
                    <span className='font-light italic'>
                      Add{" "}
                      <span className='text-color font-semibold italic'>
                        a friend&apos;s Whatsapp number.{" "}
                      </span>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className='font-light italic'>
                      Add{" "}
                      <span className='text-color font-semibold italic'>
                        your blood group type.{" "}
                      </span>
                    </span>
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <span className='text-color font-semibold italic'>
                  Enable location access
                </span>{" "}
                <span>on your device.</span>
              </p>
            </li>
            <li>
              <p>
                <OpenHelpButton className='inline-flex items-center space-x-2'>
                  <span className='text-color font-semibold italic'>Click</span>
                  <span> the </span>
                  <span className='text-color font-semibold italic'>
                    Get Help button
                  </span>
                  <span className='flex h-6 w-6 items-center justify-center rounded-full bg-white ring-2 ring-warning'>
                    <FontAwesomeIcon
                      icon={faHelicopter}
                      className='rounded-full text-sm font-extrabold text-warning'
                    />
                  </span>
                </OpenHelpButton>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeFeatures
