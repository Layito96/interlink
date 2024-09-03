function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-12 text-4xl text-gray-700 font-bold tracking-wide">
            Laisser Un Message
          </h2>
        </div>

        <div className="flex flex-wrap contact-form-area">
          <div className="w-full md:w-1/2">
            <div className="contact">
              <h2 className=" text-xl text-gray-700 mb-5 ml-3">
                Notre personnel vous rappellera et répondra à vos questions.
              </h2>
              <form id="contactForm" action="assets/contact.php">
                <div className="flex flex-wrap">
                  <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                    <div className="mx-3">
                      <input
                        type="text"
                        className="form-input rounded-full"
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        required
                        data-error="Vailler saisir votre nom"
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                    <div className="mx-3">
                      <input
                        type="text"
                        placeholder="Email"
                        id="email"
                        className="form-input rounded-full"
                        name="email"
                        required
                        data-error="Vailler saisir votre email"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mx-3">
                      <input
                        type="text"
                        placeholder="Sujet"
                        id="subject"
                        name="subject"
                        className="form-input rounded-full"
                        required
                        data-error="Veiller saisir le sujet de votre message"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mx-3">
                      <textarea
                        className="form-input rounded-lg"
                        id="message"
                        name="message"
                        placeholder="Message"
                        rows="5"
                        data-error="Rédigez votre message !"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="submit-button mx-3">
                      <button className="btn" id="form-submit" type="submit">
                        Envoyer
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="ml-3 md:ml-12">
              <h2 className="uppercase font-bold text-xl text-gray-700 mb-5">
                Contactez-nous
              </h2>
              <div>
                <div className="flex flex-wrap mb-6 items-center">
                  <div className="contact-icon">
                    <i className="lni lni-map-marker"></i>
                  </div>
                  <p className="pl-3">
                    {" "}
                    055 Ilot C Zone Château D’Eau Nouakchott – Mauritanie
                  </p>
                </div>
                <div className="flex flex-wrap mb-6 items-center">
                  <div className="contact-icon">
                    <i className="lni lni-envelope"></i>
                  </div>
                  <p className="pl-3">
                    <a href="mailto:info@interlink.mr" className="block">
                      info@interlink.mr
                    </a>
                  </p>
                </div>
                <div className="flex flex-wrap mb-6 items-center">
                  <div className="contact-icon">
                    <i className="lni lni-phone-set"></i>
                  </div>
                  <p className="pl-3">
                    <a href="#" className="block">
                      {" "}
                      + (222) 45 25 23 56
                    </a>
                    <a href="#" className="block">
                      + (222) 45 25 32 30
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
