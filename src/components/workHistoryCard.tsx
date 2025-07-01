interface Position {
    jobName: string
    startDate: string
    endDate: string
    roles: string[]
}

interface WorkHistoryCardProps {
    companyName: string
    companyDescription: string
    positions: Position[]
    totalDuration?: string
}

export default function WorkHistoryCard({
    companyName,
    companyDescription,
    positions,
    totalDuration,
}: WorkHistoryCardProps) {
    return (
        <div className="card bg-base-100 shadow-xl mb-6">
            <div className="card-body">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h2 className="card-title text-xl font-bold text-primary">
                        {companyName}
                    </h2>
                    {totalDuration && (
                        <div className="badge badge-secondary badge-outline">
                            {totalDuration}
                        </div>
                    )}
                </div>

                <p className="text-sm text-base-content/70 font-medium mb-3">
                    {companyDescription}
                </p>

                <div className="space-y-4">
                    {positions.map((position, index) => (
                        <div
                            key={index}
                            className="border-l-2 border-primary/20 pl-4"
                        >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                <h3 className="font-semibold text-lg">
                                    {position.jobName}
                                </h3>
                                <div className="badge badge-outline">
                                    {position.startDate} - {position.endDate}
                                </div>
                            </div>
                            <div className="text-base-content">
                                <ul className="list-disc list-inside space-y-1 leading-relaxed">
                                    {position.roles.map((item, bulletIndex) => (
                                        <li
                                            key={bulletIndex}
                                            className="text-sm"
                                        >
                                            {item.trim()}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="card-actions justify-end mt-4">
                    <div className="badge badge-outline">Experience</div>
                </div>
            </div>
        </div>
    )
}
