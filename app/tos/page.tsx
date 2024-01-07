import Head from "next/head"
import PageLayout from "@/components/PageLayout"

const meta = {
  title: "Bear Watch | Terms of Service",
  description: "By using Bear Watch, you agree to our terms and conditions.",
}

const TosPage = () => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>

      <PageLayout>
        <div className='layout-gradient align-center flex flex-col space-y-4'>
          <h1 className='text-center'>Terms of Service</h1>

          <div className='px-2'>
            <p>
              By using Bear Watch, you agree to these terms and conditions:{" "}
            </p>
            <ul>
              <li>
                <h2>Registration</h2>
                <p>
                  You must provide accurate and complete information when
                  creating an account.
                </p>
              </li>
              <li>
                <h2>Privacy</h2>
                <p>
                  You agree to our Privacy Policy and how we collect, use, and
                  protect your data.
                </p>
              </li>
              <li>
                <h2>Emergency Services</h2>
                <p>
                  The{" "}
                  <span className='text-color font-semibold italic'>
                    Get Help feature
                  </span>{" "}
                  is intended for emergencies. You agree to use it responsibly.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </PageLayout>
    </>
  )
}

export default TosPage
