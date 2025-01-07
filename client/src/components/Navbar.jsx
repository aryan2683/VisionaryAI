import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
const Navbar = () => {

    const {user,setShowLogin,logout,credit}=useContext(AppContext)

    const navigate = useNavigate()

    

    return (
        <div className='flex items-center justify-between gap:4 py-4 mt-0 revolving-border border-2 p-7  '>
            <Link to='/'><img src={assets.logo} alt=""  className='w-55 sm:w-35 lg:w-45 h-20  ' />
            </Link>

            <div>
                {user ?
                    <div className='flex items-center gap-3 sm:gap-3 '>
                        <button onClick={()=>navigate('/buy')} className='flex items-center gap-2 sm:gap-3 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                            <img className='w-5' src={assets.credit_star} alt="" />
                            <p className='text-xs sm:text-sm font-medium text-gray-600 '>Credits left: {credit}</p>
                        </button>
                        <p className='font-medium text-gray-600 max-sm:hidden pl-4'>Hey! {user.name} </p>
                        <div className='relative group'>
                            <img src={assets.profile_icon} className='w-10 drop-shadow ' alt="" />
                            <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                                <ul className='list-none m-0 p-2 bg-white rounded-medium border text-small '>
                                    <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10 '>Logout</li>
                                </ul> 

                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex items-center gap-2 sm:gap-9 '>
                        <p onClick={() => navigate('/buy')} className='bg-red-600 text-white px-8 py-3 sm:px-12 sm:py-3.5 text-base rounded-full cursor-pointer font-semibold  '>Pricing</p>
                        <button onClick={()=>setShowLogin(true)}  className='bg-zinc-800 text-white px-8 py-3  sm:px-12 sm:py-3.5 text-base rounded-full font-semibold'>LogIn</button>
                    </div>}



            </div>
        </div>
    )
}

export default Navbar
