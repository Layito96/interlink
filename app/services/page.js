import Services from "../_components/Services";

export default function Page() {
  return (
    <div className="container h-600 pt-40">
      <Services />
      <div>
        <h1 className="title-font text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-5xl ">
          Technologies maîtrisées
        </h1>
        <h2 className="title-font text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-4xl">
          Frontend
        </h2>
        <h2 className="title-font text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-4xl">
          Backend
        </h2>
        <h2 className="title-font text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-4xl">
          Infastructure
        </h2>
      </div>
    </div>
  );
}
