import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    <Image src="/logo.png" alt="To-do List Logo" width={128} height={77}></Image>
                </Link>
            </div>
            <Link href="/">Home</Link>
            <Link href="/create">New Task</Link>
        </nav>
    );
}

export default Navbar;