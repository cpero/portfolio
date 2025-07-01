import { AboutMe, Contact, Landing, Projects } from '@/components/sections'

export default function Home() {
    return (
        <div className="flex flex-col items-stretch justify-center min-h-screen min-w-screen p-6 bg-base-100">
            <Landing />
            <AboutMe />
            <Projects />
            <Contact />
        </div>
    )
}
