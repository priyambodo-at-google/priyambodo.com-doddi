/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/6AHWv61KiIj
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Chivo } from 'next/font/google'
import { Rubik } from 'next/font/google'

chivo({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Badge } from "@/components/ui/badge"

export function Component() {
  return (
    <div className="w-full">
      <section className="w-full py-20 md:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Doddi Priyambodo</h1>
            <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">Solutions Consultant, Google Cloud SEA</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
            Doddi Priyambodo is an IT pro with ~20 years of experience as a customer and consultant. He has worked at international companies such as Google, AWS, VMware, and IBM. Currently he is the Gen AI Ambassador and Google Partner Solutions Consultant at Google Cloud South East Asia. Doddi specializes in AI, data analytics and dedicated to providing real value to customers. He is known for his customer-centric mindset which he believes is key to his works.
            </p>
          </div>
          <div className="flex justify-end">
            <img
              alt="John Doe"
              className="rounded-full w-64 h-64 object-cover"
              height={300}
              src="https://bicarait.com/wp-content/uploads/2024/06/Doddi-Priyambodo-2023-scaled.jpg"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width={300}
            />
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32">
        <div className="container px-4 md:px-6 grid gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Professional Experience</h2>
            <div className="grid gap-8">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Solutions Consultant, Google</h3>
                  <span className="text-gray-500 dark:text-gray-400">2021 - Present</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                Accelerate your transformation with Google Cloud. Build apps faster, make smarter business decisions, and connect people anywhere.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Solutions Architect, Amazon</h3>
                  <span className="text-gray-500 dark:text-gray-400">2018 - 2021</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                Amazon Web Services (AWS) is a secure cloud services platform, offering compute power, database storage, content delivery and other functionality to help businesses scale and grow. Explore how millions of customers are currently leveraging AWS cloud products and solutions to build sophisticated applications with increased flexibility, scalability and reliability.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Cloud Architect and Consultant ASEAN, VMware</h3>
                  <span className="text-gray-500 dark:text-gray-400">2014 - 2018</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                The ideal architecture for private, public, and hybrid clouds. Pioneered by VMware and recognized by the industry and analysts alike.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Solutions Architect for IBM PureFlex, IBM</h3>
                  <span className="text-gray-500 dark:text-gray-400">2012 - 2014</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                IBM® PureFlex™ System is a complete, flexible cloud infrastructure system with integrated expertise. The system integrates and optimizes all compute, storage and networking resources to deliver infrastructure-as-a-service (IaaS) out of the box.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">ICON+, PLN</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                Software Developer, Database Administrator, Project Manager, IT Enterprise Architect, Technical Leader, Scrum Master, Development Manager
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Professional Certification</h2>
            <div className="grid gap-8">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Google Cloud</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">– GCP Certified Professional Data Engineer</p>
                <p className="text-gray-600 dark:text-gray-400">– GCP Certified Professional Machine Learning Engineer</p>
                <p className="text-gray-600 dark:text-gray-400">– GCP Certified Professional Security Engineer</p>
                <p className="text-gray-600 dark:text-gray-400">– GCP Certified Professional Solutions Architect</p>
                <p className="text-gray-600 dark:text-gray-400">– GCP Certified Associate Solutions Architect</p>
                <p className="text-gray-600 dark:text-gray-400">– GCP Certified Cloud Digital Leader</p>       
              </div>
            </div>
            <div className="border-gray-300 dark:border-gray-700 my-4" /> <div className="grid gap-8"></div>
            <div className="grid gap-8">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Amazon Web Services</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">– AWS Certified Big Data Specialist</p>
                <p className="text-gray-600 dark:text-gray-400">– AWS Certified Solutions Architect Professional</p>
                <p className="text-gray-600 dark:text-gray-400">– AWS Certified Solutions Architect Associate</p>
                <p className="text-gray-600 dark:text-gray-400">– AWS Certified Solutions Developer Associate</p>
                <p className="text-gray-600 dark:text-gray-400">– AWS Certified Solutions SysOps Administrator Associate</p>
                <p className="text-gray-600 dark:text-gray-400">– AWS Certified Cloud Practitioner</p>       
              </div>
            </div>
            <div className="border-gray-300 dark:border-gray-700 my-4" /> <div className="grid gap-8"></div>
            <div className="grid gap-8">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">VMware Cloud</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">– VMware: vExpert Pro</p>
                <p className="text-gray-600 dark:text-gray-400">– VMware: vExpert 2016 & vExpert 2017</p>
                <p className="text-gray-600 dark:text-gray-400">– VMware: VCAP5-DCD (VMware Cloud Advanced Professional – Data Center Design)</p>
                <p className="text-gray-600 dark:text-gray-400">– VMware: VCP6-CMA/CLOUD (VMware Cloud Professional – Cloud Management Automation)</p>
                <p className="text-gray-600 dark:text-gray-400">– VMware: VCP6-NV (VMware Cloud Professional – Network Virtualization)</p>
                <p className="text-gray-600 dark:text-gray-400">– VMware: VCP5-DCV (VMware Cloud Professional – Data Center Virtualization)</p>
                <p className="text-gray-600 dark:text-gray-400">– VMware: VTSP5 – VMware Cloud Technical Sales Professional 5</p>
                <p className="text-gray-600 dark:text-gray-400">– VMware: VSP5 – VMware Cloud Sales Professional 5</p>
              </div>
            </div>
            <div className="border-gray-300 dark:border-gray-700 my-4" /> <div className="grid gap-8"></div>
            <div className="grid gap-8">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">IBM</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">– IBM: IBM Certified Specialist – Cloud PureFlex Systems Sales V2</p>
                <p className="text-gray-600 dark:text-gray-400">– IBM: IBM Certified Specialist – Cloud PureFlex Technical Sales V2</p>
                <p className="text-gray-600 dark:text-gray-400">– IBM: IBM Certified System Expert – Cloud PureFlex Technical Expert V1</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Badge variant="secondary">Google Cloud Platform</Badge>
              <Badge variant="secondary">Amazon Web Services</Badge>
              <Badge variant="secondary">VMware Cloud</Badge>
              <Badge variant="secondary">I am a Story Teller</Badge>
              <Badge variant="secondary">Startup Advisor</Badge>
              <Badge variant="secondary">PreSales & PostSales Consultant</Badge>
              <Badge variant="secondary">Scrum Agile</Badge>
              <Badge variant="secondary">Servant Leadership</Badge>
              <Badge variant="secondary">Chief Technical Officer (CTO)</Badge>
              <Badge variant="secondary">Artificial Intelligence</Badge>
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">Generative AI</Badge>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Contact</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Badge variant="secondary">doddi@priyambodo.com *</Badge>
              <Badge variant="secondary">doddi@bicarait.com</Badge>
              <Badge variant="secondary">doddi.priyambodo@gmail.com</Badge>
              <Badge variant="secondary">https://www.bicarait.com</Badge>
              <Badge variant="secondary">https://www.priyambodo.com</Badge>
              <Badge variant="secondary">https://doddipriyambodo.medium.com</Badge>
              <Badge variant="secondary">https://github.com/priyambodo-at-google</Badge>
              <Badge variant="secondary">https://www.linkedin.com/in/doddipriyambodo</Badge>
              <Badge variant="secondary">https://www.instagram.com/doddipriyambodo</Badge>
            </div>
          </div>
          "Kindness is a language which the deaf can hear and the blind can see" ~ Mark Twain
        </div>
      </section>
    </div>
  )
  
}