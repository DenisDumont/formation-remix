import {Link, Outlet} from "@remix-run/react";

export default function Main() {
    return (
        <>
            <header className="bg-black p-10 text-white max-w-5xl mx-auto">
                <nav>
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/contact/1">Contact 1</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="max-w-5xl mx-auto py-20">
                <Outlet/>
            </main>
            <footer className="max-w-5xl mx-auto bg-gray-300 p-10">Footer</footer>
        </>
    )
}