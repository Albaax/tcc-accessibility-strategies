import React, { useRef } from 'react'
import { tabsMock } from './Tab.mock'
import './Tab.css'

type TabRefs = {
  ref: React.RefObject<HTMLButtonElement>
}[]

export function InaccessibleTab() {
  const [activeTab, setActiveTab] = React.useState(0)

  const handleSelected = (index: number) => {
    setActiveTab(index)
  }

  return (
    <div className="wrapper">
      <div>
        {tabsMock.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            onClick={() => handleSelected(index)}
            className={`tab ${activeTab === index ? 'active' : ''}`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="content">{tabsMock[activeTab].content}</div>
    </div>
  )
}

export function AccessibleTab() {
  const [activeTab, setActiveTab] = React.useState(0)

  const tabRefs: TabRefs = [
    { ref: useRef(null) },
    { ref: useRef(null) },
    { ref: useRef(null) },
  ]

  const handleSelected = (index: number) => {
    setActiveTab(index)
  }

  const handleNextTab = (
    firstTabInRound: number,
    nextTab: number,
    lastTabInRound: number,
  ) => {
    const tabToSelect = activeTab === lastTabInRound ? firstTabInRound : nextTab
    tabRefs[tabToSelect].ref.current?.focus()
  }

  const handleKeyPress = (event) => {
    const tabCount = tabRefs.length - 1

    if (event.key === 'ArrowLeft') {
      const last = tabCount
      const next = activeTab - 1
      handleNextTab(last, next, 0)
    }
    if (event.key === 'ArrowRight') {
      const first = 0
      const next = activeTab + 1
      handleNextTab(first, next, tabCount)
    }
    if (event.key === 'Home') {
      tabRefs[0].ref.current?.focus()
    }
    if (event.key === 'End') {
      tabRefs[tabCount].ref.current?.focus()
    }
  }

  return (
    <div className="wrapper">
      <div role="tablist" aria-label="Tabs de conteúdo">
        {tabsMock.map((tab, index) => (
          <button
            key={tab.title}
            ref={tabRefs[index].ref}
            role="tab"
            type="button"
            id={`tab-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
            aria-controls={`tabpanel-${index}`}
            aria-selected={activeTab === index}
            onClick={() => handleSelected(index)}
            onKeyDown={handleKeyPress}
            className={`tab ${activeTab === index ? 'active' : ''}`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabpanel-wrapper">
        {tabsMock.map((tab, index) => (
          <section
            key={`tabpanel-${index}`}
            role="tabpanel"
            aria-hidden={activeTab !== index}
            hidden={activeTab !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            className="content"
          >
            <p>{tab.content}</p>
          </section>
        ))}
      </div>
    </div>
  )
}
