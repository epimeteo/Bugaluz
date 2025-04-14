"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4">
      {[
        { label: "Días", value: timeLeft.days },
        { label: "Horas", value: timeLeft.hours },
        { label: "Minutos", value: timeLeft.minutes },
        { label: "Segundos", value: timeLeft.seconds },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-orange-500 text-2xl font-bold text-white md:h-24 md:w-24 md:text-4xl">
            {item.value}
          </div>
          <span className="mt-2 text-sm font-medium md:text-base">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
