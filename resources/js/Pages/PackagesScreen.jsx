import React from 'react'
import Layout from './Components/Layout'
import Packages from './Components/Packages'
import { Link } from '@inertiajs/react'

function PackagesScreen() {
  const packages = [
    {
      'id': '1',
      'title': 'Western Special',
      'duration': '3 days',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
      'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
      "addons": ['Free photography', 'Free meals', 'Free tour guide']
    },
    {
      'id': '2',
      'title': 'Eastern Special',
      'duration': '3 days',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
      'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
      "addons": ['Free photography', 'Free meals', 'Free tour guide']
    },
    {
      'id': '3',
      'title': 'Northern Special',
      'duration': '3 days',
      'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
      "addons": ['Free photography', 'Free meals', 'Free tour guide']
    },

    {
      'id': '3',
      'title': 'Southern Special',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
      'duration': '3 days',
      'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
      "addons": ['Free photography', 'Free meals', 'Free tour guide']
    },
  ]
  return (
    <div>

      {/*Packages Section Section*/}
      {/* <div className="flex justify-center items-center h-screen">
      </div> */}
      <div className="pt-6 max-w-xl mx-auto text-center my-8 " data-aos='fade-down'>
        <div className="w-24 h-2 bg-primary mb-4 mx-auto "></div>
        <h3 className=" text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-secondary ">
          Our<span className="text-primary"> Packages</span>
        </h3>
      </div>
      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12" data-aos='slide-up'>
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 md:max-w-full sm:max-w-sm sm:mx-auto lg:max-w-full">
          {
            packages && packages.map((pack, index) => (
              // <Link key={index} href={`/packages/${pack.slug}`}>
              <Link key={index} href={`/packages/package-details`}>
                <Packages pack={pack} />
              </Link>
            ))
          }
        </div>



      </div>
      {/* End Package Section Section*/}
    </div>
  )
}

PackagesScreen.layout = page => <Layout children={page} />

export default PackagesScreen