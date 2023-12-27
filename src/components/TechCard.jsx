const TechCard = ({ skills }) => {
  // console.log(projtecects);
  return (
    <div id="skills" className="max-w-screen-xl mx-auto" >
      <p className="mt-10 text-6xl font-bold "> Skills</p>
      <div className="grid grid-cols-5 pb-5 gap-7">
        {" "}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="mx-auto my-10 transition duration-300 ease-in-out border border-solid shadow-md hover:scale-110 bg-accent/10 bg-opacity-10 border-info/10 rounded-small bg-zinc-50 hover:border hover:border-warning/50 lg:my-14"
          >
            <a
              //   to={`/projectdetails/${project.slug}`}
              className="flex flex-col "
            >
              <div className="flex flex-col justify-around pt-5 mt-5 md:pt-0">
                <div className="">
                  <h2 className="pl-5 text-2xl font-semibold text-left capitalize md:text-2xl lg:text-3xl">
                    {skill.name}
                  </h2>
                  <div className="px-5 pt-4 pb-5 text-left text-black md:text-xs lg:text-lg lg:block">
                    {skill.description.length > 110
                      ? skill.description.slice(0, 50) + "..."
                      : skill.description}{" "}
                  </div>
                </div>

              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
