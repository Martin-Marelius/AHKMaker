import Link from "next/link";

const Navbar = () => {
    return (
        <ul className='flex flex-row relative place-content-end gap-10 mr-20 pt-5 bg-inherit'>

            <li className='font-bold font-mono px-4 text-lg text-white transform hover:scale-105 transition-all'>
                <Link href="/">Home</Link>
            </li>

            <li className='font-bold font-mono px-4 text-lg text-white transform hover:scale-105 transition-all'>
                <Link href="/portofolio">Portfolio</Link>
            </li>
            <li className='font-bold font-mono px-4 text-lg text-white transform hover:scale-105 transition-all'>
                <Link href="/blog">Blog</Link>
            </li>
            <li className='font-bold font-mono px-4 text-lg text-white transform hover:scale-105 transition-all'>
                <Link href="/about">About</Link>
            </li>
            <li className='font-bold font-mono px-4 text-lg text-white transform hover:scale-105 transition-all'>
                <Link href="/contact">Contact</Link>
            </li>

        </ul>
    );

}

export default Navbar



