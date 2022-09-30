import React from 'react'
import FlipCountdown from '@rumess/react-flip-countdown';

export default function Home() {
    const timecountdown = '2022-12-01 11:59:59'
    return (
        <div>
            <FlipCountdown
                theme='dark' // Options (Default: dark): dark, light.
                endAt={timecountdown} // Date/Time
                hideYear={(new Date(timecountdown).getFullYear()) === (new Date().getFullYear())}
                hideMonth={(new Date(timecountdown).getFullYear()) === (new Date().getFullYear()) && (new Date(timecountdown).getMonth()) === (new Date().getMonth())}
                yearTitle='Năm'
                monthTitle='Tháng'
                dayTitle='Ngày'
                hourTitle='Giờ'
                minuteTitle='Phút'
                secondTitle='Giây'
            />
        </div>
    )
}
