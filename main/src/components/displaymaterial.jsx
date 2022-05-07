import { BsStopwatch } from 'react-icons/bs';
import { RiCupLine, RiRefreshLine } from 'react-icons/ri';

function DisplayMaterial(props){
    let { showBar,secondaryMenu, isMainMenuClicked } = props;
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
                </section>
                <section className="part-2" >
                        
                </section>
            </article>
        </section>
    )
}

export default DisplayMaterial;