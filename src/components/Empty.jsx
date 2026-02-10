const EmptyState = () => {
    return (
        <div className="flex flex-col justify-center items-center sm:h-90 h-70">
            <div>
                <img src="/images/DoogieDoodle.svg" alt="EMPTY" className="sm:h-60 h-40"/>
            </div>
            <div className="text-center">
                <p className="font-bold sm:text-2xl text-xl">You Have no any Job Application</p>
                <span className="text-gray-600 sm:text-sm text-xs">Start Looking and Track Your Job Apllication Now.</span>
            </div>
        </div>
    );
}

export default EmptyState;