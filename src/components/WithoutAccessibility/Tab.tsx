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
      <div>
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            onClick={() => setActiveTab(index)}
            className={`tab ${activeTab === index ? 'active' : ''}`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="content">{tabs[activeTab].content}</div>
    </div>
  )
}
