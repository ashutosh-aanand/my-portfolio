import React from 'react'

export const Experience = () => {

  const experiences = [
    {
      period: {from: "June 2024", to: "Present"},
      company: "Paytm",
      role: "Senior Software Engineer",
      link: "",
      description: "Build and maintain critical components used to construct Paytm's backend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in our services.",
      skills: ["Java", "Springboot", "MySQL", "Redis", "Kafka", "Elasticsearch"]
    },
    {
      period:  {from: "June 2022", to: "May 2024"},
      company: "Paytm",
      role: "Software Engineer",
      link: "",
      description: "",
      skills: ["Java", "C++"]
    }
  ];

  return (
    <>
      <section id="experience" class="mt-24">
        <ol>
          {experiences.map(experience => (
            <li class="mb-12">
            <div class="grid grid-cols-8">
             
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
                
                <ul class="flex flex-wrap">
                  {experience.skills.map(skill => (
                    <li class="mr-1.5 mt-2">
                      <div class="px-3 py-1 bg-teal-400/10 leading-5 text-xs font-medium text-teal-300 rounded-full">
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
