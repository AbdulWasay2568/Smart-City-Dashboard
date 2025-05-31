const HowItWorks = () => {
  const steps = [
    { title: "1. Post a Skill", desc: "Tutors list what they can teach." },
    { title: "2. Find a Skill", desc: "Learners browse and filter skill listings." },
    { title: "3. Request Session", desc: "Learners send a request and connect." },
  ];

  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">How SkillBridge Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {steps.map((step, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-sm w-full max-w-xs mx-auto">
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
