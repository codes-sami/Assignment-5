import Hero from '../assets/banner-stack.png'
export default function Banner() {
    
    return(
        <>
        <div>
        <div className='flex h-87.5 justify-between items-center mt-10 max-w-5xl mx-auto '>
            <div className='flex flex-col space-y-6'>
                <p className='font-extrabold text-5xl'>Build Your Ideal <br /> <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></p>
                <p className='text-[14px] text-[#475569]'>Explore frontend, backend, database, and tooling options <br /> compare them side by side, and put together the stack that fits <br /> your next project.</p>
                <div className='flex gap-4'>
                    <button className='bg-linear-to-r from-[#F97316] to-[#EC4899] px-3.5 py-2.25 font-semibold rounded-lg text-[12px] cursor-pointer'>Explore Technologies</button>

                    <button className='px-10 py-2.25 font-normal rounded-lg text-[12px] bg-white border border-[#E5E7EB] cursor-pointer'>Learn More</button>
                </div>
            </div>
            <div><img className='h-100' src={Hero} alt="" /></div>
        </div>
        </div>
        </>
    ) 
}