import React from 'react'
import Layout from './Components/Layout'
import { Input, Textarea, Typography } from '@material-tailwind/react'

function HotelBookingsScreen() {
  return (
    <div>
        <section className="p-6">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6  rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
                        <div className="text-center">
                            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                            Hotel<span className="text-primary"> Bookings</span>
                            </h3>
                        </div>
                        <p className="my-5">
                            <Typography>

                        Discover your home away from home with our hassle-free hotel booking services. From luxury resorts to cozy boutique hideaways, we have your ideal stay covered. Your comfort and relaxation are our top priorities.
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
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/416879572.jpg?k=f734a876252ada3eb7f62221d826c77dd70a36d378f056dd31b4f547fa5e9d23&o=&hp=1" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                </div>
            </section>
    </div>
  )
}
HotelBookingsScreen.layout = page => <Layout children={page} />

export default HotelBookingsScreen