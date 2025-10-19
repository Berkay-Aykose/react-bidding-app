"user client"

const Category = () => {
    const categorieList = [
    {
      name: "xyz",
    },
    {
      name: "xyz",
    },
    {
      name: "xyz",
    },
    {
      name: "xyz",
    },
    {
      name: "xyz",
    }
  ];
  return (
    <div className="flex items-center justify-center px:3 md:px-10 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto ">
        {categorieList.map((category, index) => 
        <div className="border text-slate-500 rounded-full min-w-[120px] flex flex-1 items-center justify-center cursor-pointer px-4 py-2 text-center" key={index}>{category.name}</div>)}
    </div>
  )
}

export default Category