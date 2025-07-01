import React from 'react'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../imgages/logo.jpg";
function navbar() {
  return (
   <>
   <Navbar fluid rounded>
      <Navbar.Brand>
        <img src= {logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Carrer Glide</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/Jobseeker">JobseekerDashboard</Navbar.Link>
        <Navbar.Link href="/Resumebuilder">Resume builder </Navbar.Link>
        <Navbar.Link href="/Dashboard">POST JOB </Navbar.Link>
        <Navbar.Link href="/Signin">Sign in</Navbar.Link>
        <Navbar.Link href="/joblist">Job Listing</Navbar.Link>
        <Navbar.Link href="/appli">Applicants</Navbar.Link>
        <Navbar.Link href="/parser">Parser</Navbar.Link>
        <Navbar.Link href="/JobInsightsDashboard">JobInsightsDashboard</Navbar.Link>
        {/* <Navbar.Link href="/Courses">Courses</Navbar.Link> */}
        <Navbar.Link href="/Meet">Meet</Navbar.Link>
        <Navbar.Link href="/Resuemeanalyser">ResumeAnalyser</Navbar.Link>
        <Navbar.Link href="/Udemy">RoadMap</Navbar.Link>
        <Navbar.Link href="/Newsletter">Newsletter</Navbar.Link>
        





      </Navbar.Collapse>
    </Navbar>
   </>
  )
}

export default navbar
