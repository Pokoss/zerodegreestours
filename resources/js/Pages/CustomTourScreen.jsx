import React from 'react'
import Layout from './Components/Layout'
import { Input, Textarea, Typography } from '@material-tailwind/react'

function CustomTourScreen() {
  return (
    <div>
      <section className="p-6">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6  rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
                        <div className="text-center">
                            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                            Custom<span className="text-primary"> Tours</span>
                            </h3>
                        </div>
                        <p className="my-5">
                          <Typography>
                        Craft your dream adventure with a custom tour tailored to your desires, where your journey is shaped by your unique interests, preferences, and pace. Whether it's wildlife safaris, cultural immersions, or off-the-beaten-path experiences, share your vision with us, and our expert team will meticulously design an exclusive itinerary just for you. Discover Uganda on your terms, and let your imagination be the guide to creating memories that will last a lifetime.
                          </Typography>
                        </p>
                        <form className="self-stretch ng-untouched ng-pristine ng-valid">
                            <div>
                                <div className='my-2'>
                                    <Input color="orange" label='Name' />
                                    
                                </div>
                                <div className='my-2'>
                                    <Input color="orange" label='Email'  />

                                </div>
                                <div className='my-2'>
                                    <Input color="orange" label='Phone' />

                                </div>
                                <div className='my-2'>
                                    <Textarea color="orange" label="Extra Details" />
                                  
                                </div>
                                <button type="submit" className="w-full py-2 font-semibold bg-primary text-white rounded ">Send Request</button>
                            </div>
                        </form>
                    </div>
                    <img src="/images/web/kidepo-valley-camping.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                </div>
            </section>
    </div>
  )
}
CustomTourScreen.layout = page => <Layout children={page} />


export default CustomTourScreen