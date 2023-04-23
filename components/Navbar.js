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
            <Link className="navButton" href="/create" style={{
                backgroundColor: '#0c2d48',
                color: "white",
                borderRadius: '8px',
                // border: '1px solid #0c2d48',
                // fontWeight: 'bold'
            }}>New Task</Link>
        </nav>
    );
}

export default Navbar;