import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { MapPin, CalendarDays, Tag, CircleCheck } from "lucide-react";

const dummyIssues = [
  {
    id: 1,
    title: "Pothole on Main Street",
    description:
      "A large pothole has formed near the intersection of Main Street and 3rd Avenue. It's causing traffic disruptions and vehicle damage.",
    category: "Pothole",
    status: "Pending",
    date: "2025-05-28",
    location: "Main Street, Block A",
  },
  // ... more issues
];

const statusOptions = ["Pending", "Assigned", "In Progress", "Resolved"];

const statusColor: Record<string, string> = {
  Pending: "text-yellow-700 bg-yellow-100",
  Assigned: "text-purple-700 bg-purple-100",
  "In Progress": "text-blue-700 bg-blue-100",
  Resolved: "text-green-700 bg-green-100",
};

const IssueDetail = () => {
  const role = 'official';
  const { id } = useParams();
  const issueData = useMemo(() => dummyIssues.find((i) => i.id === Number(id)), [id]);

  const [issue, setIssue] = useState(issueData);

  const handleStatusChange = (newStatus: string) => {
    if (!issue) return;
    const updated = { ...issue, status: newStatus };
    setIssue(updated);
    alert(`Status updated to "${newStatus}"`);
  };

  if (!issue)
    return <p className="p-4 text-red-500 font-semibold">Issue not found</p>;

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      {/* Map Section */}
      <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden shadow">
        <iframe
          className="w-full h-full"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(issue.location)}&output=embed`}
          title="Issue Location"
        />
      </div>

      {/* Issue Information */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4 border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-800">{issue.title}</h1>
        <p className="text-gray-600">{issue.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <div className="flex items-center space-x-3">
            <Tag className="text-gray-500" size={20} />
            <p className="text-gray-700">
              <strong>Category:</strong> {issue.category}
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <CircleCheck className="text-gray-500" size={20} />
            <div className="text-gray-700">
              <strong>Status:</strong>{" "}
              

              {role === 'official' ? 
              <>
                  <select
                    value={issue.status}
                    onChange={(e) => handleStatusChange(e.target.value)}
                    className="mt-1 inline-block w-full max-w-[200px] border border-gray-300 bg-white rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
              </>
              :
              <>
              <span
                className={`inline-block px-3 py-1 rounded text-sm font-medium ${statusColor[issue.status]}`}
              >
                {issue.status}
              </span>
              </>

              }

            </div>
          </div>

          <div className="flex items-center space-x-3">
            <CalendarDays className="text-gray-500" size={20} />
            <p className="text-gray-700">
              <strong>Date Reported:</strong>{" "}
              {new Date(issue.date).toLocaleDateString()}
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="text-gray-500" size={20} />
            <p className="text-gray-700">
              <strong>Location:</strong> {issue.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetail;
