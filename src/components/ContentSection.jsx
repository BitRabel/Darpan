export default function ContentSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      {/* Hero Section with Darpan branding */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-20">
        <div className="inline-flex items-center mb-6 bg-blue-100 px-4 py-2 rounded-full">
          <span className="text-blue-800 font-medium">Darpan</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
          Transform Your Journey with <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Darpan's Expert Guidance
          </span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <p className="text-lg text-gray-600">
            Darpan brings 10+ years of teaching experience to Darpan, offering unparalleled insights into Maths, Physics, and Chemistry. His proven methods help students consistently achieve top scores.
          </p>
          <p className="text-lg text-gray-600">
            Through to Darpan provides structured learning paths, exam strategies, and personalized feedback - combining traditional teaching excellence with digital innovation.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section with Darpan */}
          <div className="lg:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Darpan teaching concepts"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900">10+ Years Experience</p>
                  <p className="text-sm text-gray-500">Teaching Specialist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Darpan's <span className="text-blue-600">Signature</span> <br />
              Teaching Methodology
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <span className="text-blue-600 font-bold">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Concept Mastery Framework</h3>
                  <p className="text-gray-600">
                    Break down complex topics into manageable building blocks with Darpan's structured approach.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <span className="text-blue-600 font-bold">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Exam-Focused Strategies</h3>
                  <p className="text-gray-600">
                    Learn proven techniques to tackle exam questions efficiently and maximize your scoring potential.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <span className="text-blue-600 font-bold">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Progress Tracking</h3>
                  <p className="text-gray-600">
                    Get customized feedback and improvement plans tailored to your learning pace and weaknesses.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md">
                Explore Darpan's Courses
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
                Watch Teaching Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}