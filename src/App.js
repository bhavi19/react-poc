import React from 'react';
import ErrorBoundary from './ErroeBoundary';
import LearnUseMemo from './Learnings/LearnUseMemo';
import LearnUseCallback from './Learnings/LearnUseCallback';
import LearnReactMemo from './Learnings/LearnReactMemo';
import LearnUseRef from './Learnings/LearnUseRef';
import Test from './Learnings/Test';
import BubbleSort from './SortingAlgo/BubbleSort';


function App() {

  return (
    <ErrorBoundary fallback={<p>Error occurred.</p>}>
      <div className="App">
        <BubbleSort/>
        {/* <Test /> */}
        {/* <LearnUseRef/> */}
        {/* <LearnReactMemo/> */}
        {/* <LearnUseMemo /> */}
        {/* <LearnUseCallback/> */}
      </div>
    </ErrorBoundary>
  );
}

export default App;
