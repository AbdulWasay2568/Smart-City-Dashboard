const Hero = () => {
  return (
    <section className="bg-blue-50 py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-800">Welcome to SkillBridge</h1>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
        A free platform where students and professionals connect to teach and learn real-world skills, from Canva to 3D Design.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
        Explore Skills
      </button>
    </section>
  );
};

export default Hero;
