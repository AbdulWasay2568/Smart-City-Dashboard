import React, { useState, useMemo } from "react";
import IssueStatusCard from "../../components/IssueStatusCard";
import { FaFilter } from "react-icons/fa";

const dummyIssues = [
  {
    id: 1,
    title: "Pothole on Main Street",
    category: "Pothole",
    status: "Resolved",
    date: "2025-05-28",
  },
  {
    id: 2,
    title: "Streetlight not working",
    category: "Streetlight",
    status: "In Progress",
    date: "2025-05-30",
  },
  {
    id: 3,
    title: "Garbage bin overflowing",
    category: "Sanitation",
    status: "Pending",
    date: "2025-05-31",
  },
];

const statusOptions = ["Pending", "Assigned", "In Progress", "Resolved"];

const IssuesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Filters state
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [statusFilters, setStatusFilters] = useState<string[]>([]);

  // Handle status checkbox toggle
  const toggleStatus = (status: string) => {
    setStatusFilters((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  // Filter and sort issues based on search term and filters
  const filteredIssues = useMemo(() => {
    let filtered = dummyIssues.filter(
      (issue) =>
        issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (statusFilters.length > 0) {
      filtered = filtered.filter((issue) =>
        statusFilters.includes(issue.status)
      );
    }

    if (dateFrom) {
      filtered = filtered.filter((issue) => issue.date >= dateFrom);
    }
    if (dateTo) {
      filtered = filtered.filter((issue) => issue.date <= dateTo);
    }

    filtered.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.date.localeCompare(b.date);
      } else {
        return b.date.localeCompare(a.date);
      }
    });

    return filtered;
  }, [searchTerm, sortOrder, dateFrom, dateTo, statusFilters]);

  return (
    <div className="p-6 relative">
      {/* Heading + Search + Filter */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">🗂️ My Reported Issues</h2>

        {/* Search and Filter */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search issues..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2 rounded-md hover:bg-indigo-600 transition-colors"
            aria-label="Open Filters"
          >
            <FaFilter className="text-indigo-700" size={18} />
          </button>
        </div>
      </div>

      {/* Issues List */}
      <div className="grid gap-4">
        {filteredIssues.length > 0 ? (
          filteredIssues.map((issue) => (
            <IssueStatusCard key={issue.id} issue={issue} />
          ))
        ) : (
          <p className="text-gray-500 text-center">No issues found.</p>
        )}
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 backdrop-blur-sm bg-white/80 shadow-lg z-50 transform transition-transform duration-300 flex flex-col p-6 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h3 className="text-lg font-semibold mb-4">Filter Issues</h3>

        {/* Sort */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Sort by Date</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        {/* Date From */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">From</label>
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>

        {/* Date To */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">To</label>
          <input
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>

        {/* Status Filters */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">Status</label>
          <div className="flex flex-col gap-2 max-h-32 overflow-y-auto border border-gray-200 rounded-md p-2">
            {statusOptions.map((status) => (
              <label key={status} className="inline-flex items-center gap-2 cursor-pointer text-sm select-none">
                <input
                  type="checkbox"
                  checked={statusFilters.includes(status)}
                  onChange={() => toggleStatus(status)}
                  className="form-checkbox h-4 w-4 text-indigo-600"
                />
                {status}
              </label>
            ))}
          </div>
        </div>

        {/* Close Drawer */}
        <button
          onClick={() => setDrawerOpen(false)}
          className="mt-auto py-2 px-4 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default IssuesPage;
