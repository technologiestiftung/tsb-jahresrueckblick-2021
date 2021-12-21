import { useRef, useEffect } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import useStore from '../../hooks/useStore';

import ScrollableImages from '../../components/ScrollableImages';

import Paragraph from '../../components/Paragraph';
import Headline from '../../components/Headline';
import Funfact from '../../components/Funfact';
import Icon from '../../components/Icon';

import cx from 'classnames';

import cn from './FrischerWind.module.scss';

const setActiveTopicSelector = (s) => s.setActiveTopic;

function FrischerWind({content, ui, lang}) {
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);
  const setActiveTopic = useStore(setActiveTopicSelector)

  useEffect(() => {
    if (isOnScreen) {
      setActiveTopic(content.id)
    }
  }, [isOnScreen, content.id, setActiveTopic])

  return (
    <section>
      <div className={cx(cn.wrapper, cn.layoutWrapper)}>
        <div className="anchor" ref={elementRef} id={`anchor-${content.id}`} /> 
        <Icon type="frischerWind" />
        <Headline lang={lang} content={content.blocks.intro.title} />
        <Paragraph lang={lang} content={content.blocks.intro.text} />
        <Funfact content={content.blocks.funfact} lang={lang}/>
      </div>
      <ScrollableImages lang={lang} content={content} ui={ui}/>
    </section>
  )
}

export default FrischerWind;