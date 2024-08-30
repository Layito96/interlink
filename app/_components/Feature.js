import Image from "next/image";
import img1 from "@/public/assets/img/feature/img-1.svg";

function Feature() {
  return (
    <div id="feature" className="bg-accent py-24">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <div className="mb-5 lg:mb-0">
              <h2 className="mb-12 section-heading">Learn More About Us</h2>

              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="icon text-4xl">
                      <i className="lni lni-layers"></i>
                    </div>
                    <div className="features-content">
                      <h4 className="feature-title">Built with TailwindCSS</h4>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Veniam tempora quidem vel sint.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="icon text-4xl">
                      <i className="lni lni-gift"></i>
                    </div>
                    <div className="features-content">
                      <h4 className="feature-title">Free to Use</h4>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Veniam tempora quidem vel sint.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="icon text-4xl">
                      <i className="lni lni-laptop-phone"></i>
                    </div>
                    <div className="features-content">
                      <h4 className="feature-title">Fully Responsive</h4>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Veniam tempora quidem vel sint.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="icon text-4xl">
                      <i className="lni lni-leaf"></i>
                    </div>
                    <div className="features-content">
                      <h4 className="feature-title">Easy to Customize</h4>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Veniam tempora quidem vel sint.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="  mx-3 lg:mr-0 lg:ml-3">
              <Image
                src={img1}
                width={500}
                height={300}
                alt=""
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
