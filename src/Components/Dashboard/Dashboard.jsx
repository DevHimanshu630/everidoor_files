import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from "./Dashboard.module.css"
import img from "../Images/img.png"
export default function Dashboard() {
  return (
    // {styles.bannerContainer}  
    // {`${styles.btndisplay} ${styles.blue}`}
    <div>
        <main>
        <Header/>
        <div>
            <div className="down">
                <div className="down-list">
                    <ul className="list2 abc">
                        <li className="display">Displays</li>
                        <li>My Content</li>
                        <li>Playlists</li>
                    </ul>
                </div>
            </div>
            <div className={styles.bannerContainer}>
                    <div className={`${styles.display_dash} ${styles.abc}`}>
                    <div className={styles.spanContainercont}>
                        <span className={styles.span_content}>Display Dashboard</span>
                    </div>
                    <div className={styles.button_cont}>
                        <button className={`${styles.btndisplay} ${styles.blue}`}>+ ADD A DISPLAY</button>
                        <button className={`${styles.btndisplay} ${styles.brown}`}>Manage Displays</button>
                    </div>
                    
                </div>

                <div className={`${styles.show_displaycontainer} ${styles.abc}`}>
                    <div className={styles.showdisplayleft}>
                        <span className={styles.showdisplaycontent}>Show Display:</span>
                        <button className={`${styles.btndisplay} ${styles.blue} ${styles.compaginbtn}`}>Campagin Mode</button>
                        <button className={`${styles.btndisplay} ${styles.blue} ${styles.compaginbtn}`}>Mycompagin Mode</button>
                        <button className={`${styles.btndisplay} ${styles.brown} ${styles.campagindash}`}>Archived</button>
                    </div>
                
                    <div className={styles.showdisplayright}>
                        <span className={styles.sortbycontent}>Sort by:</span>
                        <select name="" id="" className={styles.optioncontainer}>
                            <option value="" className={styles.newestfirstcontent}>Newest first</option>
                        </select>
                    </div>

                </div>
            {/* display popup */}





            {/* display popup end */}
                <div className={styles.productcontainer}>
                    <div className={`${styles.smallproductcontainer} ${styles.abc}`}>
                        <div className={`${styles.productLeftcontainer} ${styles.abc}`}>
                            <div className={styles.productimg}>
                                <img src={img} alt="" srcset=""/>
                            </div>
                            <div className={styles.productcontentcontainer}>
                                <p className={styles.productpara}>Digital Display, Vegas Mall, Dwarka Road</p>
                                <div className={`${styles.tempreature} ${styles.abc}`}>
                                    <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                        <span className={styles.slash}>\</span>
                                        <span className={styles.tempcontent}>105°F</span>
                                    </div>
                                    <p> Ocean Airlines Ad</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rightproductcontaiener}>
                            <div className={styles.campaignbtncontainer}>
                                <button>Campaign Mode</button>
                            </div>
                            <div className={`${styles.earningcontainer} ${styles.abc}`}>
                                <p className={styles.earning_container}>Total Earning</p>
                                <p className={styles.dots}>...</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.smallproductcontainer} ${styles.abc}`}>
                        <div className={`${styles.productLeftcontainer} ${styles.abc}`}>
                            <div className={styles.productimg}>
                                <img src={img} alt="" srcset=""/>
                            </div>
                            <div className={styles.productcontentcontainer}>
                                <p className={styles.productpara}>Digital Display, Vegas Mall, Dwarka Road</p>
                                <div className={`${styles.tempreature} ${styles.abc}`}>
                                    <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                        <span className={styles.slash}>\</span>
                                        <span className={styles.tempcontent}>105°F</span>
                                    </div>
                                    <p> Ocean Airlines Ad</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rightproductcontaiener}>
                            <div className={styles.campaignbtncontainer}>
                                <button>Campaign Mode</button>
                            </div>
                            <div className={`${styles.earningcontainer} ${styles.abc}`}>
                                <p className={styles.earning_container}>Total Earning</p>
                                <p className={styles.dots}>...</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.smallproductcontainer} ${styles.abc}`}>
                        <div className={`${styles.productLeftcontainer} ${styles.abc}`}>
                            <div className={styles.productimg}>
                                <img src={img} alt="" srcset=""/>
                            </div>
                            <div className={styles.productcontentcontainer}>
                                <p className={styles.productpara}>Digital Display, Vegas Mall, Dwarka Road</p>
                                <div className={`${styles.tempreature} ${styles.abc}`}>
                                    <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                        <span className={styles.slash}>\</span>
                                        <span className={styles.tempcontent}>105°F</span>
                                    </div>
                                    <p> Ocean Airlines Ad</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rightproductcontaiener}>
                            <div className={styles.campaignbtncontainer}>
                                <button>Campaign Mode</button>
                            </div>
                            <div className={`${styles.earningcontainer} ${styles.abc}`}>
                                <p className={styles.earning_container}>Total Earning</p>
                                <p className={styles.dots}>...</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.smallproductcontainer} ${styles.abc}`}>
                        <div className={`${styles.productLeftcontainer} ${styles.abc}`}>
                            <div className={styles.productimg}>
                                <img src={img} alt="" srcset=""/>
                            </div>
                            <div className={styles.productcontentcontainer}>
                                <p className={styles.productpara}>Digital Display, Vegas Mall, Dwarka Road</p>
                                <div className={`${styles.tempreature} ${styles.abc}`}>
                                    <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                        <span className={styles.slash}>\</span>
                                        <span className={styles.tempcontent}>105°F</span>
                                    </div>
                                    <p> Ocean Airlines Ad</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rightproductcontaiener}>
                            <div className={styles.campaignbtncontainer}>
                                <button>Campaign Mode</button>
                            </div>
                            <div className={`${styles.earningcontainer} ${styles.abc}`}>
                                <p className={styles.earning_container}>Total Earning</p>
                                <p className={styles.dots}>...</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.smallproductcontainer} ${styles.abc}`}>
                        <div className={`${styles.productLeftcontainer} ${styles.abc}`}>
                            <div className={styles.productimg}>
                                <img src={img} alt="" srcset=""/>
                            </div>
                            <div className={styles.productcontentcontainer}>
                                <p className={styles.productpara}>Digital Display, Vegas Mall, Dwarka Road</p>
                                <div className={`${styles.tempreature} ${styles.abc}`}>
                                    <div className={`${styles.slashcontainer} ${styles.abc}`}>
                                        <span className={styles.slash}>\</span>
                                        <span className={styles.tempcontent}>105°F</span>
                                    </div>
                                    <p> Ocean Airlines Ad</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rightproductcontaiener}>
                            <div className={styles.campaignbtncontainer}>
                                <button>Campaign Mode</button>
                            </div>
                            <div className={`${styles.earningcontainer} ${styles.abc}`}>
                                <p className={styles.earning_container}>Total Earning</p>
                                <p className={styles.dots}>...</p>
                            </div>
                        </div>
                    </div>
                </div>


            
            </div>
        <Footer/>
        </div>

    </main>
    </div>
  )
}
