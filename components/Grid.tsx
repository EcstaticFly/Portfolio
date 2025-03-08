import { gridItems } from "@/config";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(({
          id,
          title,
          titleClassName,
          img,
          imgClassName,
          spareImg,
          className,
          description
        }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            spareImg={spareImg}
            titleClassName={titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
