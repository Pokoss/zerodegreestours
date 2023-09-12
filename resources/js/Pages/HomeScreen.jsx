import React from 'react'
import Layout from './Components/Layout'
import { Typography } from '@material-tailwind/react'
import { Link } from '@inertiajs/react'
import Packages from './Components/Packages'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import TestimonialCard from './Components/TestimonialCard'

function HomeScreen() {

  const mystyle = {
    backgroundAttachment: 'fixed',
    backgroundImage: 'url("/images/web/deer.jpg")'
  };

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

  const testimonials = [
    {
      'id': '1',
      'title': 'Very nice trip',
      'name': 'Kagwa Mike',
      'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
    },
    {
      'id': '2',
      'title': 'Am choosing Zero Degrees again, good service',
      'name': 'Mulondo Yafessi',
      'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
    },

  ]
  return (
    <div>

      {/* Hero Section */}
      <div className="relative">
        <div className='absolute inset-0 w-full'>

          <Splide options={{ autoplay: true, rewind: true, arrows: false }}>
            <SplideSlide>
              <img
                src="/Images/web/elephants.jpeg"
                className="h-[750px] object-cover w-full xl:h-[650px]"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="/Images/web/lake-mburo.jpg"
                className="h-[750px] object-cover w-full xl:h-[650px]"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="/Images/web/giraffe.jpg"
                className="h-[750px] object-cover w-full xl:h-[650px]"
                alt=""
              />
            </SplideSlide>
          </Splide>
        </div>
        <div className="relative h-[750px] xl:h-[650px]">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-center xl:flex-row">
              <div className="bg-black grid place-items-center mt-32 items-center bg-opacity-30 p-3 rounded-lg mb-12 xl:mb-0 xl:pr-16 xl:w-8/12 ">

                <h2 className="text-center max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none" data-aos='fade-down'>
                  Welcome To<br /><span className='text-primary'>Zero Degrees Tours and Travel</span>
                </h2>
                <Typography>
                  <p className="text-center max-w-xl mb-4 text-base text-gray-200 md:text-lg" data-aos='fade-up'>
                    Embark on an incredible journey in Uganda. Explore stunning landscapes, vibrant cultures, and unforgettable wildlife encounters. Let us be your trusted guides to an unforgettable adventure.
                  </p>
                </Typography>
                <Link
                  href="/aboutus"
                  aria-label=""
                  className="inline-flex bg-primary p-2 justify-center rounded-md items-center font-semibold tracking-wider transition-colors duration-200 text-white hover:text-teal-accent-700"
                  data-aos='fade-right'
                >
                  <Typography>
                    Learn more
                  </Typography>
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="white"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link>
              </div>

              {/* <div className="w-full max-w-xl xl:px-8 xl:w-5/12 opacity-70   hover:opacity-100">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10 " data-aos='zoom-in-left'>
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Book your perfect getaway trip
                  </h3>
                  <form onSubmit={handleSubmitContact}>
                    <div className='my-2'>
                      <Input color="green" label='Name' value={contactForm.data.name ?? ''} onChange={e => contactForm.setData('name', e.target.value)} />
                    </div>
                    <div className='my-2'>
                      <Input color="green" label='Email' value={contactForm.data.email ?? ''} onChange={e => contactForm.setData('email', e.target.value)} />
                    </div>
                    <div className='my-2'>
                      <Input color="green" label='Phone' value={contactForm.data.phone ?? ''} onChange={e => contactForm.setData('phone', e.target.value)} />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      >
                        Send
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      We look forword to planning your trip
                    </p>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/*End Hero Section*/}



      <div className="max-w-xl mx-auto text-center my-8" data-aos='fade-down'>
        <div className="w-24 h-2 bg-primary mb-4 mx-auto"></div>
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-secondary">
          Our<span className="text-primary"> Services</span>
        </h3>
      </div>

      {/*Mission Section*/}
      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="bg-white p-12 md:p-24 flex justify-end items-center">
          <a href="" data-aos='fade-right'>
            <img src="https://img.freepik.com/free-photo/handsome-elegant-man-car-salon_1157-30188.jpg?w=740&t=st=1682675591~exp=1682676191~hmac=3a79ca2e03342850b4ad7cc52504ff2617d17d4366b891d6fb412cd2ea7f0e1e" className="w-full max-w-md" />

          </a>
        </div>

        <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
          <div className="max-w-md" data-aos='fade-left'>
            <div className="w-24 h-2 bg-secondary mb-4"></div>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Car hires</h2>
            {/* <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed"> */}
            <Typography>
              Discover Uganda at your own pace with our reliable car hire services. Explore the beauty of this diverse country with the freedom to roam. Choose from our wide range of vehicles to make your journey seamless and memorable. Your adventure starts with us.
            </Typography>
            {/* </p> */}
            <Link href="/car-hire" className="mt-5 inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Contact for hire</Link>
          </div>
        </div>

      </div>

      {/* End Mission Section*/}

      {/* Vision Section Section*/}
      <div className="grid grid-cols-1 md:grid-cols-2">


        <div className="bg-white p-12 md:p-24 flex justify-start items-center">
          <a href="" data-aos='fade-left'>
            <img src="https://img.freepik.com/free-photo/place-flying-sunset-sky_1112-1132.jpg?w=740&t=st=1682675522~exp=1682676122~hmac=665559ecfe817fb6aa7a1ad36deaa7aad08429d638eac050444c36764589e1d9" className="w-full max-w-md" />
          </a>
        </div>

        <div className="md:order-first bg-gray-100 p-12 md:p-24 flex justify-end items-center">
          <div className="max-w-md" data-aos='fade-right'>
            <div className="w-24 h-2 bg-secondary mb-4"></div>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Airport Pickup & dropoffs</h2>
            {/* <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed"> */}
            <Typography>
              Seamless airport pickups and drop-offs for your hassle-free travel experience. Arrive and depart with ease as our professional team ensures your comfort and convenience. Your journey begins or ends on a stress-free note with us.
            </Typography>

            <Link href="/airportpickup" className="mt-5 inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Contact for Pickup</Link>
            {/* </p> */}
            {/* <a href="" className="inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Book Custom Package</a> */}
          </div>
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="bg-white p-12 md:p-24 flex justify-end items-center">
          <a href="" data-aos='fade-right'>
            <img src="https://c.ndtvimg.com/2022-04/b7792gq8_airflights_625x300_11_April_22.jpg" className="w-full max-w-md" />

          </a>
        </div>

        <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
          <div className="max-w-md" data-aos='fade-left'>
            <div className="w-24 h-2 bg-secondary mb-4"></div>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Air Ticket bookings</h2>
            {/* <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed"> */}
            <Typography>
              Unlock your next adventure with easy and reliable air ticket booking. We connect you to the world effortlessly, ensuring smooth journeys and unforgettable experiences. Your dreams take flight with our seamless booking services.
            </Typography>
            {/* </p> */}
            <Link href="/airticket-booking" className="mt-5 inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Contact for hire</Link>
          </div>
        </div>

      </div>

      {/* End Mission Section*/}

      {/* Vision Section Section*/}
      <div className="grid grid-cols-1 md:grid-cols-2">


        <div className="bg-white p-12 md:p-24 flex justify-start items-center">
          <a href="" data-aos='fade-left'>
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/416879572.jpg?k=f734a876252ada3eb7f62221d826c77dd70a36d378f056dd31b4f547fa5e9d23&o=&hp=1" className="w-full max-w-md" />
          </a>
        </div>

        <div className="md:order-first bg-gray-100 p-12 md:p-24 flex justify-end items-center">
          <div className="max-w-md" data-aos='fade-right'>
            <div className="w-24 h-2 bg-secondary mb-4"></div>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Hotel bookings</h2>
            {/* <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed"> */}
            <Typography>

              Discover your home away from home with our hassle-free hotel booking services. From luxury resorts to cozy boutique hideaways, we have your ideal stay covered. Your comfort and relaxation are our top priorities.
            </Typography>

            <Link href="/hotel-booking" className="mt-5 inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Contact to Book</Link>
            {/* </p> */}
            {/* <a href="" className="inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Book Custom Package</a> */}
          </div>
        </div>

      </div>

      {/* End Vision Section Section*/}







      {/*Packages Section Section*/}
      {/* <div className="flex justify-center items-center h-screen">
      </div> */}
      <div style={mystyle}>
        <div className="pt-6 max-w-xl mx-auto text-center" data-aos='fade-down'>
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
          <div className='flex w-full justify-center mr-3 mt-7'>
            <Link href="/packages" className="inline-block border-2 border-primary font-semibold text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">More Packages</Link>
          </div>

        </div>
      </div>
      {/* End Package Section Section*/}



      {/*Consultation  Section*/}
      <div className="max-w-xl mx-auto text-center my-8" data-aos='fade-down'>
        <div className="w-24 h-2 bg-primary mb-4 mx-auto"></div>
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-secondary">
          Custom<span className="text-primary"> Tours</span>
        </h3>
      </div>
      <div className='w-full'>
        <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Want to choose your own destinations?</h1>
              {/* <p class="my-4 text-gray-600 dark:text-gray-300"> */}
              <Typography>
                Craft your dream adventure with a custom tour tailored to your desires, where your journey is shaped by your unique interests, preferences, and pace. Whether it's wildlife safaris, cultural immersions, or off-the-beaten-path experiences, share your vision with us, and our expert team will meticulously design an exclusive itinerary just for you. Discover Uganda on your terms, and let your imagination be the guide to creating memories that will last a lifetime.
              </Typography>

              {/* </p> */}
              <Link href="/custom-tour" className="mb-5 mt-2 inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Book a custom Tour</Link>

            </div>
          </div>

          <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img class="object-cover w-full h-full max-w-2xl rounded-md" src="/images/web/jinja-bridge.jpeg" alt="glasses photo" />
          </div>
        </div>
      </div>

      {/*End consultation section*/}


      {/*Testimonials  Section*/}
      {testimonials && testimonials.length > 0 &&
        <div className="pt-6 max-w-xl mx-auto text-center" data-aos='fade-down'>
          <div className="w-24 h-2 bg-primary mb-4 mx-auto "></div>
          <h3 className=" text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-secondary ">
            People's<span className="text-primary"> Testimonies</span>
          </h3>
        </div>
      }

      <Splide options={{
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '1rem',
        autoplay: true,
        interval: 3000,
      }} className='mx-12 hidden md:block mb-4'>
        {
          testimonials && testimonials.map((testimonial, index) => (
            <SplideSlide key={index} >
              <TestimonialCard testimonial={testimonial} />
            </SplideSlide>
          ))
        }
      </Splide>

      <Splide options={{
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        autoplay: true,
        interval: 3000,
        arrows: false,
      }} className='mx-2 md:hidden'>
        {
          testimonials && testimonials.map((testimonial, index) => (
            <SplideSlide key={index} >
              <TestimonialCard testimonial={testimonial} />
            </SplideSlide>
          ))
        }
      </Splide>

      {/*End testimonial section*/}


    </div>
  )
}
HomeScreen.layout = page => <Layout children={page} />

export default HomeScreen