import Button from "../components/Button";
import JobCard from "../components/JobCard";
import useModalStore from "../hooks/useModalStore";
import ProfileDropdown from "../components/ProfileDropdown";

const Dashboard = () => {
    const {onOpen} = useModalStore();

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-6">
                <div className="max-w-7xl mx-auto">
                    {/* Profile Section */}
                    <div className="flex justify-center mb-8">
                        <ProfileDropdown
                            user={{
                                name: "Jane Doe",
                                email: "jane@example.com",
                            }}
                        />
                    </div>

                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900">Job Tracker</h1>
                            <p className="text-gray-600 mt-1">Manage your job applications</p>
                        </div>
                        <Button 
                            onClick={() => onOpen("createJob")}
                            text="+ Add New Job" 
                            className="shadow-lg"
                        />
                    </div>

                    {/* Jobs Grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Interviewing"} appliedAt={"January 05 2026"} salary={"$330"}/>
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Applied"} appliedAt={"January 05 2026"} salary={"$330"}/>
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Applied"} appliedAt={"January 05 2026"} salary={"$330"}/>
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Applied"} appliedAt={"January 05 2026"} salary={"$330"}/>
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Applied"} appliedAt={"January 05 2026"} salary={"$330"}/>
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Applied"} appliedAt={"January 05 2026"} salary={"$330"}/>
                    </div>
                </div>
        </div>
    );
};

export default Dashboard;