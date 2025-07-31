"use client"
import React from 'react'
import { Button } from './ui/button';
import { useState } from 'react';
import { on } from 'events';

interface QuestionProps{
    question: string;
    options: {
        text: string;
        value: string;
    }[];
    onOptionClick: (option: { text: string; value: string }) => void;

}


const Question: React.FC<QuestionProps> = ({ question, options, onOptionClick }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    
  const handleOptionClick = (option:string) => {
    console.log("Selected option:", option);
    onOptionClick({ text: option, value: option });
    setSelectedOption(option);
  }

  return (
    <div>
        <div>
            <h2 className="text-2xl font-bold text-center">{question}</h2>
            <div className="mt-4 space-y-2">
                {options.map((option, index) => (
                    <button key={index} name={option.value}  className={` text-center outline p-4 shadow-sm rounded w-full ${selectedOption === option.value ? 'bg-blue-500 hover:bg-blue-500 hover:text-white text-white' : ''}`} onClick={() => handleOptionClick(option.value)}>
                        {option.text}
                    </button>
                ))}
            </div>
          
        </div>

        </div>
    
  )
}

export default Question