import Image from "next/image";
import ing from "@/public/ing.svg";
import Link from "next/link";

export default function Page() {
  return (
    <div>
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
              Optimisez votre Bilan Carbone® avec notre&nbsp;
              <em>
                <svg
                  preserveAspectRatio="none"
                  viewBox="0 0 193 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M192.685 60.0581C189.638 63.2174 186.624 63.5183 183.704 64.1419C178.93 65.1625 174.124 65.2311 169.342 66.0772C153.84 68.8354 117.378 69.0717 101.874 67.6253C87.1169 66.2517 72.353 66.8272 57.6123 65.4893C44.6382 64.3122 31.6257 67.4624 18.7086 63.8732C14.4352 62.6864 10.1815 62.5325 5.91258 62.104C2.89848 61.8045 1.34943 15.9688 0.789679 9.47172C0.287422 3.65592 1.58224 -0.128342 4.04561 0.195827C19.2719 2.21776 34.4976 0.986949 49.7227 3.0565C59.061 4.33257 68.4077 3.01528 77.7431 3.65949C87.2009 4.31195 96.6344 6.58801 106.104 6.68965C121.249 6.85174 157.322 7.03029 172.465 6.98496C174.978 6.98496 185.498 6.08252 187.998 5.27622C192.891 3.7007 189.206 48.4815 192.685 60.0581Z"
                  ></path>
                </svg>
                <span className="relative z-10">expertise sectorielle</span>
              </em>
              &nbsp;
            </h1>
            <div className="text-[#9eb8e9] tracking-[3.32px] uppercase mt-0 mb-0 font-gabarito text-[20px] font-normal leading-[120%] no-underline">
              <Link href="/products/1"> AMNIR Tracking</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
