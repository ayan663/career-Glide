import React from 'react';
import Navbar from '../Navbar/navbar';
import reci from "../imgages/Jobseeker2.jpeg"

function DashJobseeker() {
    return (
        <>
            <Navbar />

            <div className="flex flex-wrap text-slate-800">
                <div className="relative hidden min-h-screen select-none flex-col justify-center bg-slate-600 text-center md:flex md:w-1/3">
                    <img src={reci} className="h-auto max-w-md object-cover" alt="Description" />
                    <div className="mx-auto py-16 px-8 text-white">
                        <p className="my-6 text-4xl font-bold leading-10">Welcome <span className="truncate border-b-8 border-yellow-400 font-bold text-yellow-400">Jobseeker</span></p>
                        <p className="mb-4 text-lg font-medium">Your career journey starts here</p>
                    </div>
                </div>
                <div className="flex w-full flex-col md:w-2/3">
                    <div className="flex justify-center pt-12 md:justify-start md:pl-12">
                        <a href="#" className="text-2xl font-bold text-gray-800 bg-yellow-400 px-2 py-1">CareerGlide</a>
                    </div>
                    <div className="my-auto flex max-w-screen-md flex-col justify-center px-6 md:pl-12 pt-8 sm:pt-0 md:justify-start">
                        <p className="text-center text-3xl font-bold md:text-left">Profile Setup</p>

                        <form className="flex flex-col items-stretch pt-3 pb-8 md:pt-8">
                            <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
                                <label className="block" htmlFor="name">
                                    <p className="mb-1 mt-2 text-sm text-gray-600">Name</p>
                                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2" type="text" placeholder="Enter your name" />
                                </label>
                                <label className="block" htmlFor="contact">
                                    <p className="mb-1 mt-2 text-sm text-gray-600">Contact Number</p>
                                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2" type="tel" placeholder="Enter your contact number" />
                                </label>
                                <label className="block" htmlFor="email">
                                    <p className="mb-1 mt-2 text-sm text-gray-600">Email Address</p>
                                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2" type="email" placeholder="Enter your email address" />
                                </label>
                                <label className="block" htmlFor="address">
                                    <p className="mb-1 mt-2 text-sm text-gray-600">Street Address</p>
                                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2" type="text" placeholder="Enter your address" />
                                </label>
                                <label className="block" htmlFor="linkedin">
                                    <p className="mb-1 mt-2 text-sm text-gray-600">LinkedIn Profile</p>
                                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2" type="url" placeholder="Enter your LinkedIn profile URL" />
                                </label>
                                <label className="block" htmlFor="xhandle">
                                    <p className="mb-1 mt-2 text-sm text-gray-600">X Handle (formerly Twitter)</p>
                                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2" type="text" placeholder="Enter your X handle" />
                                </label>
                                <label className="block" htmlFor="resume">
                                    <p className="mb-1 mt-2 text-sm text-gray-600">Upload Resume</p>
                                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2" type="file" />
                                </label>
                                <label className="block" htmlFor="social-media">
                                    <p className="mb-1 mt-2 text-sm text-gray-600">Other Social Media Links</p>
                                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2" type="text" placeholder="Enter other social media links" />
                                </label>
                            </div>

                            <div className="block">
                                <label className="inline-block text-sm text-gray-500" htmlFor="">
                                    By clicking Submit you agree to the <a className="underline" href="#">Terms and Conditions</a>
                                </label>
                            </div>
                            <button type="submit" className="mt-6 rounded-full bg-yellow-400 px-4 py-2 text-center text-base font-semibold shadow-md outline-none ring-yellow-500 ring-offset-2 transition hover:bg-yellow-400 focus:ring-2 md:w-40">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashJobseeker;
