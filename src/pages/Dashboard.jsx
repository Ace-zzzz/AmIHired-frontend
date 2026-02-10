import Button from "../components/Button";
import JobCard from "../components/JobCard";
import useModalStore from "../hooks/useModalStore";
import useAuth from "../hooks/useAuth";
import ProfileDropdown from "../components/ProfileDropdown";
import Empty from "../components/Empty";
import { useEffect, useState } from "react";
import api from '../axios/api';

const Dashboard = () => {
    // CUSTOME HOOKS
    const { onOpen } = useModalStore();
    const { user, isLoading } = useAuth(); // USER HAS ONLY EMAIL AND USERNAME PROPERTIES

    const [ jobs, setJobs ] = useState([]);

    // FETCH JOBS
    useEffect(() => {
        if (user?.username) {
            api.get("/v1/job-application/jobs")
               .then(response => setJobs(response.data))
               .catch(error => console.log(error.response?.data));
        }

    }, [user]);

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Add Skeleton later</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Profile Section */}
                <div className="flex justify-center mb-8">
                    <ProfileDropdown {...user} />
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

                {/* Jobs Section */}
                { jobs.length === 0 ? <Empty /> : 
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Interviewing"} appliedAt={"January 05 2026"} salary={"$330"}/>
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Applied"} appliedAt={"January 05 2026"} salary={"$330"}/>
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Applied"} appliedAt={"January 05 2026"} salary={"$330"}/>
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Applied"} appliedAt={"January 05 2026"} salary={"$330"}/>
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Applied"} appliedAt={"January 05 2026"} salary={"$330"}/>
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Applied"} appliedAt={"January 05 2026"} salary={"$330"}/>
                    </div> }
            </div>
        </div>
    );
};

export default Dashboard;