import { useState } from 'react';
import CompareInput from 'components/CompareInput';
import CompareOutput from 'components/CompareOutput';
import JsonDataCompareButton from 'components/JsonDataCompareButton';

import { initialJsonsData } from './temp';

function App() {
  const [ jsonsData, setJsonsData ] = useState(initialJsonsData);
  const [ comparedData, setComparedData ] = useState();

  const handleReset = () => {
    setJsonsData([]);
    setComparedData();
  };

  return (
    <div className="App">
      <CompareInput
        jsonsData={jsonsData}
        setJsonsData={setJsonsData}
      />
      
      <div>
        <button onClick={handleReset}>Reset</button>
        
        <JsonDataCompareButton
          jsonsData={jsonsData}
          setComparedData={setComparedData}
        />
      </div>
      
      <CompareOutput comparedData={comparedData} />
    </div>
  );
}

export default App;
