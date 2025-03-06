import Phone from '/phone.svg'

const SingleCategory = () => {
    return (
        <div>
            <div className="w-[160px] py-6 grid place-items-center gap-2 bg-[#EDEDED] rounded-[15px]">
                <img src={Phone} alt="" className="w-12 h-12 object-cover" />
                <h5>Phones</h5>
            </div>
        </div>
    )
}

export default SingleCategory