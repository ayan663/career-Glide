import React from "react";

import rw from '../imgages/rwizard.jpeg';

import styles from "./Header.module.css";

function Header() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A Resume that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume easily without Latex.<span>It's free and easy</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={rw} alt="Resume" />
      </div>
    </div>

      {/* timestamp */}
      
<ol class="relative border-s border-gray-200 dark:border-gray-700 ml-10">                  
    <li class="mb-10 ms-6 ">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-blue-700 dark:text-white">Fill The Details</h3>
        
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Fill in all the detalis like Basic info,work experience,projects,etc.</p>
      
    </li>
    <li class="mb-10 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-blue-700 dark:text-white">Preview below the Page</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"></time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">you can easily see how your resume will look while filling the details </p>
    </li>
    <li class="ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-blue-700 dark:text-white">Download the Resume</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"></time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Download your Personal Resume Easily into your device.</p>
    </li>
</ol>



    </>
  );
}

export default Header;
