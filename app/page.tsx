import Landing from "@/components/Landing/Landing";
import Cards from "@/components/Landing/Cards";
import Provide from "@/components/Landing/Provide";
import Testimonials from "@/components/Landing/Testimonials";
import Tag from "@/components/Landing/Tag";

export default function Home() {
  return (
    <>
      <Landing />
      <Cards />
      <Provide />
      <Testimonials />
      <Tag />
    </>
  );
}
