import React from 'react';

function ScramblesViewer({ scramblesJson }) {

  return (
    <div>
      {JSON.stringify(scramblesJson)}
    </div>
  );
}

export default ScramblesViewer;
