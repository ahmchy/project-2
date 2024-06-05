const Project = ({ projects }) => {
  console.log(projects);
  return (
    <div id="projects" className="max-w-screen-xl pt mx-auto">
      <p className="mt-10 text-6xl font-bold "> Projects</p>
      <div className="grid grid-cols-3 pt-10 gap-5 pb-5">
        {" "}
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full h-full flex justify-center items-center"
          >
            <div className="w-[20rem] mx-auto flex flex-col gap-2 px-4 shadow-lg border border-gray-300  rounded-lg bg-white dark:bg-gray-900 hover:shadow-2xl shadow-green-500/40 hover:shadow-green-500">
              <div className="w-full h-full text-center flex flex-col gap-4 ">
                <h2 className="text-xl font-serif capitalize pt-5 font-semibold text-gray-700 dark:text-gray-300">
                  {project.name}
                </h2>

                <h3 className="text-xl text-white md:text-2xl mt-10">
                  {project.description.length > 110
                    ? project.description.slice(0, 50) + "..."
                    : project.description}{" "}
                </h3>
                <div className="grid grid-cols-2 gap-3.5 pb-10 mt-10 justify-center">
                  {project.technologies.map((item, index) => (
                    <button
                      key={index}
                      className=" bg-blue-500 text-white rounded-3xl px-2 py-2"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
