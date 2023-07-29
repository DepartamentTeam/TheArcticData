'use client'
import React, { KeyboardEvent, useState } from "react";


interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  order?: 0 | 1;
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs, order }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick =  (index: number) =>  {
   
    setActiveTab(index);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;
    if (key === "ArrowRight" || key === "ArrowLeft") {
      const totalTabs = tabs.length;
      let newIndex = activeTab;
    if (key === "ArrowRight" ) {
        newIndex = (activeTab + 1) % totalTabs;
      } else if (key === "ArrowLeft") {
        newIndex = (activeTab - 1 + totalTabs) % totalTabs;
      }
      setActiveTab(newIndex);
    }

    if (key === "d" || key === "a") {
        const totalTabs = tabs.length;
        let newIndex = activeTab;
      if (key === "d" ) {
          newIndex = (activeTab + 1) % totalTabs;
        } else if (key === "a") {
          newIndex = (activeTab - 1 + totalTabs) % totalTabs;
        }
        setActiveTab(newIndex);
      }
  };

  
  return (
    <div className="tabs" onKeyDown={handleKeyDown}>
      <div className="tabs-header " style={{order: order}}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? `active  ${order === 0 ? 'bottom' : 'top' }` : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
        <div className="tabs-content" onKeyDown={handleKeyDown} >{tabs[activeTab].content}</div>
      
     
    </div>
  );
};

export default Tabs;
