interface ProjectCardProps {
    title: string
    description: string
    technologies: string[]
    features: string[]
    githubUrl?: string
    liveUrl?: string
    status?: string
}

export default function ProjectCard({
    title,
    description,
    technologies,
    features,
    githubUrl,
    liveUrl,
    status,
}: ProjectCardProps) {
    return (
        <div className="card bg-base-100 shadow-xl mb-6">
            <div className="card-body">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h2 className="card-title text-xl font-bold text-primary">
                        {title}
                    </h2>
                    {status && (
                        <div className="badge badge-secondary badge-outline">
                            {status}
                        </div>
                    )}
                </div>

                <p className="text-base text-base-content mb-4 leading-relaxed">
                    {description}
                </p>

                <div className="mb-4">
                    <h3 className="font-semibold text-sm mb-2 text-base-content/80">
                        Technologies Used:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="badge badge-primary badge-outline"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold text-sm mb-2 text-base-content/80">
                        Key Features:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed">
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                className="text-sm text-base-content"
                            >
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="card-actions justify-end">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-sm"
                        >
                            GitHub
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
