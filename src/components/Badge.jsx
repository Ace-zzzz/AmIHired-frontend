const Badge = ({status, className=""}) => {
    return (
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border border-blue-200 ${className}`}>
            {status}
        </span>
    )
}

export default Badge;