import Button from "@/shared/ui/button/Button";

const CategoryTags = () => {
  return (
    <>
      <div className="flex gap-[24px] mb-[40px]">
        <Button
          accent="greyscale"
          size="s"
          type="text-btn"
          className="items-center p-[8px_20px]"
        >
          Товары нашего производства
        </Button>
        <Button
          accent="greyscale"
          size="s"
          type="text-btn"
          className="items-center p-[8px_20px]"
        >
          Полезное питание
        </Button>
        <Button
          accent="greyscale"
          size="s"
          type="text-btn"
          className="items-center p-[8px_20px]"
        >
          Без ГМО
        </Button>
      </div>
    </>
  );
};

export default CategoryTags;
