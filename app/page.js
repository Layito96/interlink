import ArticleCard from "./_components/ArticleCard";
import Contact from "./_components/Contact";
import Feature from "./_components/Feature";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Maps from "./_components/Maps";
import Pricing from "./_components/Pricing";
import Products from "./_components/Products";
import Reference from "./_components/Reference";
import Services from "./_components/Services";
import Testimonial from "./_components/Testimonial";
import Values from "./_components/Values";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Services />
      <Pricing />
      <Products />
      {/* <Feature /> */}
      <Values />
      <Reference />
      <ArticleCard />
      <Testimonial />
      <Contact />
      <Maps />
    </main>
  );
}
