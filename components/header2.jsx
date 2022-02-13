import { Link } from "react-scroll";




function Header2() {
    return (
        <div className="bg-grey-100 border-b-2 border-gray-100">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 ">
                <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
                    {/* logo */}
                    <div className="flex justify-start flex-1">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                    </div>
                    {/* primary nav */}
                    <nav className="flex justify-center  flex-1">
                        <a href="#" className="px-3 font-semibold  text-gray-500 hover:text-gray-900" >Home</a>
                        <a href="#" className="px-3 font-semibold  text-gray-500 hover:text-gray-900" >Blog</a>
                        <a href="#" className="px-3 font-semibold  text-gray-500 hover:text-gray-900" >Service</a>
                        <a href="#" className="px-3 font-semibold  text-gray-500 hover:text-gray-900" >About</a>
                                           </nav>
                    {/* secondary nav */}
                    <div className="flex justify-end flex-1 items-center">
                        <a href="#" className="whitespace-nowrap items-center text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in
                        </a>
                        <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Sign up
                        </a>
                    </div>
                    {/* mobile view */}
                    <div className="md:hidden">mobile view</div>
                </div>
            </div>
        </div>
    );
}

export default Header2;
