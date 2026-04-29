export default function App() {
  return (
    <>
      <nav className="bg-blue-600 py-4 px-8 flex justify-between items-center">
        <span className="font-bold text-white text-xl">AUDORA</span>
        <div className="text-white text-sm hidden md:flex gap-6">
          <span className="hover:text-blue-200">Home</span>
          <span className="hover:text-blue-200">About</span>
          <span className="hover:text-blue-200">Login</span>
        </div>    
      </nav>
      <div className="p-6 bg-white">
        <h1 className="text-lg font-bold text-gray-900 text-center">Priyanshu Kumar Yadav</h1>
        <p className="text-base font-medium text-blue-500 text-center">Full Stack Developer</p>
        <p className="text-sm text-gray-500 text-center leading-relaxed">
          I am a great developer
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:cursor-pointer transition duration-300 ease-in-out block mx-auto">Button</button>
      </div>
      <section className="w-full bg-gray-900 flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Transform PDF into Audio</h1>
        <p className="text-gray-400 text-lg">An online pdf to audio generator</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:cursor-pointer transition duration-300 ease-in-out">Get Started</button>
      </section>
    </>
  )
}