import React from 'react';

const letterTypes = [
  {
    id: 'formal',
    title: 'Formal Letter',
    description: 'A professional letter that follows a pattern and addresses issues directly'
  },
  {
    id: 'informal',
    title: 'Informal Letter',
    description: 'A personal letter that doesn\'t follow a set pattern or adhere to formalities'
  },
  {
    id: 'business',
    title: 'Business Letter',
    description: 'A formal letter written between business correspondents that usually contains commercial information'
  },
  {
    id: 'official',
    title: 'Official Letter',
    description: 'A letter that informs offices, branches, or subordinates of official information'
  },
  {
    id: 'social',
    title: 'Social Letter',
    description: 'A personal letter written for a special event, such as congratulatory, condolence, or invitation letter'
  },
  {
    id: 'circular',
    title: 'Circular Letter',
    description: 'A letter that announces information to a large number of people'
  },
  {
    id: 'employment',
    title: 'Employment Letter',
    description: 'A letter related to the employment process, such as joining, promotion, or application letter'
  },
  {
    id: 'complaint',
    title: 'Complaint Letter',
    description: 'A letter sent by consumers to businesses when they are unhappy with a product or service'
  },
  {
    id: 'cover',
    title: 'Cover Letter',
    description: 'A business letter that is typically sent with a resume when applying for a job'
  },
  {
    id: 'resignation',
    title: 'Resignation Letter',
    description: 'A letter that gives notice of leaving a position and explains why you are leaving'
  },
  {
    id: 'enquiry',
    title: 'Enquiry Letter',
    description: 'A letter used to gain information about a job, course, services, goods, or terms'
  },
  {
    id: 'sales',
    title: 'Sales Letter',
    description: 'A letter that introduces a product or service to a potential customer'
  },
  {
    id: 'apology',
    title: 'Apology Letter',
    description: 'A professional letter that acknowledges a misstep and asks for a pardon at work'
  },
  {
    id: 'offer',
    title: 'Offer Letter',
    description: 'An official proposal of employment that describes the specific terms of the position'
  }
];

const Sidebar = ({ onSelectLetterType, selectedType }) => {
  return (
    <div className="w-64 h-screen bg-gray-50 border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Letter Types</h2>
        <div className="space-y-2">
          {letterTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => onSelectLetterType(type.id)}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                selectedType === type.id
                  ? 'bg-gray-900 text-white'
                  : 'hover:bg-gray-200 text-gray-700'
              }`}
            >
              <div className="font-medium">{type.title}</div>
              <p className="text-sm mt-1 line-clamp-2 overflow-hidden">
                {type.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
