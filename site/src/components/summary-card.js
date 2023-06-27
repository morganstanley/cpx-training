import React from 'react'

function SummaryRow({ term, definition }) {
  return (
    <div>
      <dt>{term}</dt>
      <dd>{definition}</dd>
    </div>
  )
}

function SummaryCard({ name, computerType, mpType, language }) {
  return (
    <div className="summary-card">
      <h3>{name}</h3>
      <dl>
        {computerType && (
          <SummaryRow term="Computer" definition={computerType} />
        )}
        {mpType && <SummaryRow term="Microprocessor" definition={mpType} />}
        {language && <SummaryRow term="Language" definition={language} />}
      </dl>
    </div>
  )
}

export default SummaryCard
