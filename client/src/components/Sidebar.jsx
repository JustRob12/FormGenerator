import React from 'react';

const letterTypes = [
  {
    id: 'formal',
    title: 'Formal Letter',
    description: 'A professional letter that follows a pattern and addresses issues directly'
  },
  {
    id: 'business',
    title: 'Business Letter',
    description: 'A formal letter written between business correspondents that usually contains commercial information'
  }
];

const Sidebar = ({ onSelectLetterType, selectedType, isMobileMenuOpen }) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-4 transition-all duration-300 ${
      isMobileMenuOpen 
        ? 'fixed inset-0 z-50 w-full md:w-64 md:relative' 
        : 'hidden md:block w-64'
    }`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Letter Types</h2>
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => onSelectLetterType(null)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="space-y-2">
        {letterTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onSelectLetterType(type.id)}
            className={`w-full p-3 text-left rounded-lg transition-colors ${
              selectedType === type.id
                ? 'bg-gray-900 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            <h3 className="font-medium">{type.title}</h3>
            <p className={`text-sm ${
              selectedType === type.id ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {type.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
