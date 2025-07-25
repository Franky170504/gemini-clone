import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
        const { input, setInput, recentPrompts, setRecentPrompts, prevPrompts, setPrevPrompts, showResults, setShowResults, loading, setLoading, resultData, setResultData, onSet } = React.useContext(Context);

  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
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
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter your prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSet()} src={assets.send_icon} alt="" />
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