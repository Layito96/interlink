import Image from "next/image";
import Link from "next/link";
import newlogoInterlink from "@/public/assets/img/logo/newlogoInterlink.svg";
import banner from "@/public/assets/img/banner.jpg";
import viberLogo from "@/public/assets/img/viberLogo.svg";
import robot2 from "/public/robot2.webp";

function page() {
  return (
    <div>
      <div className="cs-article !my-40">
        <div className="container intro-wrapper">
          <div className="intro-background-wrapper">
            <Image
              src={banner}
              alt=""
              width={800} // utilisez la largeur et la hauteur appropriées
              height={600}
              priority
            />
          </div>
          <div className="intro-title-wrapper">
            <div className="intro-logo">
              <Image
                src={viberLogo}
                width="326"
                height="101"
                alt="Development of Viber, a Messaging and VoIP App with 1B+ Users"
                //className="lazy entered loaded"
                data-src="/testimonials-logos/viber-logo.svg"
                data-ll-status="loaded"
              />
            </div>
            <h1 className="intro-title text-4xl">
              Development of Viber, a Messaging and VoIP App with 1B+ Users
            </h1>
          </div>
          <div className="intro-columns-wrapper">
            <div className="intro-columns intro-columns-2">
              <div className="intro-column-wrapper">
                <div className="intro-column">
                  <div className="intro-column-title">Categorie</div>
                  <div className="intro-column-content">Article</div>
                </div>
              </div>
              <div className="intro-column-wrapper">
                <div className="intro-column">
                  <div className="intro-column-title">Technologies</div>
                  <div className="intro-column-content">
                    Android, Mobile, Windows Phone
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-5">
            <div className="text-center py-10 px-8 md:px-10 rounded border border-accent">
              <div className="text-center">
                <p className="text-gray-600 leading-loose">
                  Holisticly empower leveraged ROI whereas effective
                  web-readiness. Completely enable emerging meta-services with
                  cross-platform web services. Quickly initiate inexpensive
                  total linkage rather than extensible scenarios. Holisticly
                  empower leveraged ROI whereas effective web-readiness.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
