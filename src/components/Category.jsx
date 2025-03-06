import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import SingleCategory from "./SingleCategory"

const Category = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="max-w-[1120px] mx-auto py-20">
        {/* header part */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-medium text-2xl leading-8">Browse By Category</h2>
          <div className="flex">
            <IoIosArrowBack size={32} />
            <IoIosArrowForward size={32} />
          </div>
        </div>
        {/* content part */}
        <div className="flex gap-x-8">
          <SingleCategory/>
          <SingleCategory/>
          <SingleCategory/>
          <SingleCategory/>
          <SingleCategory/>
          <SingleCategory/>
        </div>
      </div>
    </section>
  )
}

export default Category