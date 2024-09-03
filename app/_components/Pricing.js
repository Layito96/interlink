function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-accent">
      <div className="container">
        <div className="flex flex-wrap justify-center md:justify-start">
          {/* <!-- single pricing table starts --> */}
          <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
            <div className="pricing-box">
              <div className="mb-3">
                <h3 className="package-name">Basic</h3>
              </div>
              <div className="mb-5">
                <p className="text-gray-700">
                  <span className="font-bold text-2xl">$12.90</span>
                  <span className="font-medium text-sm">/ Month</span>
                </p>
              </div>
              <ul className="mb-16">
                <li className="text-gray-500 leading-9">Up to 5 projects </li>
                <li className="text-gray-500 leading-9">
                  Up to 10 collabrators
                </li>
                <li className="text-gray-500 leading-9">2gb of storage</li>
              </ul>
              <a href="#" className="btn">
                Get It
              </a>
            </div>
          </div>
          {/* <!-- single pricing table ends --> */}
          {/* <!-- single pricing table starts --> */}
          <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
            <div className="pricing-box !bg-blue-100">
              <div className="mb-3">
                <h3 className="package-name">PROFESIONAL</h3>
              </div>
              <div className="mb-5">
                <p className="text-gray-700">
                  <span className="font-bold text-2xl">$49.90</span>
                  <span className="font-medium text-sm">/ Month</span>
                </p>
              </div>
              <ul className="mb-16">
                <li className="text-gray-500 leading-9">Up to 10 projects </li>
                <li className="text-gray-500 leading-9">
                  Up to 20 collabrators
                </li>
                <li className="text-gray-500 leading-9">10gb of storage</li>
                <li className="text-gray-500 leading-9">
                  Real-time collabration
                </li>
              </ul>
              <a href="#" className="btn">
                Get It
              </a>
            </div>
          </div>
          {/* <!-- single pricing table ends --> */}
          {/* <!-- single pricing table starts --> */}
          <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
            <div className="pricing-box">
              <div className="mb-3">
                <h3 className="package-name">EXPERT</h3>
              </div>
              <div className="mb-5">
                <p className="text-gray-700">
                  <span className="font-bold text-2xl">$89.90</span>
                  <span className="font-medium text-sm">/ Month</span>
                </p>
              </div>
              <ul className="mb-16">
                <li className="text-gray-500 leading-9">unlimited projects </li>
                <li className="text-gray-500 leading-9">
                  Unlimited collabrators
                </li>
                <li className="text-gray-500 leading-9">
                  Unlimited of storage
                </li>
                <li className="text-gray-500 leading-9">
                  Real-time collabration
                </li>
                <li className="text-gray-500 leading-9">24x7 Support</li>
              </ul>
              <a href="#" className="btn">
                Get It
              </a>
            </div>
          </div>
          {/* <!-- single pricing table ends --> */}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
