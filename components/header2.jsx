function Header2() {
    return (
        <div className="bg-grey-100">
            <div className="px-4 mx-auto max-w-7xl ">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    {/* logo */}
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                    </div>
                    {/* primary nav */}
                    <div>primary nav</div>
                    {/* secondary nav */}
                    <div>secondary nav</div>
                    {/* mobile view */}
                    <div className="md:hidden">mobile view</div>
                </div>
            </div>
        </div>
    );
}

export default Header2;
