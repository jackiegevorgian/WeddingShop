import { useState,useEffect } from 'react';
const Progress = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
const [counters, setCounters] = useState({
    Professional_Service: 0,
    Caterin: 0,
    Professional_Design: 0,
});

useEffect(() => {
    const handleScroll = () => {
        const currentPosition = window.scrollY;
        setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


useEffect(() => {
    if (scrollPosition > 6500) {
        console.log(scrollPosition);
        const interval = setInterval(() => {
            setCounters((prevCounters) => ({
                Professional_Service: Math.min(100, prevCounters.Professional_Service + 1),
                Caterin: Math.min(59, prevCounters.Caterin + 1),
                Professional_Design: Math.min(77, prevCounters.Professional_Design + 1),
            }));
        }, 12);

        return () => clearInterval(interval);
    }
}, [scrollPosition]);
    return (
        <div className='Progress_box'>
            <div><label for="Professional_Service">Downloading progress</label><span>{counters.Professional_Service}%</span></div>
            <progress id="Professional_Service" value={counters.Professional_Service} max={100}></progress>
            <div><label for="Catering">Catering</label><span>{counters.Caterin}%</span></div>
            <progress id='Catering' value={counters.Caterin} max={100}></progress>
            <div><label for='Professional_Design'>Professional Design</label><span>{counters.Professional_Design}%</span></div>
            <progress id='Professional_Design' value={counters.Professional_Design} max={100}></progress>
        </div>
    )
}

export default Progress