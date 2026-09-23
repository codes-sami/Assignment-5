import FooterImg from '../assets/logo-text.png'

export function Footer() {
    
    return(
        <>
        <div>
            <div className="max-w-6xl mx-auto mt-22 py-6 px-3">
                <div className="grid grid-cols-5 gap-10">
                    <div className='col-span-2 flex flex-col gap-5'>
                        <img className='w-32' src={FooterImg} alt="" />
                        <p className='text-[12px] font-normal text-[#64748B]'>Curated tools, technologies, and resources for developers building modern software.</p>
                        <div className='flex gap-3 text-[#475569] text-[12px] semi-bold'>
                            <p>GitHub</p>
                            <p>Twitter</p>
                            <p>LinkedIn</p>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col gap-4'>
                    <p className='text-[12px] font-bold text-[#0F172A]'>PRODUCT</p>
                    <div className='font-normal text-[12px] flex flex-col gap-2.5 text-[#64748B]'>
                        <p>Home</p>
                        <p>Technologies</p>
                        <p>Projects</p>
                    </div>
                    </div>
                    <div className='col-span-1 flex flex-col gap-4'>
                    <p className='text-[12px] font-bold text-[#0F172A]'>COMPANY</p>
                    <div className='font-normal text-[12px] flex flex-col gap-2.5 text-[#64748B]'>
                        <p>About</p>
                        <p>Contact</p>
                        <p>Careers</p>
                    </div>
                    </div>
                    <div className='col-span-1 flex flex-col gap-4'>
                        <p className='text-[12px] font-bold text-[#0F172A]'>LEGAL</p>
                        <div className='font-normal text-[12px] flex flex-col gap-2.5 text-[#64748B]'>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-12 text-[12px] text-[#94A3B8]">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className='flex gap-2.5'>
                        <p>Privacy</p>
                        <p>Terms</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    ); 
}