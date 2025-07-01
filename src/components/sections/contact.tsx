export default function Contact() {
    return (
        <section id="contact" className="py-16">
            <div className="min-h-screen flex flex-col justify-center">
                <div className="px-24">
                    <h1 className="text-2xl md:text-5xl font-bold underline decoration-primary underline-offset-4 mb-8">
                        Contact Me
                    </h1>
                    <p className="text-lg md:text-xl mb-12 max-w-3xl">
                        Let's connect! Whether you're looking to collaborate on
                        a project, discuss opportunities, or just want to say
                        hello, I'd love to hear from you.
                    </p>

                    <div className="max-w-lg mx-auto">
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-xl font-bold text-primary mb-6 justify-center">
                                    Get in touch
                                </h2>
                                <div className="space-y-4">
                                    <a
                                        href="mailto:codypero@gmail.com"
                                        className="flex items-center gap-3 p-4 rounded-lg hover:bg-base-200 transition-colors"
                                    >
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-primary"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">
                                                Email
                                            </h3>
                                            <p className="text-sm text-base-content/70">
                                                codypero@gmail.com
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href="https://github.com/cpero"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 rounded-lg hover:bg-base-200 transition-colors"
                                    >
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-primary"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">
                                                GitHub
                                            </h3>
                                            <p className="text-sm text-base-content/70">
                                                Check out my repositories
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/cody-pero"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 rounded-lg hover:bg-base-200 transition-colors"
                                    >
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-primary"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">
                                                LinkedIn
                                            </h3>
                                            <p className="text-sm text-base-content/70">
                                                Let's connect professionally
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="divider"></div>

                                <div className="text-center">
                                    <p className="text-sm text-base-content/70 mb-4">
                                        Ready to start a conversation?
                                    </p>
                                    <a
                                        href="mailto:codypero@gmail.com?subject=Hello!&body=Hi Cody, I'd like to get in touch about..."
                                        className="btn btn-primary btn-wide"
                                    >
                                        Send me an email
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
