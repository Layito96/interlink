import Link from "next/link";

function NotFound() {
  return (
    <main className="pt-10 pb-20 text-center space-y-6 mt-40 h-1/2">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6 font-semibold">
        Oups ! Cette page n&apos;existe pas.
      </p>
      <Link
        href="/"
        className="inline-block bg-accent-500 text-primary-800 
        px-6 py-3 text-lg btn"
      >
        Retour à la page d&apos;accueil
      </Link>
    </main>
  );
}

export default NotFound;
