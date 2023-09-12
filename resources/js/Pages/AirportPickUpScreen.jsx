import React from 'react'
import { Input, Textarea, Typography } from '@material-tailwind/react'
import Layout from './Components/Layout'

function AirportPickUpScreen() {
  return (
    <div>
            <div>
                <section className="p-6">
                    <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                        <div className="w-full px-6  rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
                            <div className="text-center">
                                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                                Airport<span className="text-primary"> Pickup</span>
                                </h3>
                            </div>
                            <Typography>

                            <p className="my-5">
                            Seamless airport pickups and drop-offs for your hassle-free travel experience. Arrive and depart with ease as our professional team ensures your comfort and convenience. Your journey begins or ends on a stress-free note with us. Fill in the form and we will get you started.
                            </p>
                            </Typography>
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
                    <img src="https://img.freepik.com/free-photo/place-flying-sunset-sky_1112-1132.jpg?w=740&t=st=1682675522~exp=1682676122~hmac=665559ecfe817fb6aa7a1ad36deaa7aad08429d638eac050444c36764589e1d9" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                </div>
            </section>
         
        </div>
    </div>
  )
}
AirportPickUpScreen.layout = page => <Layout children={page} />

export default AirportPickUpScreen