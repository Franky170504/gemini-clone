import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
        const { input, setInput, recentPrompts, showResults, loading, resultData, onSet } = React.useContext(Context);

  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

        {!showResults
        ?<>
            <div className="greet">
            <p><span>Hello, </span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful place to see on upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Summerize the concept: urban planning</p>
                <img src={assets.idea_icon} alt="" />
            </div>
            <div className="card">
                <p>Brainstrom team bonding activitiesfor our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Make this code better to read and understand</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        </>
        :<div className='results'>
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompts}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading 
                ? <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div> 
                :<p dangerouslySetInnerHTML = {{ __html: resultData }}></p> 
                }
            </div>
        </div>
        }   
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter your prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSet()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                    Google TermsOpens in a new window and the Google Privacy PolicyOpens in a new window apply. Gemini can make mistakes, so double-check it.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main