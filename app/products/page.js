import Image from "next/image";
import ing from "@/public/ing.svg";
import amnirtracking from "@/public/assets/img/projects/amnirtrack.png";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#f7fdff]">
      <section className="py-[232px] pb-[120px] productshero" style={{}}>
        <div
          className="xl:w-auto text-center productherotitle"
          style={{
            width:
              "calc(((64px* 12) +((calc(calc(40px* 11 / 12)* 11 / 12)* 12 /(12 - 1))*(12 - 1))) + calc(0* calc(40px* 11 / 12)))",
          }}
        >
          <div className="text-center productherotitle1">
            <h1>
              Optimisez votre Performance avec notre&nbsp;
              <em className="relative inline-block p-2">
                <svg
                  className="absolute inset-0 w-full h-full  fill-primary"

                  preserveAspectRatio="none"
                  viewBox="0 0 193 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clipRule="evenodd"
                    d="M192.685 60.0581C189.638 63.2174 186.624 63.5183 183.704 64.1419C178.93 65.1625 174.124 65.2311 169.342 66.0772C153.84 68.8354 117.378 69.0717 101.874 67.6253C87.1169 66.2517 72.353 66.8272 57.6123 65.4893C44.6382 64.3122 31.6257 67.4624 18.7086 63.8732C14.4352 62.6864 10.1815 62.5325 5.91258 62.104C2.89848 61.8045 1.34943 15.9688 0.789679 9.47172C0.287422 3.65592 1.58224 -0.128342 4.04561 0.195827C19.2719 2.21776 34.4976 0.986949 49.7227 3.0565C59.061 4.33257 68.4077 3.01528 77.7431 3.65949C87.2009 4.31195 96.6344 6.58801 106.104 6.68965C121.249 6.85174 157.322 7.03029 172.465 6.98496C174.978 6.98496 185.498 6.08252 187.998 5.27622C192.891 3.7007 189.206 48.4815 192.685 60.0581Z"
                  ></path>
                </svg>
                <span className="relative z-10 text-white">expertise sectorielle</span>
              </em>
              &nbsp;
            </h1>
            {/* <div className="text-[#9eb8e9] tracking-[3.32px] uppercase mt-0 mb-0 font-gabarito text-[20px] font-normal leading-[120%] no-underline">
              <Link href="/products/1"> AMNIR Tracking</Link>
            </div> */}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto container pr-wrapper">

        {/* <div class="style_container_title__6a_D7"><p class="style_subtitle__89Z0G">12 secteurs d’activités</p></div> */}
          <div className="flex flex-row flex-wrap mt-[69px] pl-0 justify-between gap-10">
            <div className="flex-1 rounded-[40px] bg-accent p-[40px] flex flex-col  mb-[80px]">
              <div className="h-[120px]">
                <Image
                  className="max-w-[100%] h-[100%]"
                  src={amnirtracking}
                  alt={"lazy"}

                />
              </div>
              <div className="mt-[16px] flex-1 flex flex-col">
              <div className="text-[#9eb8e9] tracking-[3.32px] uppercase mt-0 mb-0 font-gabarito text-[20px] font-normal leading-[120%] no-underline">AMNIR Tracking</div>
              <p>
                  Grâce à notre plateforme, calculez l'empreinte carbone de votre entreprise et imaginez un système alimentaire qui fonctionne sans endommager nos écosystèmes.
                </p>
                <a className="mt-5 inline-flex items-center cursor-pointer gap-[8px] no-underline">
                  <svg class="style_btn_arrow__v0VZk w-[20px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-[#101010]" d="M10 20C4.47667 20 -3.91363e-07 15.5233 -8.74228e-07 10C-1.35709e-06 4.47667 4.47666 1.35709e-06 10 8.74228e-07C15.5233 3.91363e-07 20 4.47667 20 10C20 15.5233 15.5233 20 10 20Z"></path>
                    <path class="stroke-[#fff]" d="M14.4443 10L5.55545 10" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"></path>
                    <path class="stroke-white" d="M11.111 6.66683L14.4443 10.0002L11.111 13.3335" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span className="inline-flex relative items-center no-underline font-semibold text-[14px] leading-[18.2px] text-[#101010]">
                    <span>Plus d'infos</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="flex-1 rounded-[40px] bg-[#fafafa] hover:bg-accent p-[40px] flex flex-col  mb-[80px]">
              <div className="h-[120px]">
                <Image
                  className="max-w-[100%] h-[100%]"
                  src={amnirtracking}
                  alt={"lazy"}

                />
              </div>
              <div className="mt-[16px] flex-1 flex flex-col">
              <div className="text-[#9eb8e9] tracking-[3.32px] uppercase mt-0 mb-0 font-gabarito text-[20px] font-normal leading-[120%] no-underline">AMNIR SMS</div>
              <p>
                Le changement climatique place les assureurs face à de nombreuses incertitudes. Cependant, cette situation offre aussi de vastes possibilités de penser et d'agir différemment pour répondre aux besoins d'un nouveau marché de clients qui recherchent de nouveaux produits, services et expériences.                </p>
                <a className="mt-5 inline-flex items-center cursor-pointer gap-[8px] no-underline">
                  <svg class="style_btn_arrow__v0VZk w-[20px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-[#101010]" d="M10 20C4.47667 20 -3.91363e-07 15.5233 -8.74228e-07 10C-1.35709e-06 4.47667 4.47666 1.35709e-06 10 8.74228e-07C15.5233 3.91363e-07 20 4.47667 20 10C20 15.5233 15.5233 20 10 20Z"></path>
                    <path class="stroke-[#fff]" d="M14.4443 10L5.55545 10" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"></path>
                    <path class="stroke-white" d="M11.111 6.66683L14.4443 10.0002L11.111 13.3335" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span className="inline-flex relative items-center no-underline font-semibold text-[14px] leading-[18.2px] text-[#101010]">
                    <span>Plus d'infos</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="flex-1 rounded-[40px] bg-[#fafafa] p-[40px] flex flex-col  mb-[80px]">
              <div className="h-[120px]">
                <Image
                  className="max-w-[100%] h-[100%]"
                  src={amnirtracking}
                  alt={"lazy"}

                />
              </div>
              <div className="mt-[16px] flex-1 flex flex-col">
              <div className="text-[#9eb8e9] tracking-[3.32px] uppercase mt-0 mb-0 font-gabarito text-[20px] font-normal leading-[120%] no-underline">AMNIR GED</div>
              <p>
                  Grâce à notre plateforme, calculez l'empreinte carbone de votre entreprise et imaginez un système alimentaire qui fonctionne sans endommager nos écosystèmes.
                </p>
                <a className="mt-5 inline-flex items-center cursor-pointer gap-[8px] no-underline">
                  <svg class="style_btn_arrow__v0VZk w-[20px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-[#101010]" d="M10 20C4.47667 20 -3.91363e-07 15.5233 -8.74228e-07 10C-1.35709e-06 4.47667 4.47666 1.35709e-06 10 8.74228e-07C15.5233 3.91363e-07 20 4.47667 20 10C20 15.5233 15.5233 20 10 20Z"></path>
                    <path class="stroke-[#fff]" d="M14.4443 10L5.55545 10" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"></path>
                    <path class="stroke-white" d="M11.111 6.66683L14.4443 10.0002L11.111 13.3335" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span className="inline-flex relative items-center no-underline font-semibold text-[14px] leading-[18.2px] text-[#101010]">
                    <span>Plus d'infos</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
