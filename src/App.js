import cn from './App.module.scss';

import content from './content';

import ScrollableImages from './components/ScrollableImages';

function App() {
  return (
    <div className={cn.app}>
      <ScrollableImages content={content.cluster} ui={content.ui}/>
    </div>
  );
}

export default App;
