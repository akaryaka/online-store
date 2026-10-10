import PaginationLink from "@/shared/ui/paginationLink/PaginationLink";

const CategoryPagination = () => {
  return (
    <>
      <ul className="flex items-center justify-center gap-[16px]">
        <li className="flex justify-center items-center w-[40px] h-[40px]">
          <PaginationLink className="text-primary" title={1} />
        </li>
        <li className="flex justify-center items-center w-[40px] h-[40px]">
          <PaginationLink title={2} />
        </li>
        <li className="flex justify-center items-center w-[40px] h-[40px]">
          <PaginationLink title={3} />
        </li>
        <li className="flex justify-center items-center w-[40px] h-[40px]">
          <PaginationLink title={4} />
        </li>
        <li className="flex justify-center items-center w-[40px] h-[40px]">
          <PaginationLink title={5} />
        </li>
        <li className="flex justify-center items-center w-[40px] h-[40px]">
          <PaginationLink title={6} />
        </li>
        <li className="flex justify-center items-center w-[40px] h-[40px]">
          <PaginationLink title={7} />
        </li>
        <li className="flex justify-center items-center w-[40px] h-[40px]">
          <PaginationLink title={8} />
        </li>
      </ul>
    </>
  );
};

export default CategoryPagination;
