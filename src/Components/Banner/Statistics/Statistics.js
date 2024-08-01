import './Statistics.css'
import { useState, useEffect } from 'react'

const EventsStatistics = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [counters, setCounters] = useState({
        FLOWERARRANGEMENTS: 0,
        CEREMONIES: 0,
        DIFFERENTCAKE: 0,
        HAPPYCOUPLES: 0
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
        if (scrollPosition > 4900) {
            const interval = setInterval(() => {
                setCounters((prevCounters) => ({
                    FLOWERARRANGEMENTS: Math.min(1656, prevCounters.FLOWERARRANGEMENTS + 1),
                    CEREMONIES: Math.min(1200, prevCounters.CEREMONIES + 1),
                    DIFFERENTCAKE: Math.min(1940, prevCounters.DIFFERENTCAKE + 1),
                    HAPPYCOUPLES: Math.min(2367, prevCounters.HAPPYCOUPLES + 1)
                }));
            }, 3);

            return () => clearInterval(interval);
        } else if (scrollPosition > 1000) {
            const interval = setInterval(() => {
                setCounters((prevCounters) => ({
                    FLOWERARRANGEMENTS: Math.min(1656, prevCounters.FLOWERARRANGEMENTS + 1),
                    CEREMONIES: Math.min(1200, prevCounters.CEREMONIES + 1),
                    DIFFERENTCAKE: Math.min(1940, prevCounters.DIFFERENTCAKE + 1),
                    HAPPYCOUPLES: Math.min(2367, prevCounters.HAPPYCOUPLES + 1)
                }));
            }, 3);

            return () => clearInterval(interval);
        }
    }, [scrollPosition]);

    const show = scrollPosition > 4900 ? 'flex' : scrollPosition > 1000 ? 'flex' : 'none';

    return (
        <div className='Statistics_Cont' style={{ display: show }}>
            <div className='EvStat_Box'>
                <span>{counters.FLOWERARRANGEMENTS}</span>
                <h4>FLOWER ARRANGEMENTS</h4>
            </div>
            <div className='EvStat_Box'>
                <span>{counters.CEREMONIES}</span>
                <h4>CEREMONIES</h4>
            </div>
            <div className='EvStat_Box'>
                <span>{counters.DIFFERENTCAKE}</span>
                <h4>DIFFERENT CAKES</h4>
            </div>
            <div className='EvStat_Box'>
                <span>{counters.HAPPYCOUPLES}</span>
                <h4>HAPPY COUPLES</h4>
            </div>
        </div>
    );
}

export default EventsStatistics;
