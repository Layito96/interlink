import Image from "next/image";
import ing from "@/public/ing.svg";


export default function Page() {
  return <div>
    <section className="bg-[#f7fdff] justify-between w-full flex overflow-hidden">
      <div className="flex flex-row justify-between items-center w-full h-[620px] pt-[52px] pl-[100px] relative bottom-0 right-0">

        <Image

          className="max-w-[44%] pl-0 absolute bottom-0 right-0"
          src={ing}
          alt={"lazy"}
          width={500} // Specify appropriate width
            height={500} // Specify appropriate height
        />
        {/* <img src="https://cdn.prod.website-files.com/66473ce8664c48d3e42fec71/664bf81761d885b7adf53187_Inte%CC%81gration%20-%20apps.svg" loading="lazy" alt="" className="image-115"> */}
        <div className="gap-[10px] flex-col justify-start items-start w-[50%] mb-[40px] no-underline flex relative">
          <div className="text-[#9eb8e9] tracking-[3.32px] uppercase mt-0 mb-0 font-gabarito text-[20px] font-normal leading-[120%] no-underline">Lifen Intégration</div>
          <h1 className="text-[56px] leading-[60px] block">
            <span className="text-primary-hover">Fiabilisez et accélérez</span> le rangement des documents dans le DPI
          </h1>
          <div className="relative">
            <div className="relative">



              <Image

                className="w-[5%] absolute -top-[5px] -left-[31px]"
                src={`	https://cdn.prod.website-files.com/66473ce8664c48d3e42fec71/66473ce8664c48d3e42feca3_ping.svg`}
                alt={"lazy"}
                width={50} // Specify appropriate width
                height={50} // Specify appropriate height
                
              />
              <div className="text-[#04173e] mt-[17px] mb-[27px] font-questrial text-[18px] font-normal leading-[26px] no-underline">
                Grâce à l’IA, gagnez en efficacité en automatisant le traitement et le rangement de tous les documents médicaux dans votre Dossier Patient Informatisé.
              </div>
            </div>
            <a href="#form" className="button btn w-button">JE SOUHAITE UNE DEMO</a>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#f7fdff] flex flex-col justify-center items-center mb-0 pb-[40px]  overflow-hidden">
      <div className="justify-center items-end flex relative">
      <div className="text-center justify-center items-center mt-[60px] mb-0 flex">
      <div className="flex flex-col justify-center items-center relative">
      <div className="text-[#041331] text-center mt-0 mb-0 pt-0 font-gabarito text-[60px] font-semibold leading-[62px] no-underline static">Démo de Lifen Intégration</div>
      <Image

        className="pb-[20px] pl-[220px] static bottom-[-10px] right-0"
        src={`https://cdn.prod.website-files.com/66473ce8664c48d3e42fec71/66473ce8664c48d3e42fed2c_dark-blue-scribble.svg`}
        alt={"lazy"}
        width={318} // Specify appropriate width
        height={300} // Specify appropriate height

        />
      
      </div>
      </div>
      </div>
      <div className="aspect-[16/9] justify-center items-center w-[80%] h-auto max-h-none mt-0 mb-0 pb-[10px] flex overflow-clip">
        <div  className="box-border aspect-[80/9] object-fill w-auto h-auto max-h-[100px] mt-0 pb-0 overflow-visible w-video w-embed p-0 relative">
          <iframe className="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F986284190%3Fapp_id%3D122963&amp;dntp=1&amp;display_name=Vimeo&amp;url=https%3A%2F%2Fvimeo.com%2F986284190&amp;image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1901831503-11ec80c79a27ebd27f3a913957ef43e14edc5b2f82d581b8bbedb5d3e2a6d8fd-d_1280&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=vimeo" width="940" height="529" scrolling="no" allowFullScreen="" title="Démo Lifen Intégration"></iframe>
        </div>
    </div>
  </section>
  </div>;
}
