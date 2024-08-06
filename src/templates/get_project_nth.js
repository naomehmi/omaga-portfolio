import { projects } from "@/data/projects";
import arrowOutwardSVG from "../../public/arrow_outward.svg";
import Image from "next/image";

export default function ProjectNth({ index }) {
  const prjct = projects[index];
  const prevImgs = [];
  for(let i=1;i<=prjct.totalPrev;i++){
    prevImgs.push(prjct.prev + i.toString() + "." + prjct.ext);
  }
  return (
    <div className="max-w-[95vw]">
      <a href={prjct.url} target="_blank" className="title">
        <div className="flex items-end">
          <h2 className="text-2xl md:text-4xl underline">{prjct.title}</h2>
          <Image priority src={arrowOutwardSVG} alt="arrow outward" width={35} />
        </div>
      </a>
      <div className="mt-3">
        <p className="text-sm md:text-base">{prjct.time}</p>
        <p className="text-sm md:text-base">{prjct.used} | {prjct.field} | {prjct.info}</p>
      </div>
      <div className="text-base lg:text-xl">
        <div className="my-5">{prjct.desc}</div>
        <div>
          <p className="text-peach">features:</p>
          <ul className="list-disc ml-5">
            {prjct.feat.map((ft, idx) => (
                <li key={idx}>{ft}</li>
              ))}
          </ul>
        </div>
        <div className="my-5">
          <p className="text-peach">preview:</p>
          <div className="flex flex-wrap">
            {prevImgs.map((pic, idx) => (
              <Image className="p-2 rounded-3xl" key={idx} src={pic} width={prjct.imgWidth} height={0} alt="preview" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
