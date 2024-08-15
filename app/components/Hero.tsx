const Hero = () => {
  return (
    <section className="container my-16">
        <h1 className="text-4xl font-bold text-center">
            Find your next<br/> dream job
        </h1>
        {/* <p className="text-center text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi optio quaerat rem praesentium repudiandae tenetur expedita architecto atque provident placeat hic maiores quae, dolor voluptatibus eum. Eum esse fugit hic.
        </p> */}
        <form className="flex gap-2 mt-4 max-w-md mx-auto">
            <input 
            type="search" 
            className="border w-full p-2 px-3 rounded-md" 
            placeholder="Search phrase.."/>
            <button className="bg-neutral-700 hover:bg-neutral-800 text-white py-2 px-4 rounded-md">
                Search
            </button>
        </form>
    </section>
  )
}

export default Hero