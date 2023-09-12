import React from 'react'
import Layout from './Components/Layout'
import { Input, Textarea, Typography } from '@material-tailwind/react'

function AirticketBookingScreen() {
  return (
    <div>
        <section className="p-6">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6  rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
                        <div className="text-center">
                            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                            Airticket<span className="text-primary"> Bookings</span>
                            </h3>
                        </div>
                        <p className="my-5">
                            <Typography>

                        Unlock your next adventure with easy and reliable air ticket booking. We connect you to the world effortlessly, ensuring smooth journeys and unforgettable experiences. Your dreams take flight with our seamless booking services.
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
                    <img src="https://c.ndtvimg.com/2022-04/b7792gq8_airflights_625x300_11_April_22.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                </div>
            </section>
    </div>
  )
}
AirticketBookingScreen.layout = page => <Layout children={page} />

export default AirticketBookingScreen