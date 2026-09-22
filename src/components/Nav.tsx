import Logo from '../assets/logo-text.png'
export default function Nav() {
    
    return(
        <>
        <div>
            <div className='flex justify-between items-center max-w-5xl mx-auto pt-3'>
                <img src={Logo} alt="" />
                <div className='flex list-none gap-5'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </div>
                <div className='flex gap-2.5'>
                    <p>Sign In</p>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
        </>
    ) 
}