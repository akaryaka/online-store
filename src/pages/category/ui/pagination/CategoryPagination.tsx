import PaginationLink from "@/shared/ui/paginationLink/PaginationLink";

const CategoryPagination = () => {
  return (
    <>
      <ul className="flex items-center justify-center gap-[16px]">
        <li className="flex justify-center items-center w-[40px] h-[40px]">
          <PaginationLink className="text-primary" text={1} />
        </li>
        <li className="flex justify-center items-center w-[40px] h-[40px]">
          <PaginationLink text={2} />
        </li>
        <li className="flex justify-center items-center w-[40px] h-[40px]">
          <PaginationLink text={3} />
        </li>
        <li className="flex justify-center items-center w-[40px] h-[40px]">
          <PaginationLink text={4} />
        </li>
        <li className="flex justify-center items-center w-[40px] h-[40px]">
          <PaginationLink text={5} />
        </li>
        <li className="flex justify-center items-center w-[40px] h-[40px]">
          <PaginationLink text={6} />
        </li>
        <li className="flex justify-center items-center w-[40px] h-[40px]">
          <PaginationLink text={7} />
        </li>
        <li className="flex justify-center items-center w-[40px] h-[40px]">
          <PaginationLink text={8} />
        </li>
      </ul>
    </>
  );
};

export default CategoryPagination;
