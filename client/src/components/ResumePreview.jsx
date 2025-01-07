const ResumePreview = ({ resumeData }) => {
  const { personalInfo, experience, education, skills } = resumeData;
  const isEmpty = !personalInfo.fullName && !personalInfo.email && !personalInfo.phone && 
                 !personalInfo.location && !personalInfo.summary && 
                 experience.length === 0 && education.length === 0 && skills.length === 0;

  const renderSkillLevel = (level) => {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-24 bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-gray-800 rounded-full h-1.5"
            style={{ width: `${level}%` }}
          />
        </div>
        <span className="text-sm text-gray-600 min-w-[40px]">{level}%</span>
      </div>
    );
  };

  if (isEmpty) {
    return (
      <div className="flex items-center justify-center text-gray-400 h-full">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium">No content yet</h3>
          <p className="mt-1 text-sm">Start filling out your information to see your resume here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 h-full bg-white text-gray-800">
      {/* Header Section */}
      <div className="flex gap-6 mb-8">
        {/* Profile Picture */}
        {personalInfo.profilePicture && (
          <div className="w-32 h-32 flex-shrink-0">
            <img 
              src={personalInfo.profilePicture} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-full border-4 border-gray-800"
            />
          </div>
        )}

        {/* Name and Contact Info */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900">{personalInfo.fullName}</h1>
          {personalInfo.title && (
            <h2 className="text-2xl text-gray-700 mt-1">{personalInfo.title}</h2>
          )}
          <div>
            <div className="bg-gray-900 text-white p-2 rounded mb-2">
              <h2 className="font-bold text-lg">Contact</h2>
            </div>
            <div className="grid gap-2 px-2">
              {personalInfo.location && (
                <div className="flex items-center gap-3">
                  <span className="w-20 flex-shrink-0">Location:</span>
                  <span className="flex-1">{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-3">
                  <span className="w-20 flex-shrink-0">Phone:</span>
                  <span className="flex-1">{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.email && (
                <div className="flex items-center gap-3">
                  <span className="w-20 flex-shrink-0">Email:</span>
                  <span className="flex-1">{personalInfo.email}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      {personalInfo.summary && (
        <div className="mb-6">
          <div className="bg-gray-900 text-white p-2 rounded mb-2">
            <h2 className="font-bold">About Me</h2>
          </div>
          <p className="text-sm">{personalInfo.summary}</p>
        </div>
      )}

      {/* Personal Information Section */}
      <div className="mb-6">
        <div className="bg-gray-900 text-white p-2 rounded mb-4">
          <h2 className="font-bold">Personal Information</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {personalInfo.dateOfBirth && (
            <div>
              <span className="font-semibold">Date of Birth: </span>
              <span>{personalInfo.dateOfBirth}</span>
            </div>
          )}
          {personalInfo.age && (
            <div>
              <span className="font-semibold">Age: </span>
              <span>{personalInfo.age}</span>
            </div>
          )}
          {personalInfo.gender && (
            <div>
              <span className="font-semibold">Gender: </span>
              <span>{personalInfo.gender}</span>
            </div>
          )}
          {personalInfo.civilStatus && (
            <div>
              <span className="font-semibold">Civil Status: </span>
              <span>{personalInfo.civilStatus}</span>
            </div>
          )}
          {personalInfo.religion && (
            <div>
              <span className="font-semibold">Religion: </span>
              <span>{personalInfo.religion}</span>
            </div>
          )}
          {personalInfo.citizenship && (
            <div>
              <span className="font-semibold">Citizenship: </span>
              <span>{personalInfo.citizenship}</span>
            </div>
          )}
          {personalInfo.height && (
            <div>
              <span className="font-semibold">Height: </span>
              <span>{personalInfo.height}</span>
            </div>
          )}
          {personalInfo.weight && (
            <div>
              <span className="font-semibold">Weight: </span>
              <span>{personalInfo.weight}</span>
            </div>
          )}
          {personalInfo.fatherName && (
            <div>
              <span className="font-semibold">Father's Name: </span>
              <span>{personalInfo.fatherName}</span>
            </div>
          )}
          {personalInfo.motherName && (
            <div>
              <span className="font-semibold">Mother's Name: </span>
              <span>{personalInfo.motherName}</span>
            </div>
          )}
        </div>
      </div>

      {/* Skills Section */}
      {skills.length > 0 && (
        <div className="mb-6">
          <div className="bg-gray-900 text-white p-2 rounded mb-2">
            <h2 className="font-bold">Skills</h2>
          </div>
          <div className="space-y-2">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium">{skill.name}</span>
                {renderSkillLevel(skill.level)}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <div className="mb-6">
          <div className="bg-gray-900 text-white p-2 rounded mb-2">
            <h2 className="font-bold">Education</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-1">
                  <p className="font-bold">{edu.school}</p>
                  <p className="text-sm">{edu.degree}</p>
                  {edu.description && <p className="text-sm text-gray-600">{edu.description}</p>}
                </div>
                <div className="text-sm text-gray-600">{edu.year}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Achievements Section */}
      {personalInfo.achievements && personalInfo.achievements.length > 0 && (
        <div className="mb-6">
          <div className="bg-gray-900 text-white p-2 rounded mb-2">
            <h2 className="font-bold">Achievements</h2>
          </div>
          <div className="space-y-2">
            {personalInfo.achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 mt-1.5 bg-gray-900 rounded-full"></div>
                <p className="text-sm">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hobbies Section */}
      {personalInfo.hobbies && personalInfo.hobbies.length > 0 && (
        <div className="mb-6">
          <div className="bg-gray-900 text-white p-2 rounded mb-2">
            <h2 className="font-bold">Hobbies</h2>
          </div>
          <div className="space-y-1">
            {personalInfo.hobbies.map((hobby, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-sm">• {hobby}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
