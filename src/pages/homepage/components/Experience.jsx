import React from 'react'

export const Experience = () => {

  const experiences = [
    {
      period: {from: "June 2024", to: "Present"},
      company: "Paytm",
      role: "Senior Software Engineer",
      link: "",
      description: "Orchestrated the backfill of 500 million+ transaction records, ensuring accuracy in a system powered by Kafka, Cassandra, and MySQL. Led optimizations that reduced monthly service calls by 50%, improved latency by 15ms, cut infrastructure costs by 26%, and increased throughput by 29%. Reduced service-to-service transfer size by 75%, implemented production monitoring, and supported newly joined interns, senior engineers and tech leads in understanding the system.",
      skills: ["Java", "Kafka", "Cassandra", "MySQL", "Redis", "Distributed Systems", "Performance Optimization", "Monitoring & Alerting", "Mentorship"]
    },
    {
      period:  {from: "June 2022", to: "May 2024"},
      company: "Paytm",
      role: "Software Engineer",
      link: "",
      description: "Developed a system to generate over 500 banners concurrently from CSV input, leveraging multithreading and OpenCSV. Responsibilities included implementing distributed locking for exclusive process execution within a distributed system. Contributed to alerting and monitoring using Grafana and Prometheus, collaborating with stakeholders and engineers to clarify requirements and ensure seamless integration and UAT.",
      skills: ["Java", "OpenCSV", "Multithreading", "Distributed Systems", "Grafana", "Prometheus", "Requirement Analysis", "System Integration"]
    },
    {
      period: { from: "Jan 2022", to: "June 2022" },
      company: "Paytm",
      role: "Software Engineering Intern",
      link: "",
      description: "Worked on integrating product search functionality into Paytm’s Electronic Data Capture (EDC) machine, enhancing usability for digital payments. Boosted test coverage using JUnit and Mockito to improve software reliability and collaborated cross-functionally to gather requirements and design system architecture.",
      skills: ["Java", "JUnit", "Mockito", "Integration Testing", "Requirement Gathering", "System Architecture"]
    },
    {
      period: { from: "June 2021", to: "Sept 2021" },
      company: "Prepbytes",
      role: "Technical Content Engineer Intern",
      link: "",
      description: "Created educational content and resources for software development placement prep at Prepbytes. Collaborated on tutorials, blogs, and problem-solving strategies, while mentoring students in competitive programming and interview preparation.",
      skills: ["Competitive Programming", "Mentoring", "C++", "Blogging", "Educational Content Creation", "Problem Solving"]
    },
    {
      period: { from: "Jan 2021", to: "Apr 2021" },
      company: "Eko India Financial Services",
      role: "Software Engineer Intern",
      link: "",
      description: "Developed a full-stack website to facilitate financial transactions via API integration, with a dashboard displaying detailed merchant transaction statistics. This solution accelerated API demos and product launches, streamlining organizational workflows.",
      skills: ["JavaScript", "HTML", "CSS", "API Integration", "Dashboard Development", "Data Visualization", "Full-Stack Development"]
    }    
  ];

  return (
    <>
      <section id="experience" class="mt-24 scroll-mt-24">
        <ol>
          {experiences.map((experience, key) => (
            <li class="mb-12" key={key}>
            <div class="grid grid-cols-8 
                        p-4 hover:bg-slate-800/50 hover:drop-shadow-md rounded-lg transition-all">
             
              <header class="col-span-2 text-xs font-semibold text-slate-500 tracking-wide uppercase mb-2 mt-1">
                {experience.period.from} - {experience.period.to}
              </header>
             
              <div class="col-span-6 pl-2">
                <h3 class="font-medium leading-snug text-slate-200">
                    {experience.role} - {experience.company}
                </h3>
                <p class="mt-2 text-sm leading-normal">
                  {experience.description}
                </p>
                
                <ul class="flex flex-wrap mt-2">
                  {experience.skills.map((skill, k) => (
                    <li class="mr-1.5 mt-2" key={k}>
                      <div class="px-2 py-1/2 bg-teal-400/10 leading-5 text-xs font-medium text-teal-500 rounded-full">
                        {skill}
                      </div>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </li>
          ))}

        </ol>
      </section>
    </>
  )
}
