import Image from "next/image";

type PropsType = {
  itemCSS: "xl:text-right xl:items-end" | "xl:text-left items-start";
  icon: `${string}.svg`;
  text: {
    title: string;
    description: string;
  };
};

const ExploreItem = ({ itemCSS, icon, text }: PropsType) => {
  return (
    <div className="relative flex items-start">
      <div className={`xl:max-w-[420px] xl:flex xl:flex-col ${itemCSS}`}>
        <div className="mb-6 flex justify-center items-center">
          <Image src={`/assets/explore/icons/${icon}`} width={56} height={56} alt="" />
        </div>
        <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">{text.title}</h3>
        <p className="max-w-[400px]">{text.description}</p>
      </div>
    </div>
  );
};

export default ExploreItem;
