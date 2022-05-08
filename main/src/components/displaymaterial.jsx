import { BsStopwatch } from 'react-icons/bs';
import { RiCupLine, RiRefreshLine } from 'react-icons/ri';
import { FiRefreshCcw } from 'react-icons/fi';
import { itemsData, chartsData } from './data';
import LineChart from './linechart';
import { useState } from 'react';

function DisplayMaterial(props){
    const { showBar,secondaryMenu, isMainMenuClicked } = props;
    const [chartData, setChartData] = useState({
        labels : chartsData.map((data) => data.day ),
        datasets :[
            {
                label : "Sales",
                data : chartsData.map((data) => data.sale ),
                borderColor : "purple",
                pointBackgroundColor : "rgba(255,255,255,1)",
                pointBorderColor : "purple",
                
            },
        ],
        
    });

    return (
        <section className={showBar ? "display-material" : "display-material inc-width"} >
            <header className="dm-header" >
                <div className="page-name" >{secondaryMenu}</div>
                <div className="route" >Home { "  |  " + isMainMenuClicked} { "  |  " + secondaryMenu}</div>
            </header>
            <article className="sales" >
                <section className="part-1" >
                    <ul className="orders" >
                        <li className="flex-column-center-center" >
                            <BsStopwatch className='icon' />
                            <h2>Pending Orders</h2>
                            <p>14</p>
                        </li>
                        <li className="flex-column-center-center" >
                            <RiCupLine  className='icon'  />
                            <h2>Completed Orders</h2>
                            <p>32</p>
                        </li>
                        <li className="flex-column-center-center" >
                            <RiRefreshLine  className='icon'  />
                            <h2>Refund Requests</h2>
                            <p>74</p>
                        </li>
                    </ul>
                    <div className='main-chart' >
                        <header>
                            <h3>Sales</h3>
                            <div>< FiRefreshCcw /></div>    
                        </header>
                        <LineChart chartData={chartData} />
                    </div>
                </section>
                <section className="part-2" >
                    <header>
                        <h3>Recent orders</h3>
                        <div>< FiRefreshCcw /></div>    
                    </header>
                     <ul className='all-items' >
                         {
                             itemsData.map((item,index) => {
                                 return (
                                    <li className='one-item' >
                                        <div className='img-sec' >
                                            <span className={item.status === "ON HOLD" ? "bg-purple" : "bg-blue" } >{item.status}</span>
                                            <img src={item.imgUrl} alt={item.name} />    
                                        </div>
                                        <div className='text-sec' >
                                            <h4>{item.name}</h4>
                                            <p>{item.description}</p>
                                            <h5>{item.date}</h5>    
                                        </div>    
                                    </li>    
                                 )
                             })
                         }
                    </ul>   
                </section>
            </article>
        </section>
    )
}

export default DisplayMaterial;