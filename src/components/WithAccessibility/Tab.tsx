import React from 'react'
import './Tab.css'

export function Tab() {
  const [activeTab, setActiveTab] = React.useState(0)
  const tabs = [
    {
      title: 'Tab 1',
      content: 'Tab 1 content',
    },
    {
      title: 'Tab 2',
      content: 'Tab 2 content',
    },
    {
      title: 'Tab 3',
      content: 'Tab 3 content',
    },
  ]
  return (
    <div className="wrapper">
      <div role="tablist" aria-label="Tabs de conteúdo">
        {tabs.map((tab, index) => (
          <button
            key={`tab-${index}`}
            role="tab"
            type="button"
            id={`tab-${index}`}
            aria-controls={`tabpanel-${index}`}
            aria-selected={activeTab === index}
            onClick={() => setActiveTab(index)}
            className={`tab ${activeTab === index ? 'active' : ''}`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabpanel-wrapper">
        {tabs.map((tab, index) => (
          <section
            key={`tabpanel-${index}`}
            role="tabpanel"
            hidden={activeTab !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            className="content"
          >
            {tab.content}
          </section>
        ))}
      </div>
    </div>
  )
}
