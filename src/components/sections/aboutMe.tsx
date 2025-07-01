import WorkHistoryCard from '@/components/workHistoryCard'

const workHistory = [
    {
        companyName: 'Soomo Learning',
        companyDescription: 'Asheville, North Carolina, United States',
        totalDuration: 'February 2022 - March 2025',
        positions: [
            {
                jobName: 'Software Engineer',
                startDate: 'February 2022',
                endDate: 'March 2025',
                roles: [
                    'Developed microsites using Ruby on Rails and React to access an API monolith, ensuring a11y compliance and test driven development when possible.',
                    'Evaluated and implemented SOC 2 compliance measures to meet security standards.',
                    'Collaborated with other department teams to enhance user experience and optimize customer service ease.',
                ],
            },
        ],
    },
    {
        companyName: 'Paperless Solutions Group, Inc.',
        companyDescription: 'Gainesville, Florida, United States',
        totalDuration: 'August 2017 - February 2022',
        positions: [
            {
                jobName: 'Software Engineer',
                startDate: 'August 2017',
                endDate: 'February 2022',
                roles: [
                    'Developed and maintained Apache servlet based websites for custom solutions for Life Insurance carriers.',
                    'Utilized SQL to store and persist user data, ensuring data security and integrity.',
                    'Developed Java powered backends to drive frontend API requests, enhancing user experience and site performance.',
                ],
            },
        ],
    },
    {
        companyName: 'SCI Fusion360',
        companyDescription: 'Charlotte, North Carolina, United States',
        totalDuration: 'May 2016 - August 2017',
        positions: [
            {
                jobName: 'Staff Software Developer',
                startDate: 'May 2017',
                endDate: 'August 2017',
                roles: [
                    'Oversaw development and deployment of Zelle for IBM customers, collaborating with Level 3 support and clients.',
                    'Streamlined processes to clear obstacles and ensure successful rollout.',
                    'Implemented agile methodologies to enhance project efficiency and client satisfaction.',
                ],
            },
            {
                jobName: 'Associate Software Developer',
                startDate: 'May 2016',
                endDate: 'May 2017',
                roles: [
                    "Partially responsible for designing an integration for Zelle to integrate with IBM's payment processing platform.",
                    "Designed and implemented API suite with Java and Enterprise Java Beans for IBM's payment processing platform.",
                    'Ensured new data is successfully processed without interrupting existing clients.',
                ],
            },
        ],
    },
]

export default function AboutMe() {
    return (
        <section id="about-me" className="">
            <div className="min-h-screen">
                <div className="px-24">
                    <h1 className="mt-24 text-2xl md:text-5xl font-bold text-center underline decoration-primary underline-offset-4 w-fit">
                        About Me
                    </h1>
                    <p className="text-lg md:text-xl py-6 text-left">
                        With over 9 years of experience in the tech industry, I
                        have worked with a variety of technologies and
                        frameworks to deliver high-quality software solutions.
                        With experience in Ruby on Rails, React, Java,
                        TypeScript, and Node.js, I have a diverse skill set that
                        enables me to adapt to new challenges and deliver
                        results across a variety of technology stacks.
                    </p>
                    <div className="max-w-4xl mx-auto">
                        {workHistory.map((company, index) => (
                            <WorkHistoryCard
                                key={index}
                                companyName={company.companyName}
                                companyDescription={company.companyDescription}
                                positions={company.positions}
                                totalDuration={company.totalDuration}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
