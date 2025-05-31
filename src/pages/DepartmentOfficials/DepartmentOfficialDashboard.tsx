import DepartmentWelcomeBanner from "../../components/DepartmentWelcomeBanner";
import DepartmentStats from "../../components/DepartmentStats";
import RecentIssues from "../../components/RecentIssues";

const OfficialDashboard = () => {
  return (
    <div className="flex-row w-full p-6 space-y-6">
      <DepartmentWelcomeBanner />
      <DepartmentStats />
      <div className="">
        <RecentIssues />
      </div>
    </div>
  );
};

export default OfficialDashboard;
