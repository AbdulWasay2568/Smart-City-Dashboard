import ReportFilterPanel from "../../components/ReportFilterPanel";

const ReportsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">📄 Generate Reports</h2>
      <ReportFilterPanel />
    </div>
  );
};

export default ReportsPage;
