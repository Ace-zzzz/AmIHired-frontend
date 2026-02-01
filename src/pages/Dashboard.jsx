import { useState } from "react";
import Button from "../components/Button";
import JobCard from "../components/JobCard";
import JobModal from "../components/JobModal";

const Dashboard = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-6">
                <div className="max-w-7xl mx-auto">
                    {/* Profile Section - Compact */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-8 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                    JD
                                </div>
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-900">John Doe</h2>
                                    <p className="text-xs text-gray-500">Software Engineer • San Francisco, CA</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-gray-600">
                                <span>john.doe@example.com</span>
                                <span>•</span>
                                <span>+1 (555) 123-4567</span>
                                <button className="text-gray-900 hover:text-gray-600 underline ml-2">
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900">Job Tracker</h1>
                            <p className="text-gray-600 mt-1">Manage your job applications</p>
                        </div>
                        <Button 
                            onClick={handleOpen}
                            text="+ Add New Job" 
                            className="shadow-lg"
                        />
                    </div>

                    {/* Jobs Grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Applied"} appliedAt={"January 05 2026"} salary={"$330"}/>
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Applied"} appliedAt={"January 05 2026"} salary={"$330"}/>
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Applied"} appliedAt={"January 05 2026"} salary={"$330"}/>
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Applied"} appliedAt={"January 05 2026"} salary={"$330"}/>
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Applied"} appliedAt={"January 05 2026"} salary={"$330"}/>
                        <JobCard company={"Google"} role={"Backend Developer"} status={"Applied"} appliedAt={"January 05 2026"} salary={"$330"}/>
                    </div>

                    {open ? <JobModal isOpen={open} onClose={handleClose} /> : ""}
                </div>
        </div>
    );
};

export default Dashboard;