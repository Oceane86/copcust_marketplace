import Link from 'next/link';
import logo from '../public/images/logo_mini_copcust_blanc.svg'
import Image from 'next/image';
import search from '../public/images/search.png'
import shopping from '../public/images/shopping.png'
import user from '../public/images/user.png'
import menu from '../public/images/menu-burger-mobile.png'


export const NavBar = () => {
    return (
        <nav>
             <div className='logo'>
             <Link href="/" passHref>
                <Image src={logo} alt="Logo" width={50} height={50} />
            </Link>
            </div>
            <div className="right-links">
                <ul>
                    <li>
                    <Link href="/" passHref>
                        <Image src={search} alt="Serach" width={30} height={30} />
                    </Link>
                    </li>
                    <li>
                    <Link href="/" passHref>
                        <Image src={shopping} alt="Shopping" width={30} height={30} />
                    </Link>
                    </li>
                    <li>
                    <Link href="/" passHref>
                        <Image src={user} alt="User" width={30} height={30} />
                    </Link>
                    </li>
                    <li>
                    <Link href="/" passHref>
                        <Image src={menu} alt="menu" width={30} height={30} />
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
