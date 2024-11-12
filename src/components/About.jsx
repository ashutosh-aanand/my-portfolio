import React from 'react'
import { Icons } from '../Icons'

export const About = ({data}) => {
  return (
    <div className='w-1/2 py-24 max-h-screen flex flex-col justify-between'>
      <div>
        
        <h1 className='text-5xl font-bold tracking-tight text-slate-200'>
          {data.name}
        </h1>
        <h2 className='text-xl font-medium text-slate-200 mt-3 tracking-tight'>
          {data.role}
        </h2>
        <p className='mt-4 max-w-xs leading-normal'>
          {data.shortDescription}
        </p>
        
        <nav>
          <ul className='mt-16 w-max text-xs font-bold uppercase tracking-widest text-slate-500'>
            <li className='mt-3 hover:text-slate-300 transition-all'>
              <a href="#about">About</a>
            </li>
            <li className='mt-3 hover:text-slate-300 transition-all'>
              <a href="#experience">Experience</a>
            </li>
            <li className='mt-3 hover:text-slate-300 transition-all'>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>

      </div>

      {/* Social Media */}
      <ul className='flex items-center ml-1 mt-8'>
        <li className='mr-5 hover:text-slate-200 transition-all'>
          <a href={data.githubLink} target='_blank'>{Icons.github}</a>
        </li>

        <li className='mr-5 hover:text-slate-200 transition-all'>
          <a href={data.linkedInLink} target='_blank'>{Icons.linkedin}</a>
        </li>


      </ul>
      
    </div>
  )
}
