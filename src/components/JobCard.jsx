import Button from "./Button";
import Badge from "./Badge";

const JobCard = ({company, role, status, appliedAt, salary}) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-200">
            <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{company}</h3>
                    <p className="text-gray-600 mt-1">{role}</p>
                </div>
                <Badge status={"Applied"} className="bg-amber-200"/>
            </div>
            
            <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {appliedAt}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {salary}
                </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-gray-100">
                <Button text={"Edit"} primary={false}/>
                <Button text={"Delete"} primary={false}/>
            </div>
        </div>
    )
}

export default JobCard;