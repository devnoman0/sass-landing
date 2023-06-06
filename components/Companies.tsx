import React from "react";
import Zepplin from "../public/Company Logos/Group.png";
import Oracle from "../public/Company Logos/Group (1).png";
import Morpheus from "../public/Company Logos/Group (2).png";
import Samsung from "../public/Company Logos/Group (3).png";
import Monday from "../public/Company Logos/Group (4).png";
import Segment from "../public/Company Logos/Group (5).png";
import Protonet from "../public/Company Logos/Group (6).png";
import Image from "next/image";

const Logos = [
  {
    id: 1,
    logo: Zepplin,
  },
  {
    id: 2,
    logo: Oracle,
  },
  {
    id: 3,
    logo: Morpheus,
  },
  {
    id: 4,
    logo: Samsung,
  },
  {
    id: 5,
    logo: Monday,
  },
  {
    id: 6,
    logo: Segment,
  },
  {
    id: 7,
    logo: Protonet,
  },
];

const Companies = () => {
  return (
    <div className="border-y mt-10">
      <div className="flex items-center flex-col justify-center max-w-7xl mx-auto h-[240px]">
        <h1 className="text-2xl font-semibold text-center w-full mb-10">
          Over 32k+ software businesses growing with AR Shakir
        </h1>
        <div className="flex flex-row gap-12 items-center justify-between">
          {Logos.map((item) => (
            <div key={item.id}>
              <Image src={item.logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
