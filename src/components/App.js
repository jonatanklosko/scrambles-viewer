import React, { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import ScramblesViewer from './ScramblesViewer';
import JsonImport from './JsonImport';

function App() {
  const [scramblesJson, setScramblesJson] = useState(null);

  return (
    <div>
      <CssBaseline />
      {scramblesJson ? (
        <ScramblesViewer scramblesJson={scramblesJson} />
      ) : (
        <JsonImport onImport={setScramblesJson} />
      )}
    </div>
  );
}

export default App;
