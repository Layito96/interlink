import Article from "../_components/Article";
import Pricing from "../_components/Pricing";

export default function Page() {
  return (
    <div>
      <Article />
      <div>
        <h1 className="bg-accent pt-8 text-center title-font text-primary text-xl font-bold leading-10 tracking-tight sm:text-5xl ">
          Nos Offres
        </h1>
        <Pricing />
      </div>
    </div>
  );
}
