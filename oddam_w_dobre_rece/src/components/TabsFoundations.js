import React, { useState } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import "../scss/_tabsFoundations.scss";
import TabPanelItems from "./TabPanelItems";
import Pagination from "./Pagination";

const itemsPerPage = 3;

const TabsFoundations = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [currentTab, setCurrentTab] = useState(0);

    const tabsContent = {
        fundacje: [
            { title: "Fundacja 'Dbam o Zdrowie'", text: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", things: "ubrania, jedzenie, sprzęt AGD, meble, zabawki" },
            { title: "Fundacja 'Dla dzieci'", text: "Cel i misja: Pomoc dzieciom z ubogich rodzin.", things: "ubrania, meble, zabawki" },
            { title: "Fundacja 'Bez domu'", text: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", things: "ubrania, jedzenie, ciepłe koce" },
            { title: "Fundacja 4", text: "Cel i misja 4", things: "things 4" },
            { title: "Fundacja 5", text: "Cel i misja 5", things: "things 5" },
            { title: "Fundacja 6", text: "Cel i misja 6", things: "things 6" },
            { title: "Fundacja 7", text: "Cel i misja 7", things: "things 7" },
            { title: "Fundacja 8", text: "Cel i misja 8", things: "things 8" },
            { title: "Fundacja 9", text: "Cel i misja 9", things: "things 9" }
        ],
        organizacje: [
            { title: "Organizacja 'Loremi Ipsum 1'", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", things: "consequuntur, distinctio dolores, eveniet" },
            { title: "Organizacja 'Loremi Ipsum 2'", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", things: "distinctio dolores, eveniet" },
            { title: "Organizacja 'Loremi Ipsum 3'", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", things: "distinctio dolores, eveniet,adipisicing elit" },
            { title: "Organizacja 4", text: "Lorem ipsum 4", things: "things 4" },
            { title: "Organizacja 5", text: "Lorem ipsum 5", things: "things 5" },
        ],
        zbiorki: [
            { title: "Zbiórka 'Loremi Ipsum 1'", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", things: "consequuntur, distinctio dolores, eveniet" },
            { title: "Zbiórka 'Loremi Ipsum 2'", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", things: "distinctio dolores, eveniet" },
            { title: "Zbiórka 'Loremi Ipsum 3'", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", things: "distinctio dolores, eveniet,adipisicing elit" },
            { title: "Zbiórka 4", text: "Lorem ipsum 4", things: "things 4" },
        ]
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleTabChange = (index) => {
        setCurrentTab(index);
        setCurrentPage(0); // Reset page to 0 when tab changes
    };

    const renderTabPanel = (content) => {
        const startIndex = currentPage * itemsPerPage;
        const currentItems = content.slice(startIndex, startIndex + itemsPerPage);

        return (
            <>
                {currentItems.map((item, index) => (
                    <TabPanelItems key={index} title={item.title} text={item.text} things={item.things} />
                ))}
                <Pagination currentPage={currentPage} pageCount={Math.ceil(content.length / itemsPerPage)} onPageChange={handlePageChange} />
            </>
        );
    };

    return (
        <Tabs selectedIndex={currentTab} onSelect={handleTabChange} className="Tabs__container">
            <TabList className="TabsList">
                <Tab className="Tab">Fundacjom</Tab>
                <Tab className="Tab">Organizacjom pozarządowym</Tab>
                <Tab className="Tab">Lokalnym zbiórkom</Tab>
            </TabList>

            <TabPanel className="TabPanel">
                <p className="TabPanel__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                {renderTabPanel(tabsContent.fundacje)}
            </TabPanel>
            <TabPanel className="TabPanel">
                <p className="TabPanel__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci amet consequuntur, distinctio dolores, eveniet!</p>
                {renderTabPanel(tabsContent.organizacje)}
            </TabPanel>
            <TabPanel className="TabPanel">
                <p className="TabPanel__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci amet consequuntur, distinctio amet, consectetur adipisicing elit. Ad adipisci amet consequuntur, distinctio dolores, eveniet!</p>
                {renderTabPanel(tabsContent.zbiorki)}
            </TabPanel>
        </Tabs>
    );
};

export default TabsFoundations;
