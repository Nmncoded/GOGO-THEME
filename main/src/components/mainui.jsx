import { MdChairAlt } from 'react-icons/md';
import { CgScreen } from 'react-icons/cg';
import { BsHandbag } from 'react-icons/bs';
import { DiGoogleAnalytics } from 'react-icons/di';
import { RiLightbulbFlashLine, RiShoppingCart2Line,RiPagesLine } from 'react-icons/ri';
import { GiCarKey, GiSplitArrows } from 'react-icons/gi';
import { useCallback, useState } from 'react';
import DisplayMaterial from './displaymaterial';

function MainUI(){
    const [isMainMenuClicked , setIsMainMenuClicked ] = useState("Dashboards");
    const [secondaryMenu , setSecondaryMenu ] = useState("Default");
    const [showBar, setShowBar ] = useState(true);

    const handleValue = (name) => {

        if(name === isMainMenuClicked && showBar === true ){
            setShowBar(false)
        }else{
            setShowBar(true)
        }
        setIsMainMenuClicked(name);

    }

    const mainData = [
        {
            icon: <MdChairAlt className={ "Dashboards" === isMainMenuClicked ? "active-class nav-icon" : "nav-icon" } />,
            name: "Dashboards",
            secondaryData : [
                {
                    name  : "Default",
                    icon :  <BsHandbag className={ "Default" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />,
                },
                {
                    name : "Analytics",
                    icon : <DiGoogleAnalytics className={ "Analytics" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />
                },
                {
                    name : "Ecommerce",
                    icon : <RiShoppingCart2Line className={ "Ecommerce" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />
                },
                {
                    name : "Content",
                    icon : <RiPagesLine className={ "Content" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />
                },
            ]
        
        },
        {
            icon: <CgScreen  className={ "Pages" === isMainMenuClicked ? "active-class nav-icon" : "nav-icon" }  />,
            name: "Pages",
            secondaryData : [
                {
                    name  : "Pages-1",
                    icon :  <BsHandbag className={ "Pages-1" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />,
                },
                {
                    name : "Pages-2",
                    icon : <DiGoogleAnalytics className={ "Pages-2" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />
                },
                {
                    name : "Pages-3",
                    icon : <RiShoppingCart2Line className={ "Pages-3" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />
                },
                {
                    name : "Pages-4",
                    icon : <RiPagesLine className={ "Pages-4" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />
                },
            ]
        
        },
        {
            icon: <RiLightbulbFlashLine  className={ "Applications" === isMainMenuClicked ? "active-class nav-icon" : "nav-icon" }  />,
            name: "Applications",
            secondaryData : [
                {
                    name  : "Applications-1",
                    icon :  <BsHandbag className={ "Applications-1" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />,
                },
                {
                    name : "Applications-2",
                    icon : <DiGoogleAnalytics className={ "Applications-2" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />
                },
                {
                    name : "Applications-3",
                    icon : <RiShoppingCart2Line className={ "Applications-3" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />
                },
                {
                    name : "Applications-4",
                    icon : <RiPagesLine className={ "Applications-4" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />
                },
            ]
        
        },
        {
            icon: <GiCarKey  className={ "UI" === isMainMenuClicked ? "active-class nav-icon" : "nav-icon" }  />,
            name: "UI",
            secondaryData : [
                {
                    name  : "UI-1",
                    icon :  <BsHandbag className={ "UI-1" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />,
                },
                {
                    name : "UI-2",
                    icon : <DiGoogleAnalytics className={ "UI-2" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />
                },
                {
                    name : "UI-3",
                    icon : <RiShoppingCart2Line className={ "UI-3" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />
                },
                {
                    name : "UI-4",
                    icon : <RiPagesLine className={ "UI-4" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />
                },
            ]
        
        },
        {
            icon: <GiSplitArrows  className={ "Menu" === isMainMenuClicked ? "active-class nav-icon" : "nav-icon" }  />,
            name: "Menu",
            secondaryData : [
                {
                    name  : "Menu-1",
                    icon :  <BsHandbag className={ "Menu-1" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />,
                },
                {
                    name : "Menu-2",
                    icon : <DiGoogleAnalytics className={ "Menu-2" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />
                },
                {
                    name : "Menu-3",
                    icon : <RiShoppingCart2Line className={ "Menu-3" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />
                },
                {
                    name : "Menu-4",
                    icon : <RiPagesLine className={ "Menu-4" === secondaryMenu ? "active-class nav-icon" : "nav-icon" } />
                },
            ]
        
        },
    ]
    return (
        <section className="main-ui" >
            <ul className="main-navbar" >
                {
                    mainData.map((elm,index) => {
                        return (
                            <li  key={index} onClick={() => handleValue(elm.name) } className='flex-column-center-center' >
                                {
                                    elm.name === isMainMenuClicked ? <div className='showcase' ></div> : ""
                                }
                                {elm.icon}
                                <p className={ elm.name === isMainMenuClicked ? "active-class" : "" } >{elm.name}</p>
                            </li>

                        )
                    })
                }
            </ul>
            {
                showBar ? 
            <ul className='second-navbar' >
                {
                    mainData.filter(elm => isMainMenuClicked === elm.name )[0].secondaryData.map((elm,index) => {
                        return (
                            <li onClick={() => setSecondaryMenu(elm.name)} className={elm.name === secondaryMenu ? "bg-color" : ""}  key={index} >
                                {
                                    elm.name === secondaryMenu ? <div className='showcase' ></div> : ""
                                }
                                {elm.icon}
                                <p className={ elm.name === secondaryMenu ? "active-class" : "" } >{elm.name}</p>
                            </li>
                        )
                    })
                }
            </ul> : ""
            }
            <DisplayMaterial showBar={showBar} secondaryMenu={secondaryMenu} isMainMenuClicked={isMainMenuClicked}  />
        </section>
    )
}

export default MainUI;