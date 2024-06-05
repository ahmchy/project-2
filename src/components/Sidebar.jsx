import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="flex h-screen flex-col">
        {/* <Navbar /> */}
        <aside className="z-10 h-screen p-6 sm:w-60 dark:bg-gray-100 dark:text-gray-800">
          <nav className="space-y-8 text-sm">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-widest uppercase dark:text-gray-600">
              <Link className="text-3xls" to="/">Projects 2</Link>
              </h2>
              <div className="flex flex-col space-y-1">
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                {/* <Link to="/migrations">Migrations</Link> */}
              </div>
            </div>
{/*  */}
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
