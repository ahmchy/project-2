const TechCard = ({ skills }) => {
  // console.log(projtecects);
  return (
    <div id="skills" className="max-w-screen-xl mt-10 mx-auto">
      <p className="mt-10 text-6xl font-bold "> Skills</p>
      <div className="grid pt-10 grid-cols-5 pb-5 gap-7">
        {" "}

        {skills.map((skill, index) => (
          <div key={index} className="p-1 ">
    <div className="p-8 bg-white border-2 rounded shadow-md">
        <h2 className="text-2xl pt-2 font-bold text-gray-800">{skill.name}</h2>
        <p className="text-gray-600">{
                          skill.description.length > 110
                            ? skill.description.slice(0, 70) + "..."
                            : skill.description
}
</p>
    </div>
</div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
