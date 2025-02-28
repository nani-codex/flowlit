import Subscribe from '@/app/ui/subscribe'

export default function About() {
  return (
     <section
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
        id="about"
      >
        <div className="relative flex-col items-center justify-center text-[#faf9f6] text-center">
          <h4 className="text-4xl flex justify-center md:text-7xl font-[--font-secondary]">
            About
          </h4>
          <p className="text-lg md:text-xl mt-4 font-[500]">
            Your Gateway to Smater Reading & File Management.
          </p>
          <Subscribe />
        </div>
      </section>
  )
}
