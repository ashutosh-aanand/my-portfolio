import React from 'react'
import { Icons } from '../Icons'

export const About = () => {
  return (
    <div className='lg:w-1/2 lg:py-24'>
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
      <ul>
        <li>
          <a href="https://github.com/ashutosh-aanand">{Icons.github}</a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/ashutosh-anand1">{Icons.linkedin}</a>
        </li>

        
      </ul>

      


    </div>
  )
}
