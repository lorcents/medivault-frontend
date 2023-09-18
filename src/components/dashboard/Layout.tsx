// components/Layout.js
import AppBar from './AppBar';
import LeftNav from './LeftNav'

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <LeftNav />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AppBar />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
