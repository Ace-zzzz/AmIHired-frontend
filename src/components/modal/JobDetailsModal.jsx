import { useEffect, useState } from "react";
import api from '../../axios/api';

const JobDetailModal = ({isOpen = false, onClose, data}) => {   
    const [job, setJob] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isOpen || !data) return;

        setIsLoading(true);
        setJob(null);

        const controller = new AbortController;
        const signal = controller.signal;

        const getJob = async () => {
            try {
                const response = await api.get(`/v1/job-application/jobs/${data}`);
                setJob(response.data);
            }
            catch (error) {
            }
            finally {
                if (!signal.aborted) setIsLoading(false);
            }
        };

        getJob();

        return () => {
            controller.abort();
        }

    }, [data, isOpen]);

    const formatLabel = (key) => key
        .replace(/([A-Z])/g, ' $1')
        .replace(/_/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/^\w/, (char) => char.toUpperCase());

    const formatValue = (value) => {
        if (value === null || value === undefined || value === '') return '-';
        if (typeof value === 'boolean') return value ? 'Yes' : 'No';
        if (Array.isArray(value)) return value.length ? value.join(', ') : '-';
        if (typeof value === 'object') return JSON.stringify(value, null, 2);
        return String(value);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        {/* Backdrop */}
        <div 
            className="absolute inset-0"
            onClick={onClose}
        ></div>
        
        {/* Modal */}
        <div className="animate-fade-in relative bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-hidden mx-4">
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-200 bg-white">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-semibold text-yellow-500">Job Details</h2>
                        <p className="text-gray-500 text-sm mt-1">Application overview</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md w-9 h-9 flex items-center justify-center transition-colors text-2xl leading-none"
                    >
                        &times;
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="px-6 py-5 max-h-[calc(90vh-110px)] overflow-y-auto">
                { isLoading && (
                    <div className="flex flex-col items-center justify-center py-12">
                        <div className="relative">
                            <div className="w-10 h-10 border-2 border-blue-200 rounded-full"></div>
                            <div className="w-10 h-10 border-2 border-blue-600 rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
                        </div>
                        <p className="text-gray-600 mt-3 text-sm">Loading job details...</p>
                    </div>
                )}

                { !isLoading && job && (
                    <div className="rounded-lg border border-gray-200 overflow-hidden">
                        {Object.entries(job).map(([key, value], index) => {
                            const renderedValue = formatValue(value);

                            return (
                                <div key={key} className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-4 px-4 py-3 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                    <div className="text-sm font-medium text-gray-600">
                                        {formatLabel(key)}
                                    </div>
                                    <div className="text-sm text-gray-900 wrap-break-word">
                                        {typeof value === 'object' && value !== null && !Array.isArray(value) ? (
                                            <pre className="text-xs bg-white p-2 rounded border border-gray-200 overflow-x-auto">
                                                {renderedValue}
                                            </pre>
                                        ) : (
                                            renderedValue
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                { !isLoading &&  !job && (
                    <p className="text-sm text-gray-500">No job details available.</p>
                )}
            </div>
        </div>
        </div>
    );
}

export default JobDetailModal;