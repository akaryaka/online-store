import Button from "@/shared/ui/button/Button";

const CategoryTags = () => {
  return (
    <>
      <div className="flex gap-[24px] mb-[40px]">
        <Button className="text-[#606060] bg-[#F3F2F1]">
          Товары нашего производства
        </Button>
        <Button className="text-[#606060] bg-[#F3F2F1]">
          Полезное питание
        </Button>
        <Button className="text-[#606060] bg-[#F3F2F1]">Без ГМО</Button>
      </div>
    </>
  );
};

export default CategoryTags;
