import React, { useContext } from 'react';
import './Main.css'
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main=()=>{

    const{onSent,recentPrompt,showResult,loading,resultData,setInput,
        input}=useContext(Context)





    return (
        <div className='Main'>
            <div className='nav'>
                <p>Jarvis</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className='main-container'>
                {!showResult
                ? 
                <>
            <div className="Greet">
                    <p><span>Greetings Mr Stark</span></p>
                    <p>How may I be of assistance today?</p>
                </div>
                <div className='cards'>
                    <div className="card">
                        <p>
                            suggest road trip destinations! 
                        </p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>
                            briefly summarize this concept: Urban Planning
                        </p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>
                            Team building activities for work retreat!
                        </p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>
                            Improve readibility of the following code!
                        </p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                </>
                :<div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                         {loading
                         ?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                         </div>
                         :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                        
                    </div>

                </div>
                }

                
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='enter prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">May provide Inaccurate Info Due To Branching Multiverse</p>
                </div>
            </div>
        </div>
    )
}
export default Main
