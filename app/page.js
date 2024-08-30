import Feature from "./_components/Feature";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Reference from "./_components/Reference";

export default function Home() {
  return (
    <main className="">
      <Header />
      <h1 className="text-4xl">Home page</h1>
      <div className="py-12">
        <div className="container">
          <Reference />
        </div>
      </div>
      <Feature />
      <Footer />
    </main>
  );
}
