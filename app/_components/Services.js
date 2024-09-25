import { getServices } from "../_lib/data-services";

async function Services() {
  const services = await getServices();
  return (
    <section
      id="services"
      className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h1 className="title-font text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-5xl ">
                Services
              </h1>
              <p className="text-body-color text-base dark:text-dark-6 ">
                Nous proposons des solutions innovantes en e-gouvernance,
                e-santé, développement informatique, messagerie, géolocalisation
                et cybersécurité.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {services &&
            services.data &&
            services.data.length > 0 &&
            services.data.map((service) => {
              const attributes = service.attributes || {};
              const iconData = attributes.icon?.data || {};
              const iconAttributes = iconData.attributes || {};
              if (attributes.title !== "Slogan") {
                return (
                  <div
                    key={service.id}
                    className="w-full px-4 md:w-1/2 lg:w-1/3"
                  >
                    <div className="mb-9 rounded-[20px] border  bg-white dark:bg-dark-2 hover:bg-accent p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                      <div className="flex flex-row justify-start items-center gap-6 mb-4">
                        <div className="bg-primary flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                          <i
                            className={`${attributes.iconClass} text-[2.5rem] text-primary-hover`}
                          ></i>
                        </div>
                        <h4 className="text-dark dark:text-accent-hover lg:text-lg md:text-xl font-semibold">
                          {attributes.title || "No Title"}
                        </h4>
                      </div>
                      <p className="text-body-color dark:text-dark-6">
                        {attributes.description || "No Description"}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </section>
  );
}

export default Services;
