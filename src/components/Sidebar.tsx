import AdminSidebar from './AdminSideBar';
import DOSideBar from './DOSideBar';

interface SidebarProps {
  role: 'admin' | 'official';
}

export default function Sidebar({ role }: SidebarProps) {
  return (
    <>
      {role === 'admin' ? <AdminSidebar /> : <DOSideBar />}
    </>
  );
}
