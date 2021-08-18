import React, { useState, useEffect, useRef } from 'react'
import './timer.css'


const Timer = () => {
    let [min, setMin] = useState(0)
    let [sec, setSec] = useState(0)
    let [msec, setMsec] = useState(0)
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    let interval: any = useRef(null)

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        interval.current = setInterval(() => {
            setMsec(++msec);
            if (msec >= 100) {
                setSec(++sec);
                msec = 0
            }
            else if (sec >= 60) {
                setMin(++min)
                sec = 0;
            }
        }, 10)
    }
const minLength = min.toString().length
const secLength = sec.toString().length
const msecLength = msec.toString().length

    const handlePause = () => {
        clearInterval(interval.current)
        setIsPaused(false)
    }
    const handleResume = () => {
        handleStart()
    }
    const handleReset = () => {
        clearInterval(interval.current)
        setIsActive(false)
        setMsec(0)
        setSec(0)
        setMin(0)

    }
    return (
        <div className="timer-container">
            <h1>Timer App</h1>
            <span>{minLength < 2 ? `0${min}` :min} &nbsp;:&nbsp;</span>
            <span>{secLength < 2 ? `0${sec}` :sec} &nbsp;:&nbsp;</span>
            <span>{msecLength < 2 ? `0${msec}` :msec}</span><br />
            <div className="buttons">
                {
                    !isPaused && !isActive ?
                        <button onClick={handleStart}>start</button>
                        :
                        isPaused ?
                            <button onClick={handlePause}>pause</button>
                            :
                            <button onClick={handleResume}>Resume</button>

                }
                <button onClick={handleReset} disabled={!isActive}>Reset</button>
            </div>
        </div>
    )
}

export default Timer;