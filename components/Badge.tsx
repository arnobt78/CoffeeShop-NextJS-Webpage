import Image from "next/image";

type PropsType = {
  containerStyles: string;
};

const Badge = ({ containerStyles }: PropsType) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image src="/assets/badge.svg" fill alt="" className="object-contain" />
    </div>
  );
};

export default Badge;
