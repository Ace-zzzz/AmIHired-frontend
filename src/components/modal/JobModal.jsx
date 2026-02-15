import Button from '../Button';
import Input from '../Input';
import Label from '../Label';

const JobModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Backdrop */}
      <div 
        className="absolute inset-0"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="animate-fade-in relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-4  sm:max-w-lg">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Add New Job</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              &times;
            </button>
          </div>

          {/* Form */}
          <form>
            <div className="space-y-4">
              {/* Company Name */}
              <div>
                <Label label="Company Name *" />
                <Input
                  type="text"
                  name="company"
                  placeholder="e.g., Google"
                  required={true}
                />
              </div>

              {/* Position */}
              <div>
                <Label label="Position *" />
                <Input
                  type="text"
                  name="position"
                  placeholder="e.g., Frontend Developer"
                  required={true}
                />
              </div>

              {/* Job URL */}
              <div>
                <Label label="Job URL" />
                <Input
                  type="url"
                  name="jobUrl"
                  placeholder="https://..."
                />
              </div>

              {/* Salary */}
              <div>
                <Label label="Salary *" />
                <Input
                  type="text"
                  name="salary"
                  placeholder="e.g., $80k - $120k"
                  required={true}
                />
              </div>

              {/* Work Model */}
              <div>
                <Label label="Work Model *" />
                <select
                  name="status"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value={null} className="hidden">Select</option>
                  <option value="applied">On-site</option>
                  <option value="interviewing">Work From Home</option>
                  <option value="offer">Hybrid</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <Label label="Status *" />
                <select
                  name="status"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value={null} className="hidden">Select</option>
                  <option value="applied">Applied</option>
                  <option value="interviewing">Interviewing</option>
                  <option value="offer">Offer</option>
                  <option value="rejected">Rejected</option>
                  <option value="wishlist">Wishlist</option>
                </select>
              </div>

              {/* Job Type */}
              <div>
                <Label label="Job Type *" />
                <select
                  name="status"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value={null} className="hidden">Select</option>
                  <option value="applied">Full-time</option>
                  <option value="interviewing">Part-time</option>
                  <option value="offer">Intenship</option>
                </select>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 mt-6">
              <Button
                text={"Cancel"}
                type="button"
                primary={false}
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              />
              <Button
                text={"Add Job"}
                type="submit"
                primary={false}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
