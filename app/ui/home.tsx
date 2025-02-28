import Subscribe from "@/app/ui/subscribe"

interface HomeProps {
  isMobile: boolean;
}

export default function Home({ isMobile }: HomeProps) {
  return (
    <>
      <section
        className="relative flex items-center justify-center min-h-screen"
        id="home"
      >
        <div className="relative px-20 flex flex-col items-center justify-center text-[#faf9f6] text-center">
          <h3 className="text-4xl flex justify-center md:text-5xl font-normal">
            Coming Soon
          </h3>
          <p className="text-lg font-normal md:text-xl mt-4">
            Experience Unlimited Reading: Sync, Highlight, and Customize Your
            Library
          </p>
          <Subscribe />
        </div>
      </section>

      <section
        className={`relative flex items-center justify-center min-h-screen bg-cover bg-center ${!isMobile && 'hidden'}`}
        id="about"
      >
        <div className="relative flex-col items-center justify-center text-[#faf9f6] text-center px-20">
          <h4 className="text-4xl flex justify-center md:text-7xl font-[--font-secondary]">
            About
          </h4>
          <p className="text-lg md:text-xl mt-4 font-[500]">
            Your Gateway to Smarter Reading & File Management.
          </p>
          <Subscribe />
        </div>
      </section>

      <section
        className={`relative flex items-center justify-center min-h-screen bg-cover bg-center ${!isMobile && 'hidden'}`}
        id="features"
      >
        <div className="relative flex-col items-center justify-center text-[#faf9f6] text-center px-20">
          <h4 className="text-4xl flex justify-center md:text-7xl font-[--font-secondary]">
            Features
          </h4>
          <p className="text-lg md:text-xl mt-4 font-[500]">
            Sync across devices, highlight text, customize your reading experience, and more.
          </p>
          <Subscribe />
        </div>
      </section>

      <section
        className={`relative flex items-center justify-center min-h-screen bg-cover bg-center ${!isMobile && 'hidden'}`}
        id="contact"
      >
        <div className="relative flex-col items-center justify-center text-[#faf9f6] text-center px-20">
          <h4 className="text-4xl flex justify-center md:text-7xl font-[--font-secondary]">
            Contact
          </h4>
          <p className="text-lg md:text-xl mt-4 font-[500]">
            Get in touch with us for any questions or support.
          </p>
          <Subscribe />
        </div>
      </section>
    </>
  )
}
