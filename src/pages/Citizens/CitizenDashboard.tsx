// pages/citizen/Dashboard.tsx
import WelcomeBanner from "../../components/WelcomeBanner";
import QuickActions from "../../components/QuickActions";
import RecentIssues from "../../components/RecentIssues";
import ActiveProposals from "../../components/ActiveProposals";
import Notifications from "../../components/Notifications";

const CitizenDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <WelcomeBanner />
      {/* <QuickActions /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentIssues />
        <ActiveProposals />
      </div>
      <Notifications />
    </div>
  );
};

export default CitizenDashboard;
