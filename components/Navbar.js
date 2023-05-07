import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    {/* <Image src="/logo.png" alt="To-do List Logo" width={128} height={77}></Image> */}
                    <h1 className="logo">TODOLIST</h1>
                </Link>
            </div>
            <Link href="/">Home</Link>
            <Link className="navButton" href="/tasks/create">New Task</Link>
        </nav>
    );
}

export default Navbar;