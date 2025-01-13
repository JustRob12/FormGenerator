import React, { useState } from 'react';

const defaultLetterData = {
  formal: {
    sender: {
      name: '',
      address: '',
      city: '',
      zipCode: '',
      date: '',
    },
    recipient: {
      name: '',
      title: '',
      organization: '',
      address: '',
      city: '',
      zipCode: '',
    },
    content: {
      subject: '',
      opening: '',
      bodyParagraphs: [''],
      closing: '',
      complimentaryClose: '',
    }
  },
  business: {
    sender: {
      name: '',
      company: '',
      position: '',
      address: '',
      city: '',
      zipCode: '',
      phone: '',
      email: '',
      date: '',
    },
    recipient: {
      name: '',
      title: '',
      company: '',
      address: '',
      city: '',
      zipCode: '',
    },
    content: {
      reference: '',
      subject: '',
      opening: '',
      bodyParagraphs: [''],
      closing: '',
      complimentaryClose: '',
    }
  }
};

const LetterForm = ({ type, letterData, onUpdateLetter }) => {
  const [activeSection, setActiveSection] = useState('sender');

  const handleChange = (section, field, value) => {
    onUpdateLetter({
      ...letterData,
      [section]: {
        ...letterData[section],
        [field]: value
      }
    });
  };

  const renderSenderForm = () => (
    <div className="space-y-4">
      {type === 'business' && (
        <>
          <input
            type="text"
            placeholder="Company Name"
            value={letterData.sender.company}
            onChange={(e) => handleChange('sender', 'company', e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Position"
            value={letterData.sender.position}
            onChange={(e) => handleChange('sender', 'position', e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </>
      )}
      <input
        type="text"
        placeholder="Full Name"
        value={letterData.sender.name}
        onChange={(e) => handleChange('sender', 'name', e.target.value)}
        className="w-full px-3 py-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Address"
        value={letterData.sender.address}
        onChange={(e) => handleChange('sender', 'address', e.target.value)}
        className="w-full px-3 py-2 border rounded-md"
      />
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="City"
          value={letterData.sender.city}
          onChange={(e) => handleChange('sender', 'city', e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Zip Code"
          value={letterData.sender.zipCode}
          onChange={(e) => handleChange('sender', 'zipCode', e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      {type === 'business' && (
        <>
          <input
            type="tel"
            placeholder="Phone"
            value={letterData.sender.phone}
            onChange={(e) => handleChange('sender', 'phone', e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            value={letterData.sender.email}
            onChange={(e) => handleChange('sender', 'email', e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </>
      )}
      <input
        type="date"
        value={letterData.sender.date}
        onChange={(e) => handleChange('sender', 'date', e.target.value)}
        className="w-full px-3 py-2 border rounded-md"
      />
    </div>
  );

  const renderRecipientForm = () => (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        value={letterData.recipient.name}
        onChange={(e) => handleChange('recipient', 'name', e.target.value)}
        className="w-full px-3 py-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Title"
        value={letterData.recipient.title}
        onChange={(e) => handleChange('recipient', 'title', e.target.value)}
        className="w-full px-3 py-2 border rounded-md"
      />
      {type === 'business' ? (
        <input
          type="text"
          placeholder="Company"
          value={letterData.recipient.company}
          onChange={(e) => handleChange('recipient', 'company', e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      ) : (
        <input
          type="text"
          placeholder="Organization"
          value={letterData.recipient.organization}
          onChange={(e) => handleChange('recipient', 'organization', e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      )}
      <input
        type="text"
        placeholder="Address"
        value={letterData.recipient.address}
        onChange={(e) => handleChange('recipient', 'address', e.target.value)}
        className="w-full px-3 py-2 border rounded-md"
      />
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="City"
          value={letterData.recipient.city}
          onChange={(e) => handleChange('recipient', 'city', e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Zip Code"
          value={letterData.recipient.zipCode}
          onChange={(e) => handleChange('recipient', 'zipCode', e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
    </div>
  );

  const renderContentForm = () => (
    <div className="space-y-4">
      {type === 'business' && (
        <input
          type="text"
          placeholder="Reference Number"
          value={letterData.content.reference}
          onChange={(e) => handleChange('content', 'reference', e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      )}
      <input
        type="text"
        placeholder="Subject"
        value={letterData.content.subject}
        onChange={(e) => handleChange('content', 'subject', e.target.value)}
        className="w-full px-3 py-2 border rounded-md"
      />
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Opening Paragraph</label>
          <textarea
            placeholder="Introduction and purpose of the letter"
            value={letterData.content.opening}
            onChange={(e) => handleChange('content', 'opening', e.target.value)}
            className="w-full px-3 py-2 border rounded-md h-24"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Body Paragraphs</label>
          <div className="space-y-2">
            {letterData.content.bodyParagraphs.map((paragraph, index) => (
              <div key={index} className="flex gap-2">
                <textarea
                  placeholder={`Paragraph ${index + 1}`}
                  value={paragraph}
                  onChange={(e) => {
                    const newParagraphs = [...letterData.content.bodyParagraphs];
                    newParagraphs[index] = e.target.value;
                    handleChange('content', 'bodyParagraphs', newParagraphs);
                  }}
                  className="w-full px-3 py-2 border rounded-md h-24"
                />
                <button
                  onClick={() => {
                    const newParagraphs = letterData.content.bodyParagraphs.filter((_, i) => i !== index);
                    handleChange('content', 'bodyParagraphs', newParagraphs);
                  }}
                  className="p-2 text-red-600 hover:text-red-800"
                  title="Remove paragraph"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
            <button
              onClick={() => {
                const newParagraphs = [...letterData.content.bodyParagraphs, ''];
                handleChange('content', 'bodyParagraphs', newParagraphs);
              }}
              className="w-full px-3 py-2 border border-dashed rounded-md text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-colors"
            >
              Add Paragraph
            </button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Closing Paragraph</label>
          <textarea
            placeholder="Conclusion and call to action"
            value={letterData.content.closing}
            onChange={(e) => handleChange('content', 'closing', e.target.value)}
            className="w-full px-3 py-2 border rounded-md h-24"
          />
        </div>
      </div>
      <input
        type="text"
        placeholder="Complimentary Close"
        value={letterData.content.complimentaryClose}
        onChange={(e) => handleChange('content', 'complimentaryClose', e.target.value)}
        className="w-full px-3 py-2 border rounded-md"
      />
    </div>
  );

  const sections = [
    { id: 'sender', title: 'Sender Details', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'recipient', title: 'Recipient Details', icon: 'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'content', title: 'Letter Content', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' }
  ];

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <div className="flex justify-between items-center bg-white rounded-lg shadow-sm mb-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex-1 px-4 py-3 flex items-center justify-center gap-2 text-sm font-medium transition-colors ${
              activeSection === section.id
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
            </svg>
            {section.title}
          </button>
        ))}
      </div>

      {/* Form Sections */}
      {activeSection === 'sender' && renderSenderForm()}
      {activeSection === 'recipient' && renderRecipientForm()}
      {activeSection === 'content' && renderContentForm()}
    </div>
  );
};

export { defaultLetterData };
export default LetterForm;
