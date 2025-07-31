import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from 'next/link';
import mbtiPersonalities from '@/data/personality';
const page = () => {


const dimensions = [
  { name: "Energy", options: ["Extraversion (E)", "Introversion (I)"] },
  { name: "Information", options: ["Sensing (S)", "Intuition (N)"] },
  { name: "Decisions", options: ["Thinking (T)", "Feeling (F)"] },
  { name: "Structure", options: ["Judging (J)", "Perceiving (P)"] },
]
  return (
    <div className=' mx-auto p-4'>

       <div className='m-2'>
         For more information on the test, refer to this article:
        <Link  className='text-blue-500 hover:underline' href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator"
        >Myers–Briggs Type Indicator</Link>
       </div>

          <Card className="mb-8">
          <CardHeader>
            <CardTitle>The Four Dimensions</CardTitle>
            <CardDescription>MBTI is based on preferences in four key areas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {dimensions.map((dimension) => (
                <div key={dimension.name} className="text-center">
                  <h3 className="font-semibold text-slate-900 mb-2">{dimension.name}</h3>
                  <div className="space-y-1">
                    {dimension.options.map((option) => (
                      <div key={option} className="text-sm text-slate-600 bg-slate-100 rounded px-2 py-1">
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle> 16 Personality types</CardTitle>
            <CardDescription>Explore the 16 MBTI personality types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mbtiPersonalities.map((personality, i) => (
                  <Card className="p-4" key={i}>
                    <CardTitle className='text-purple-800'>{personality.name}</CardTitle>
                    <CardDescription>{personality.code}</CardDescription>
                    <CardDescription>{personality.description}</CardDescription>
                  </Card>
              ))}
            </div>
          </CardContent>
        </Card>

    </div>
  )
}

export default page