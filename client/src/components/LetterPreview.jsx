import React from 'react';

const LetterPreview = ({ type, letterData }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderSenderAddress = () => (
    <div className="mb-8">
      {type === 'business' && (
        <>
          <p className="font-bold">{letterData.sender.company}</p>
          <p>{letterData.sender.position}</p>
        </>
      )}
      <p>{letterData.sender.name}</p>
      <p>{letterData.sender.address}</p>
      <p>{letterData.sender.city} {letterData.sender.zipCode}</p>
      {type === 'business' && (
        <>
          <p>Phone: {letterData.sender.phone}</p>
          <p>Email: {letterData.sender.email}</p>
        </>
      )}
    </div>
  );

  const renderDate = () => (
    <div className="mb-8">
      <p>{formatDate(letterData.sender.date)}</p>
    </div>
  );

  const renderRecipientAddress = () => (
    <div className="mb-8">
      <p>{letterData.recipient.name}</p>
      <p>{letterData.recipient.title}</p>
      <p>{type === 'business' ? letterData.recipient.company : letterData.recipient.organization}</p>
      <p>{letterData.recipient.address}</p>
      <p>{letterData.recipient.city} {letterData.recipient.zipCode}</p>
    </div>
  );

  const renderContent = () => (
    <div className="space-y-6">
      {type === 'business' && letterData.content.reference && (
        <p className="mb-4">Ref: {letterData.content.reference}</p>
      )}
      
      <p className="font-bold">Subject: {letterData.content.subject}</p>

      <div className="space-y-4">
        {/* Opening Paragraph */}
        {letterData.content.opening && (
          <p className="indent-8">{letterData.content.opening}</p>
        )}

        {/* Body Paragraphs */}
        {letterData.content.bodyParagraphs.map((paragraph, index) => (
          paragraph && (
            <p key={index} className="indent-8">
              {paragraph}
            </p>
          )
        ))}

        {/* Closing Paragraph */}
        {letterData.content.closing && (
          <p className="indent-8">{letterData.content.closing}</p>
        )}
      </div>

      <div className="mt-8">
        <p>{letterData.content.complimentaryClose || 'Yours faithfully'},</p>
        <div className="mt-12">
          <p className="font-bold">{letterData.sender.name}</p>
          {type === 'business' && letterData.sender.position && (
            <p>{letterData.sender.position}</p>
          )}
          {type === 'business' && letterData.sender.company && (
            <p>{letterData.sender.company}</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8 font-serif text-sm leading-relaxed">
      {renderSenderAddress()}
      {renderDate()}
      {renderRecipientAddress()}
      {renderContent()}
    </div>
  );
};

export default LetterPreview;
