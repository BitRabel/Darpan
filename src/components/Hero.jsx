import { FaBookOpen, FaFlask, FaLeaf, FaCalculator, FaChartBar } from "react-icons/fa";

export default function HeroHeader() {
  const subjects = [
    { name: "Math", icon: <FaCalculator className="text-red-400" /> },
    { name: "Physics", icon: <FaBookOpen className="text-blue-400" /> },
    { name: "Chemistry", icon: <FaFlask className="text-purple-400" /> },
    { name: "Biology", icon: <FaLeaf className="text-green-400" /> },
    { name: "English", icon: <FaChartBar className="text-yellow-400" /> },
  ];

  return (
    <div className="relative bg-yellow-500 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/path-to-your-image.jpg')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center py-20 px-4">
        <h1 className="text-5xl font-bold">Darpan</h1>
        <p className="mt-2 text-lg">
        A mirror or portal of student knowledge.
          Start your success journey today!
        </p>

        {/* Subject Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {subjects.map((subject, index) => (
            <button
              key={index}
              className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-white hover:bg-gray-700 transition"
            >
              {subject.icon}
              {subject.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
