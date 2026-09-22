import Logo from '../assets/logo-text.png'
export default function Nav() {
    
    return(
        <>
        <div>
            <div className='flex justify-between items-center max-w-5xl mx-auto pt-3'>
                <img src={Logo} alt="" />
                <div className='flex list-none gap-5 text-[16px]'>
                    <li><a className='text-[#DB2777]' href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </div>
                <div className='flex items-center gap-2.5 text-[16px] cursor-pointer'>
                    <button>Sign In</button>
                    <button className='cursor-pointer bg-[#DB2777] text-white rounded-4xl px-3.5 py-1.5'>Sign Up</button>
                </div>
            </div>
        </div>
        </>
    ) 
}