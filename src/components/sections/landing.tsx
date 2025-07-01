import Image from 'next/image'

import ProfilePicture from '@/assets/images/profile.png'

export default function Landing() {
    return (
        <section id="landing" className="">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image
                        src={ProfilePicture}
                        alt="Cody Pero"
                        className="rounded-lg shadow-2xl w-64 h-64 object-cover mask mask-circle object-top"
                    />
                    <div>
                        <h1 className="text-2xl md:text-5xl font-bold text-center">
                            Hi, I'm <span className="text-primary">Cody</span>
                            &nbsp;👋
                        </h1>
                        <p className="text-lg md:text-xl py-6 max-w-md text-center">
                            I am a full-stack developer that brings passion and
                            energy to every project.&nbsp;⚡️
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
