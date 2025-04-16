import { Navbar } from '@/components'

import { AboutMe, Contact, Landing, Projects } from '@/components/sections'

export default function Home() {
    return (
        <>
            <Navbar />
            <Landing />
            <AboutMe />
            <Projects />
            <Contact />
        </>
    )
}
