import React from 'react'
import { Card } from "flowbite-react";

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

import yourImage from './imgages/cover.png';
import jobf from './imgages/jobsearch.jpg';
import img2 from './imgages/img2.jpg';
import res from './imgages/res2.jpg';
import img3 from './imgages/img3.jpg';
import c from './imgages/c.jpg';




function Landing() {
  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="flex items-center">
          {/* Left side: Text */}
          <div className="mr-8">  {/* Adjust margin-right (mr-8) as needed */}
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Your Comprehensive
              </span>
              Employment Platform
            </h1>
            {/* hover:font-bold */}
            <p className="font-normal  max-w-lg text-3xl leading-loose text-gray-900 dark:text-white">
              CareerGLIDE is a platform where not only are jobs <span className="text-blue-600 dark:text-blue-500">hunting for you</span> but you are also gaining the crucial competencies necessary for such roles.
            </p>
          </div>

          {/* Right side: Image */}
          <div className="flex-shrink-0">
            <img src={img3} className="h-auto max-w-md" alt="Description" />
          </div>
        </div>
      </div>



      {/* cards  */}
      <div class="flex flex-row  space-x-4 ...">

        <div className="relative mx-auto bg-white bg-opacity-20 bg-cover bg-center max-w-xs">
          <img
            className="absolute h-full w-full object-cover"
            src={jobf} // Use the imported image here
            alt="Innovators"
          />
          <div className="text-white  flex items-center lg:w-1/2">
            <div className="bg-blue-600 bg-opacity-95 p-3 opacity-60 backdrop-blur-lg lg:p-12">
              <p className="mb-4 font-serif font-bold">Job Finder
              </p>
              <h2 className="font-serif text-4xl font-bold">Find suitable jobs as per your searching</h2>

            </div>
          </div>
        </div>

        <div className="relative mx-auto bg-white bg-opacity-20 bg-cover bg-center max-w-xs">
          <img
            className="absolute h-full w-full object-cover"
            src={img2} // Use the imported image here
            alt="Innovators"
          />
          <div className="text-white flex items-center lg:w-1/2">
            <div className="bg-blue-600 bg-opacity-95 p-3 opacity-60 backdrop-blur-lg lg:p-12">
              <p className="mb-4 font-serif font-bold">Upskill
              </p>
              <h2 className="font-serif text-4xl font-bold">Fill your gaps in skill with course suggestion</h2>
            </div>
          </div>
        </div>


        <div className="relative mx-auto bg-white bg-opacity-20 bg-cover bg-center max-w-xs ">
          <img
            className="absolute h-full w-full object-cover"
            src={res} // Use the imported image here
            alt="Innovators"
          />
          <div className="text-white flex items-center lg:w-1/2">
            <div className="bg-blue-600 bg-opacity-95 p-3 opacity-60 backdrop-blur-lg lg:p-12">
              <p className="mb-4 font-serif font-bold">Resume builder</p>
              <h2 className="font-serif text-3xl font-bold">Generate resume effortlessly and easily</h2>


            </div>
          </div>
        </div>
        <div className="relative mx-auto bg-white bg-opacity-20 bg-cover bg-center max-w-xs">
          <img
            className="absolute h-full w-full object-cover"
            src={c} // Use the imported image here
            alt="Innovators"
          />
          <div className="text-white flex items-center lg:w-1/2">
            <div className="bg-blue-600 bg-opacity-95 p-3 opacity-60 backdrop-blur-lg lg:p-12">
              <p className="mb-4 font-serif font-bold">Community
              </p>
              <h2 className="font-serif text-3xl font-bold">Share experiences, ask questions easily</h2>

            </div>
          </div>
        


        </div>
      </div>
      {/* link */}

      {/* <div class="bg-gradient-to-r from-blue-600 to-indigo-500">
        <div class="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-16 xl:py-28">
          <div class="flex flex-col items-center justify-between">
            <div class="">
              <div class="max-w-3xl">
                <h1 class="mb-6 text-center text-5xl font-light tracking-tight text-white sm:text-5xl lg:text-7xl">Easily improve <span class="my-1 inline-block font-serif font-bold text-white"> customer relations </span></h1>
                <p class="text-center text-base text-gray-100">Eager to begin the adventure? The time is now. Embark on this exciting journey with us.Your future is waiting.</p>
              </div>
              <form method="POST" action="#" class="mx-auto mt-12 mb-2 max-w-xl sm:rounded-xl sm:border sm:border-gray-100 sm:bg-white sm:p-2 sm:shadow">
                <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div class="relative text-gray-500 sm:w-7/12">
                    <label for="email" class="sr-only border-gray-300"></label>
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" class=""></path>
                      </svg>
                    </div>
                    
                  </div>

                  <button type="submit" class="group flex items-center justify-center rounded-xl bg-blue-700 px-6 py-4 text-white transition">
                    <span class="group flex w-full items-center justify-center rounded text-center font-medium">Free Trial</span>
                    <svg class="shrink-0 group-hover:ml-8 ml-4 h-4 w-4 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </form>

              <div class="divide-gray-300/30 mt-12 flex flex-col items-center justify-center space-y-3 text-sm text-gray-700 sm:flex-row sm:items-start sm:space-y-0 sm:divide-x">
                <div class="flex max-w-xs space-x-2 px-4">
                  <span class="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2.5 text-purple-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"></path>
                    </svg>
                  </span>
                  <p class="text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="flex max-w-xs space-x-2 px-4">
                  <span class="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2.5 text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"></path>
                    </svg>
                  </span>
                  <p class="text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div class="relative mt-20 hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
              </svg>
              <div class="w-fit mx-auto flex overflow-hidden rounded-3xl bg-orange-400" role="image-container"></div>
            </div>
          </div>
        </div>
      </div> */}


      {/* upcoming features*/}
      <section class="py-12 text-blue-900 sm:py-16 lg:py-20">
        <div class="relative mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <span class="absolute -right-5 -bottom-6 -z-10 hidden rounded-full bg-blue-500 p-6 text-9xl text-white opacity-20 sm:block">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" /></svg>
          </span>

          <div class="flex flex-col items-center">
            <div class="text-center">
              <p class="text-lg font-medium text-blue-600">What Users can expect from us </p>
              <h2 class="mt-4 text-3xl font-bold text-blue-900 sm:text-4xl xl:text-5xl">Upcoming Features</h2>
            </div>

            {/* <div class="order-3 mt-8 text-center md:mt-16">
              <button class="mb-20 rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">More reviews on TrustPilot</button>
            </div> */}

            <div class="relative mx-auto mt-20 grid max-w-lg grid-cols-1 gap-16 md:max-w-none md:grid-cols-2 lg:gap-20">
              <div class="flex flex-col border-l-2 border-b-8 pb-4 border-blue-900 shadow-blue-200">
                <div class="flex flex-1 flex-col justify-between px-5">
                  <div class="flex-1">
                    <p class="border-blue-500 text-xl font-black">Skill Gap page</p>

                    <blockquote class="mt-8 flex-1">
                      <p class="leading-relaxed text-blue-900">Fetched Coerce Link (AI Fetches Coerce)
                        Pathway (Beginner, Intermediate, Advance)
                        performance Tracker
                        Certificate Uploader
                        After Completion take Test
                        If pass the test Give Certificate
                      </p>
                    </blockquote>
                  </div>


                </div>
              </div>

              <div class="flex flex-col border-l-2 border-b-8 pb-4 border-blue-900 shadow-blue-200">
                <div class="flex flex-1 flex-col justify-between px-5">
                  <div class="flex-1">
                    <p class="border-blue-500 text-xl font-black">Job Seeker Dashboard</p>

                    <blockquote class="mt-8 flex-1">
                      <p class="leading-relaxed text-blue-900"> Name, Contact personal Details
                        --- LinkedIn Profile, X handle other Social media
                        --- Get Personalized Job Recommendation.</p>
                    </blockquote>
                  </div>

                  <div class="-mx-5 mt-8 py-1 pl-6">

                  </div>
                </div>
              </div>

              <div class="flex flex-col border-l-2 border-b-8 pb-4 border-blue-900 shadow-blue-200">
                <div class="flex flex-1 flex-col justify-between px-5">
                  <div class="flex-1">
                    <p class="border-blue-500 text-xl font-black">Enter your Skill</p>

                    <blockquote class="mt-8 flex-1">
                      <p class="leading-relaxed text-blue-900">Based on Skill particular Question set get Fetched 
                      User Give Test if Fail Redirect to Skill Gap
                       if pass redirect to Job </p>
                    </blockquote>
                  </div>

                  <div class="-mx-5 mt-8 py-1 pl-6">

                  </div>
                </div>
              </div>

              <div class="flex flex-col border-l-2 border-b-8 pb-4 border-blue-900 shadow-blue-200">
                <div class="flex flex-1 flex-col justify-between px-5">
                  <div class="flex-1">
                    <p class="border-blue-500 text-xl font-black">Job Recommendation Page
                    </p>

                    <blockquote class="mt-8 flex-1">
                      <p class="leading-relaxed text-blue-900">: Get Lists of Job (Ai fetched).</p>
                    </blockquote>
                  </div>
                </div>
                </div>
                <div class="flex flex-col border-l-2 border-b-8 pb-4 border-blue-900 shadow-blue-200">
                <div class="flex flex-1 flex-col justify-between px-5">
                  <div class="flex-1">
                    <p class="border-blue-500 text-xl font-black">Competency Diagnostic
                    </p>

                    <blockquote class="mt-8 flex-1">
                      <p class="leading-relaxed text-blue-900">Calculating user competency scores based on assessments, helping to identify skill gaps and provide personalized learning recommendations..</p>
                    </blockquote>
                  </div>
                </div>
                </div>


                <div class="flex flex-col border-l-2 border-b-8 pb-4 border-blue-900 shadow-blue-200">
                <div class="flex flex-1 flex-col justify-between px-5">
                  <div class="flex-1">
                    <p class="border-blue-500 text-xl font-black">Real Time Job Market Inseights
                    </p>

                    <blockquote class="mt-8 flex-1">
                      <p class="leading-relaxed text-blue-900">Interactive dashboards that provide insights into trending jobs, in-demand skills, and salary benchmarks based on user skill levels.</p>
                    </blockquote>
                  </div>
                </div>
                </div>






            </div>
            </div>
        </div>
      </section>




      {/* footer */}
      <Footer bgwhite>
        <div className="w-full">
          <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Brand Center</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="help center" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Discord Server</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* <div>
              <Footer.Title title="download" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">iOS</Footer.Link>
                <Footer.Link href="#">Android</Footer.Link>
                <Footer.Link href="#">Windows</Footer.Link>
                <Footer.Link href="#">MacOS</Footer.Link>
              </Footer.LinkGroup>
            </div> */}
          </div>
          <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>




      </Footer>




      

      {/* Design */}



    </>
  )
}

export default Landing
