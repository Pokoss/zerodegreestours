import React from 'react'
import Teamcard from './components/Teamcard'
import Layout from './Components/Layout'
import { Typography } from '@material-tailwind/react'

function AboutUsScreen() {


    const employees = [
        {
            'id': '1',
            'name': 'Nakakaka Mufessi',
            'title': 'Director of Operations',
            'image': '/images/web/blue-bird.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolorem, dolorum odit doloremque assumenda fugit voluptas reprehenderit, sapiente id asperiores sint distinctio culpa nesciunt voluptatem dignissimos obcaecati harum. Velit, quibusdam!',
            'facebook': '',
            "twitter": '',
            "linkedIn": ''
        },
        {
            'id': '2',
            'name': 'Kagwa Kafessi',
            'title': 'Director',
            'image': '/images/web/blue-bird.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolorem, dolorum odit doloremque assumenda fugit voluptas reprehenderit, sapiente id asperiores sint distinctio culpa nesciunt voluptatem dignissimos obcaecati harum. Velit, quibusdam!',
            'facebook': '',
            "twitter": '',
            "linkedIn": ''
        },
        {
            'id': '2',
            'name': 'Mulondo Yaffessi',
            'title': 'Managing Director',
            'image': '/images/web/blue-bird.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolorem, dolorum odit doloremque assumenda fugit voluptas reprehenderit, sapiente id asperiores sint distinctio culpa nesciunt voluptatem dignissimos obcaecati harum. Velit, quibusdam!',
            'facebook': '',
            "twitter": '',
            "linkedIn": ''
        },
        {
            'id': '2',
            'name': 'Komakech Gufessi',
            'title': 'Managing Director',
            'image': '/images/web/blue-bird.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolorem, dolorum odit doloremque assumenda fugit voluptas reprehenderit, sapiente id asperiores sint distinctio culpa nesciunt voluptatem dignissimos obcaecati harum. Velit, quibusdam!',
            'facebook': '',
            "twitter": '',
            "linkedIn": ''
        },

    ]


    return (


        <div>
            <div id="about" className="relative bg-white overflow-hidden">

                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100"></polygon>
                        </svg>

                        <div className="pt-1"></div>

                        <main className="mt-5 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h2 className="my-7 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                                    About Zero Degrees Tours and Travel
                                </h2>
                                <Typography>
                                    <p className='lg:pr-10'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque inventore fugit corrupti sapiente, ipsa cumque, ratione iure aperiam qui, ipsam nulla eius repellendus. Neque fugiat assumenda enim ullam molestias commodi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat magnam itaque aut odit sunt voluptas, suscipit, mollitia quidem, temporibus corporis minima labore earum hic at fuga vero enim sapiente ratione.
                                    </p>
                                </Typography>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/web/elephants.jpeg" alt="" />
                </div>
            </div>





            <div className="p-10 max-w-screen-lg mx-auto">
                <div className="text-center mb-4">
                    <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
                        THE TEAM
                    </p>
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-secondary">
                        Our<span className="text-primary"> Team</span>
                    </h3>
                </div>
                <div className="sm:grid grid-cols-2 gap-6 my-10">

                    {employees && employees.map((employee) => (

                        <Teamcard employee={employee} />
                    ))}


                </div>
            </div>








            {/*Start Frequently asked Questions section*/}
            <h3 className="w-full text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                Frequent<span className="text-primary"> Questions</span>
            </h3>
            <section className="bg-white">
                <div className="container px-6 py-12 mx-auto">


                    <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-8 md:grid-cols-2 xl:grid-cols-3">
                        <div>
                            <div className="inline-block p-3 text-white bg-primary rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700">What destinations in Uganda does Zero Degrees Tours and Travel cover?</h1>

                                <p className="mt-2 text-sm text-gray-500">
                                    Zero Degrees Tours and Travel covers a wide range of destinations in Uganda, including popular national parks like Bwindi Impenetrable National Park, Queen Elizabeth National Park, Murchison Falls National Park, and more. We also offer city tours in Kampala and cultural experiences in local communities.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white bg-primary rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700">Are your packages customizable?</h1>

                                <p className="mt-2 text-sm text-gray-500">
                                    Absolutely! We offer both pre-designed packages and fully customizable itineraries. If our pre-designed packages don't meet your specific requirements, our experienced team can tailor an itinerary to match your interests, preferences, and budget. Just let us know your preferences, and we'll create a unique and memorable journey just for you.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white bg-primary rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700">What types of vehicles do you offer for car hire?</h1>

                                <p className="mt-2 text-sm text-gray-500">
                                    We have a diverse fleet of well-maintained vehicles available for car hire, including sedans, SUVs, minibusses, and 4x4 vehicles suitable for safaris. Our vehicles are equipped with modern amenities and maintained to ensure your comfort and safety during your travels.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white bg-primary rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700">What is your cancellation policy?</h1>

                                <p className="mt-2 text-sm text-gray-500">
                                    Our cancellation policy may vary depending on the specific package or service booked. We recommend reviewing our terms and conditions or contacting our team directly for detailed information regarding cancellations, refunds, and any applicable fees.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white bg-primary rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700">Is travel insurance included in your packages?</h1>

                                <p className="mt-2 text-sm text-gray-500">
                                    No, travel insurance is not included in our packages. We highly recommend obtaining comprehensive travel insurance to protect yourself against unexpected events, including trip cancellations, medical emergencies, or lost luggage. Please ensure you have suitable travel insurance coverage before embarking on your journey.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white bg-primary rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700">How can I contact Zero Degrees Tours and Travel for further assistance or inquiries?</h1>

                                <p className="mt-2 text-sm text-gray-500">
                                    For further assistance or inquiries, you can reach our friendly team through various channels. You can fill out the contact form on our website, email us at info@zerodegreestours.com, or call us at +256-123-456-789. We'll be more than happy to assist you and provide any additional information you may need.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/*End Frequently asked section*/}

            <div className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Location</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Our Offices
                        </p>
                        {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis
                            in, accusamus quisquam.
                        </p> */}
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-900 text-white">
                                        {/* <!-- Heroicon name: globe-alt --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg>

                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        Address
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        Somewhere in kampala<br />
                                        Kampala, Uganda
                                    </dd>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-900 text-white">
                                        {/* <!-- Heroicon name: phone --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>

                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        Phone number
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        +256-123-456-789
                                    </dd>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-900 text-white">
                                        {/* <!-- Heroicon name: mail --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>

                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        Email
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        info@zerodegreestours.com
                                    </dd>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-900 text-white">
                                        {/* <!-- Heroicon name: clock --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        Working Hours
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        Monday -  Friday: 9am to 5pm<br />
                                        Saturday - 10am to 3pm<br />
                                        Sunday -  10am to 3pm
                                    </dd>
                                </div>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
AboutUsScreen.layout = page => <Layout children={page} />

export default AboutUsScreen