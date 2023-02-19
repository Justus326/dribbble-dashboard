import React from 'react';
import './Smalldashboard.css';
import myImage from '../images/myImage.jpeg';
import { FaSortDown, FaTh } from 'react-icons/fa';
import {  AiOutlineCalendar, AiOutlineFileText, AiOutlineLike, AiOutlineDislike, AiOutlineClockCircle, AiOutlinePercentage, AiFillQuestionCircle, AiFillSetting, AiFillBell,  } from 'react-icons/ai';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from '.././components/Chart/Chart';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';



const Smalldashboard = () => {
    
  return (
    <div>
    <div className='smalldashboard'>
        <div className='list'>
         <nav>
            <FaTh color='blue' />
            <a href='/#'>CamuQuotes</a>
            <a href='/#'>Dashboard</a>
            <a href='/#'>Opportunities</a>
            <a href='/#'>Account</a>
            <a href='/#'>Clients</a>
            <a href='/#'>Product</a>
            <a href='/#'>Deals</a>
            <a href='/#'>Pipeline</a>
            <a href='/#'>Documents</a> 
         </nav>
        </div>
        <div className='profile'>
          <AiFillBell className='bell'  /> 
          <AiFillQuestionCircle className='question' />
          <AiFillSetting className='setting' />          
          <img className='profileimg' src={myImage} alt='' width={50} height={50}  />
          <FaSortDown fontSize={20} />
        </div>
    </div>
    <div className='maindashboard1'>
        <div className='card1'>
            <div className='card1caption'>
                <span className='card1capleft'>Overview</span>
                <div className='card1capright'>
                    <AiOutlineCalendar color="blue"/>
                    <span>All Time</span>
                    <FaSortDown />
                </div>
            </div>
            <div className='card1center'>
               <div className='card1centerleft'>
                <h3 className='h3'>Docs in Pipline</h3>
                <div className='div1'>
                    <AiOutlineFileText className='fafilealt' />
                    <h2>1,844
                        <h4>$924,883.00</h4>
                    </h2>
                </div>
                <div className='div2'>
                    <span className='div2span'>732
                      <p className='div2p'>Quotes</p>
                    </span>
                    <span className='div2span'>313
                      <p className='div2p'>SLA</p>
                    </span>
                    <span className='div2span'>464
                      <p className='div2p'>SOW</p>
                    </span>
                    <span className='div2span'>665
                      <p className='div2p'>MSA</p>
                    </span>
                </div>
               </div>
               <div className='card1centerright'>
                 <div className='card1centerrightleft'>
                    <span className='card1span1'>
                        <p className='p1a'>623</p>
                        <p className='p2a'>$823,933</p>
                        <p className='p3a1'>Draft</p>
                    </span>
                    <span className='card1span2'>
                        <p className='p1b'>499</p>
                        <p className='p2b'>$102,333</p>
                        <p className='p3b1'>Sent To Client</p>
                    </span>
                 </div>
                 <div className='card1centerrightright'>
                 <span className='card1span1'>
                        <p className='p1a'>423</p>
                        <p className='p2a'>$133,311</p>
                        <p className='p3a2'>Pending Approval</p>
                    </span>
                    <span className='card1span2'>
                        <p className='p1b'>499</p>
                        <p className='p2b'>$102,333</p>
                        <p className='p3b2'>Sigining</p>
                    </span>  
                 </div>
               </div>
            </div>
            <div className='card1last'>
             <div className='card1divlast'>
                <span>Net Value in Pipeline
                <h3>$924,883</h3>
                </span>  
                <span>
                Acheived So Far
                <h3>$424,393</h3>
                </span> 
                <span>Difference
                  <h3 className='h3colored'>$135,232</h3>
                </span>
                <span>Target
                  <h3>$2,000,000</h3>
                 </span>             
             </div>              
         </div>
        </div>
        <div className='card2'>
            <div className='card2caption'>
               <span className='card2capleft'>High Value Deals</span>
               <div className='card2capright'>
                <AiOutlineCalendar color='blue' />
                <span>All Time</span>
                <FaSortDown />
               </div>
            </div>
            <div className='card2totalvalue'>
                <span>Total Value</span>
                <h3>$924,833</h3>
            </div>
            <div className='card2main'>
                <div className='card2wrap'>
                    <div className='card2divhead'>
                        <span className='card2span1'>ACCOUNT NAME</span>
                        <span>Alpha Corp</span>
                        <span>Zeta Century</span>
                        <span>Bezel Soft Inc</span>
                        <span>GrisWalleque</span>
                        <span>CrisperTech</span>
                    </div>
                    <div className='card2divhead'>
                        <span className='card2span1'>OPPORTUNITY</span>
                        <span>Development of Unit ..</span>
                        <span>Multiplex Solution for </span>
                        <span>Mastermind DevOps:..</span>
                        <span>Datadriven Complex..</span>
                        <span>Magic Solution Web/..</span>
                    </div>
                    <div className='card2divhead'>
                        <span className='card2span1'>DEAL SIZE</span>
                        <span className='dealsizespan'>$124,323</span>
                        <span className='dealsizespan'>$314,323</span>
                        <span className='dealsizespan'>$344,323</span>
                        <span className='dealsizespan'>$314,323</span>
                        <span className='dealsizespan'>$44,331</span>
                    </div>
                    <div className='card2divhead'>
                        <span className='card2span1'>APPROVERS</span>
                        <span>
                            <img src={img1} alt="" style={{width:"20px", height:"20px"}} />
                            <img src={img2} alt="" style={{width:"20px"}} />
                            <img src={img3} alt="" style={{width:"20px"}} />
                        </span>
                        <span style={{marginTop:"5px"}}>
                        <img src={img1} alt="" style={{width:"20px", height:"20px"}} />
                        </span>
                        <span style={{marginTop:"11px"}}>
                            <img src={img2} alt="" style={{width:"20px"}} />
                            <img src={img3} alt="" style={{width:"20px"}} />
                        </span>
                        <span style={{marginTop:"9px"}}>
                        <img src={img1} alt="" style={{width:"20px", height:"20px"}} />
                        </span>
                        <span style={{marginTop:"8px"}}>
                        <img src={img3} alt="" style={{width:"20px"}} />
                        </span>
                    </div>
                    <div className='card2divhead'>
                        <span className='card2span1'>PENDING DAYS</span>
                        <span className='dealsizespanb'>03</span>
                        <span className='dealsizespanb'>01</span>
                        <span className='dealsizespanb'>03</span>
                        <span className='dealsizespanb'>01</span>
                        <span className='dealsizespanb'>03</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='maindashboard2'>
        <div className='card3'>
        <div className='card2caption'>
               <span className='card2capleft'>Opportunity Index</span>
               <div className='card2capright'>
                <AiOutlineCalendar color='blue' />
                <span>All Time</span>
                <FaSortDown />
               </div>
            </div>
            <div className='card3center'>
           
            <CircularProgressbarWithChildren className='bar' value={66}>
            <div className='card3barinside'>1,239</div>
           <div style={{ fontSize: 15, marginTop: -1, marginLeft:210, color:"grey" }}>
                        Opportunities
                        </div>
            </CircularProgressbarWithChildren>;
                       
            </div>
            <div className='card3last'>
                <span className='card3span1'>234
                    <p className='card3p1'>Deals Won</p>
                </span>
                <span className='card3span1'>643
                    <p className='card3p2'>In Progress</p>
                </span>
                <span className='card3span1'>432
                    <p className='card3p3'>Deals Lost</p>
                </span>
            </div>
        </div>
        <div className='card4'>
        <div className='card4caption'>
               <span className='card2capleft'>Opportunity Index</span>
               <div className='card2capright'>
                <AiOutlineCalendar color='blue' />
                <span>All Time</span>
                <FaSortDown />
               </div>
        </div>
        <div className='card4main'>
            <div className='card4wrap'>
            <div className='card4mainleft'>
                <div className='card4mainleft1strow'>
                    <span className='card4likeicon'>
                        <AiOutlineLike fontSize={25} color="blue" />
                    </span>
                    <span>1,273
                        <p>Deals Won</p>
                    </span>
                    <span>$8,332,004
                        <p>Net Value</p>
                    </span>
                    <span className='card4arrowiconup'>
                        <BsArrowUpShort fontSize={20} color="green"  />
                    </span>
                </div>
                
                <div className='card4mainleft1strow'>
                    <span className='card4likeiconpercent'>
                        <AiOutlinePercentage fontSize={25} color="orange" />
                    </span>
                    <span>13%
                        <p>Avg. Discount</p>
                    </span>
                    <span>$873,232
                        <p>Discount Value</p>
                    </span>
                    <span className='card4arrowiconup'>
                        <BsArrowUpShort fontSize={20} color="green"  />
                    </span>
                </div>
                <div className='card4mainleft1strow'>
                    <span className='card4likeicondislike'>
                        <AiOutlineDislike fontSize={25} color="red" />
                    </span>
                    <span>243
                        <p>Deals Lost</p>
                    </span>
                    <span>$743,221
                        <p>Net Value</p>
                    </span>
                    <span className='card4arrowicondown'>
                        <BsArrowDownShort fontSize={20} color="red"  />
                    </span>
                </div>
                <div className='card4mainleft1strow'>
                    <span className='card4likeiconclock'>
                        <AiOutlineClockCircle fontSize={25} color="grey" />
                    </span>
                    <span className='card4mainleftrowspanlast'>78 Days
                        <p>Average Deal Close Time</p>
                    </span>
                    {/* <span>$8,332,004
                        <p>Net Value</p>
                    </span> */}
                    <span className='card4arrowiconup'>
                        <BsArrowUpShort fontSize={20} color="green"  />
                    </span>
                </div>
                 
            </div>
            <div className='card4mainright'>
                <div className='chartcontainer'>
                <Chart />
                </div>
                
            </div>
        </div>
        </div>
        </div>
    </div>   
   </div>
  )
}

export default Smalldashboard