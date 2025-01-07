import { useState } from 'react';

const ResumeForm = ({ resumeData, onUpdateResume, activeTab }) => {
  const [newSkill, setNewSkill] = useState({ name: '', level: '50' });
  const [newEducation, setNewEducation] = useState({
    school: '',
    degree: '',
    year: '',
    description: ''
  });
  const [newAchievement, setNewAchievement] = useState('');
  const [newHobby, setNewHobby] = useState('');

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            value={resumeData.personalInfo.fullName}
            onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
            placeholder="Enter your full name"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={resumeData.personalInfo.title}
            onChange={(e) => handlePersonalInfoChange('title', e.target.value)}
            placeholder="e.g. Student"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
          <div className="mt-1 flex items-center space-x-4">
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="profile-upload"
              />
              <label
                htmlFor="profile-upload"
                className="cursor-pointer inline-block"
              >
                {resumeData.personalInfo.profilePicture ? (
                  <img
                    src={resumeData.personalInfo.profilePicture}
                    alt="Profile"
                    className="w-24 h-24 object-cover border-2 border-gray-300 rounded"
                  />
                ) : (
                  <div className="w-24 h-24 border-2 border-gray-300 border-dashed rounded flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                )}
              </label>
              {resumeData.personalInfo.profilePicture && (
                <button
                  type="button"
                  onClick={() => handlePersonalInfoChange('profilePicture', '')}
                  className="absolute -top-2 -right-2 bg-gray-500 text-white rounded-full p-1 hover:bg-gray-600"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={resumeData.personalInfo.email}
            placeholder="e.g. student@example.com"
            onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            value={resumeData.personalInfo.phone}
            onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
            placeholder="e.g. +1234567890"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            value={resumeData.personalInfo.location}
            placeholder="e.g. New York, USA"
            onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            value={resumeData.personalInfo.dateOfBirth}
            onChange={(e) => handlePersonalInfoChange('dateOfBirth', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            value={resumeData.personalInfo.age}
            onChange={(e) => handlePersonalInfoChange('age', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            value={resumeData.personalInfo.gender}
            onChange={(e) => handlePersonalInfoChange('gender', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Civil Status</label>
          <select
            value={resumeData.personalInfo.civilStatus}
            onChange={(e) => handlePersonalInfoChange('civilStatus', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          >
            <option value="">Select Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Religion</label>
          <input
            type="text"
            value={resumeData.personalInfo.religion}
            onChange={(e) => handlePersonalInfoChange('religion', e.target.value)}
            placeholder="e.g., Christianity"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Citizenship</label>
          <input
            type="text"
            value={resumeData.personalInfo.citizenship}
            onChange={(e) => handlePersonalInfoChange('citizenship', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Height</label>
          <input
            type="text"
            value={resumeData.personalInfo.height}
            onChange={(e) => handlePersonalInfoChange('height', e.target.value)}
            placeholder="e.g., 5'4"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Weight</label>
          <input
            type="text"
            value={resumeData.personalInfo.weight}
            onChange={(e) => handlePersonalInfoChange('weight', e.target.value)}
            placeholder="e.g., 60kg"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Father's Name</label>
          <input
            type="text"
            value={resumeData.personalInfo.fatherName}
            onChange={(e) => handlePersonalInfoChange('fatherName', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
          <input
            type="text"
            value={resumeData.personalInfo.motherName}
            onChange={(e) => handlePersonalInfoChange('motherName', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">About Me</label>
          <textarea
            value={resumeData.personalInfo.summary}
            onChange={(e) => handlePersonalInfoChange('summary', e.target.value)}
            rows={4}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold mb-4">Skills</h2>
      <div className="space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <input
              type="text"
              value={newSkill.name}
              onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
              placeholder="Skill name"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
            />
          </div>
          <div className="w-32 flex flex-col">
            <input
              type="range"
              min="0"
              max="100"
              value={newSkill.level}
              onChange={(e) => setNewSkill({ ...newSkill, name: newSkill.name, level: e.target.value })}
              className="mt-2 w-full"
            />
            <span className="text-sm text-gray-500 text-center mt-1">{newSkill.level}%</span>
          </div>
          <button
            type="button"
            onClick={handleSkillAdd}
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
          >
            Add
          </button>
        </div>
        <div className="space-y-2">
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
              <span>{skill.name}</span>
              <div className="flex items-center space-x-4">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gray-800 rounded-full h-2"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-sm text-gray-500 min-w-[40px]">{skill.level}%</span>
                <button
                  type="button"
                  onClick={() => {
                    const newSkills = [...resumeData.skills];
                    newSkills.splice(index, 1);
                    onUpdateResume({ ...resumeData, skills: newSkills });
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold mb-4">Education</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            value={newEducation.school}
            onChange={(e) => setNewEducation({ ...newEducation, school: e.target.value })}
            placeholder="School"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
          <input
            type="text"
            value={newEducation.degree}
            onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
            placeholder="Degree"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
          <input
            type="text"
            value={newEducation.year}
            onChange={(e) => setNewEducation({ ...newEducation, year: e.target.value })}
            placeholder="Year"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
          <div className="col-span-2">
            <textarea
              value={newEducation.description}
              onChange={(e) => setNewEducation({ ...newEducation, description: e.target.value })}
              placeholder="Description"
              rows={2}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={handleEducationAdd}
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
        >
          Add Education
        </button>
        <div className="space-y-4">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">{edu.school}</h3>
                  <p className="text-sm text-gray-600">{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                  {edu.description && <p className="text-sm mt-2">{edu.description}</p>}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newEducation = [...resumeData.education];
                    newEducation.splice(index, 1);
                    onUpdateResume({ ...resumeData, education: newEducation });
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold mb-4">Experience</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Company"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
          <input
            type="text"
            placeholder="Position"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
          <input
            type="text"
            placeholder="Start Date"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
          <input
            type="text"
            placeholder="End Date"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
          />
          <div className="col-span-2">
            <textarea
              placeholder="Description"
              rows={2}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 hover:border-gray-400 transition-colors"
            />
          </div>
        </div>
        <button
          type="button"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
        >
          Add Experience
        </button>
      </div>
    </div>
  );

  const handlePersonalInfoChange = (field, value) => {
    onUpdateResume({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value
      }
    });
  };

  const handleSkillAdd = () => {
    if (newSkill.name.trim()) {
      onUpdateResume({
        ...resumeData,
        skills: [...resumeData.skills, { ...newSkill }]
      });
      setNewSkill({ name: '', level: '50' });
    }
  };

  const handleEducationAdd = () => {
    if (newEducation.school.trim() && newEducation.degree.trim()) {
      onUpdateResume({
        ...resumeData,
        education: [...resumeData.education, { ...newEducation }]
      });
      setNewEducation({ school: '', degree: '', year: '', description: '' });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handlePersonalInfoChange('profilePicture', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      {activeTab === 'personal' && renderPersonalInfo()}
      {activeTab === 'experience' && renderExperience()}
      {activeTab === 'education' && renderEducation()}
      {activeTab === 'skills' && renderSkills()}
    </div>
  );
};

export default ResumeForm;
