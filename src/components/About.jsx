import React from 'react'
import { Icons } from '../Icons'

export const About = () => {
  return (
    <div className='w-1/2 py-24 max-h-screen flex flex-col justify-between'>
      <div>
        
        <h1>Ashutosh Anand</h1>
        <h2>Senior Software Engineer</h2>
        <p>I build reliable backends that power smooth and rapid web experience</p>
        
        <nav>
          <ul>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
          </ul>
        </nav>

      </div>

      {/* Social Media */}
      <ul className='flex items-center ml-1 mt-8'>
        <li className='mr-4'>
          <a href="https://github.com/ashutosh-aanand">{Icons.github}</a>
        </li>

        <li className='mr-4'>
          <a href="https://www.linkedin.com/in/ashutosh-anand1">{Icons.linkedin}</a>
        </li>


      </ul>
      
    </div>
  )
}
