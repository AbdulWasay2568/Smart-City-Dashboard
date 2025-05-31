import Hero from "../components/Hero";
import SkillsList from "../components/SkillsList";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";


const Home = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Hero />
      <HowItWorks />
      <SkillsList />
      <CTA />
    </div>
  );
};

export default Home;
