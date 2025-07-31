import React from 'react'

interface TraitsCardProps {
  percentages: { E: number; S: number; T: number; J: number; };
}
const TraitsCard = ({ percentages }: TraitsCardProps) => {

  const traits = [
    {
      percentage: percentages.E,
      dominantTrait: "Introverted",
      leftLabel: "Extraverted",
      rightLabel: "Introverted",
      color: "bg-blue-500",
      textColor: "text-purple-500",
    },
    {
      percentage: percentages.S,
      dominantTrait: "Intuitive",
      leftLabel: "Intuitive",
      rightLabel: "Observant",
      color: "bg-yellow-500",
      textColor: "text-purple-600",
    },
    {
      percentage: percentages.T,
      dominantTrait: "Feeling",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      color: "bg-green-500",
      textColor: "text-purple-600",
    },
    {
      percentage: percentages.J,
      dominantTrait: "Judging",
      leftLabel: "Judging",
      rightLabel: "Prospecting",
      color: "bg-purple-500",
      textColor: "text-purple-600",
    },
    
  ]
  return (
   <div className="max-w-xl mx-auto p-4  min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-lg font-bold text-purple-900">Personality Traits</h1>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="space-y-10">
          {traits.map((trait, index) => (
            <div key={index} className="space-y-4">
              <div className="text-center">
                <span className={`text-md font-semibold ${trait.textColor}`}>{trait.percentage}%</span>
                <span className="text-md font-semibold text-gray-700 ml-2">{trait.dominantTrait}</span>
              </div>

              <div className="relative">
                {/* Background Bar */}
                <div className="w-full h-3 bg-gray-200 rounded-full"></div>

                <div
                  className={`absolute top-0 left-0 h-3 ${trait.color} rounded-full transition-all duration-500`}
                  style={{ width: `${trait.percentage}%` }}
                ></div>

                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 ${trait.color} rounded-full border-4 border-white shadow-lg transition-all duration-500`}
                  style={{ left: `calc(${trait.percentage}% - 12px)` }}
                ></div>
              </div>

              <div className="flex justify-between text-lg text-gray-500 font-medium">
                <span>{trait.leftLabel}</span>
                <span>{trait.rightLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TraitsCard