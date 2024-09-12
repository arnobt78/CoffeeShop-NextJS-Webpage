import Image from "next/image";

const Separator = ({ bg = "white" }: { bg?: "accent" | "white" }) => {
  const imgSrc =
    bg === "accent" ? "/assets/separator-accent.svg" : "/assets/separator-white.svg";

  return (
    <div className="relative w-[168px] h-[26px] mx-auto">
      <Image src={imgSrc} fill alt="" />
    </div>
  );
};

export default Separator;
