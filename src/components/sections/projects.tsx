import ProjectCard from '@/components/projectCard'

const projects = [
    {
        title: 'Portfolio Website',
        description:
            'A modern, responsive portfolio website built with Next.js and DaisyUI. Features a clean design with sections for about me, work history, projects, and contact information.',
        technologies: [
            'Next.js',
            'React',
            'TypeScript',
            'DaisyUI',
            'Tailwind CSS',
        ],
        features: [
            'Responsive design that works on all devices',
            'Modern UI components with DaisyUI',
            'Server-side rendering with Next.js',
            'Clean and professional layout',
            'You are currently viewing this project!',
        ],
        githubUrl: '#',
        status: 'Active',
    },
    {
        title: 'Soomo Learning ISBN and Title Reorganization',
        description:
            "Updating existing ISBN and title data in Soomo Learning's database to match actual use cases. By collaborating with internal departments, we were able to restructure the data for improved data integrity and maximum productivity for our employees.",
        technologies: [
            'Ruby on Rails',
            'React',
            'JavaScript',
            'PostgreSQL',
            'RSpec',
        ],
        features: [
            'Project management and collaboration with internal teams',
            'Data integrity improvements',
            'Comprehensive test suite with RSpec',
        ],
        status: 'Professional Project',
    },
    {
        title: 'Insurance Carrier Worksite',
        description:
            'Custom Apache servlet-based website for registering and tracking existing users and policies.',
        technologies: ['Java', 'SQL', 'TypeScript', 'React'],
        features: [
            'Secure user data storage and persistence',
            'Enterprise-grade security measures',
            'User-friendly interface for policy management',
        ],
        status: 'Professional Project',
    },
    {
        title: 'Zelle Payment Integration',
        description:
            "A comprehensive payment processing integration that connects Zelle with IBM's payment platform using Enterprise Java Beans.",
        technologies: ['Java', 'Enterprise Java Beans', 'REST APIs'],
        features: [
            'Seamless Zelle payment processing',
            'Asynchronous Enterprise Java Beans architecture',
            'Real-time payment processing',
            'Zero downtime deployment strategy',
        ],
        status: 'Professional Project',
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-16">
            <div className="min-h-screen">
                <div className="px-24">
                    <h1 className="mt-24 text-2xl md:text-5xl font-bold underline decoration-primary underline-offset-4">
                        Projects
                    </h1>
                    <p className="text-lg md:text-xl py-6 mb-2">
                        A showcase of projects that demonstrate my expertise
                        across different technologies and domains, from web
                        applications to enterprise integrations.
                    </p>
                    <div className="max-w-4xl mx-auto">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                features={project.features}
                                githubUrl={project.githubUrl}
                                status={project.status}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
