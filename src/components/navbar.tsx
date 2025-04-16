import Link from 'next/link'

export default function navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1"></div>
            <div className="flex-none">
                <Link href="/" className="btn btn-square btn-outline">
                    CP
                </Link>
                <Link href="#projects" className="btn btn-ghost normal-case">
                    Projects
                </Link>
                <Link href="#about-me" className="btn btn-ghost normal-case">
                    About
                </Link>
                <Link href="#contact" className="btn btn-ghost normal-case">
                    Contact
                </Link>
            </div>
            <div className="flex-1"></div>
        </div>
    )
}
