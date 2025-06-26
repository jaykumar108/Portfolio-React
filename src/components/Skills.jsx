import React from "react";

const Skills = () => {
  return (
    <>
      <style jsx>{`
        @keyframes flip {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }
        .animate-flip {
          animation: flip 2s infinite linear;
          transform-style: preserve-3d;
        }
      `}</style>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Equipped with a diverse set of technologies and tools to build cutting-edge web applications.</p>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {/* Skill 1 - React */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden animate-spin" style={{animationDuration: '3s'}}>
                <img 
                  src="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" 
                  alt="React" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">React</h3>
            </div>
            
            {/* Skill 2 - JavaScript */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" 
                  alt="JavaScript" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">JavaScript</h3>
            </div>
            
            {/* Skill 3 - HTML5 */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" 
                  alt="HTML5" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">HTML5</h3>
            </div>
            
            {/* Skill 4 - CSS */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://img.icons8.com/?size=100&id=WlXoMrd84l96&format=png&color=000000" 
                  alt="CSS3" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">CSS</h3>
            </div>
            
            {/* Skill 5 - Tailwind CSS */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden animate-flip" style={{animationDuration: '2s'}}>
                <img 
                  src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000" 
                  alt="Tailwind CSS" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">Tailwind CSS</h3>
            </div>
            
          
            
            {/* Skill 6 - MongoDB */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden animate-flip" style={{animationDuration: '2.5s'}}>
                <img 
                  src="https://img.icons8.com/?size=100&id=74402&format=png&color=000000" 
                  alt="MongoDB" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">MongoDB</h3>
            </div>

              {/* Skill 6 - Node.js */}
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" 
                  alt="Node.js" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">Node.js</h3>
            </div>
            
            {/* Skill 8 - Excel */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://img.icons8.com/?size=100&id=117561&format=png&color=000000" 
                  alt="Excel" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">Excel</h3>
            </div>
            
            {/* Skill 9 - Canva */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000" 
                  alt="Canva" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">Canva</h3>
            </div>
            
            {/* Skill 10 - WordPress */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden animate-flip" style={{animationDuration: '3s'}}>
                <img 
                  src="https://img.icons8.com/?size=100&id=46972&format=png&color=000000" 
                  alt="WordPress" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-800">WordPress</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills; 