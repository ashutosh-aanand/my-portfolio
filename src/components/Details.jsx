import React from 'react'
import { Experience } from './Experience'

const Details = () => {
  return (
    <div className='lg:w-1/2 lg:py-24'>
      
      <section id="about" className='scroll-mt-24'>
        <p class="mb-4">With over two years of experience as a backend software engineer, I focus on understanding and refining product requirements to ensure that each solution is both practical and valuable. Collaborating closely with teams, I work to bridge the gap between business needs and technical implementation, making sure every project has a solid foundation.</p>
        <p class="mb-4">I specialize in building backend systems that are designed for scalability, reliability, and speed. I prioritize performance and resilience, developing systems that can handle heavy loads and scale smoothly as user demand grows. Crafting these solutions requires a mix of creativity and technical rigor, which I bring to every project I work on.</p>
        <p class="mb-4">I work with a variety of tools and technologies, including Kafka, Cassandra, MySQL, Redis, and Elasticsearch. These tools help me build robust and adaptable systems that can meet diverse needs across different environments. I’m constantly learning and experimenting with new tools to improve the efficiency and adaptability of my solutions.</p>
        <p>Outside of work, I enjoy spending time on competitive programming to sharpen my skills. I also love watching anime, working out, and helping out with household tasks. Staying active and engaged in my interests outside of work helps me return to my projects with a fresh perspective and renewed focus.</p>
      </section>

      <Experience/>

    </div>
  )
}

export default Details