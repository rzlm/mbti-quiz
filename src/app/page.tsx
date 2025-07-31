"use client";
import Question from "@/components/Question";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {ArrowBigRight} from "lucide-react";
import schoolLearningQuestions from "@/data/schoolLearning";
import selfGrowthQuestions from "@/data/selfgrowth";
import { useState } from "react";
import workQuestions from "@/data/work";
import { calculateMBTI } from "@/lib/functions";
// import TraitsCard from "@/components/TraitsCard";
import mbtiPersonalities from "@/data/personality";

//import creativeQuestions from "@/data/creative";
export default function Home() {

 

const [currentIndex, setCurrentIndex] = useState(0);
const [quiz, selectedQuiz] = useState(0); // Default to work questions
const [answers, setAnswers] = useState<string[]>([]);
const [result, setResult] = useState("");
const [percentageResults, setPercentageResults] = useState({E: 0, S: 0,T: 0,J: 0});
const [mbtiDescription, setMbtiDescription] = useState("");
const [mbtiName, setMbtiName] = useState("");

const handleChangeQuiz = (quizType:number) => {
  selectedQuiz(quizType);
  setCurrentIndex(0);
  setAnswers([]); 
};

let listLength = 0;
if (quiz === 0) {
  listLength = schoolLearningQuestions.length;
} else if (quiz === 1) {
  listLength = workQuestions.length;
} else if (quiz === 2) {
  // listLength = creativeQuestions.length; // Assuming you have a creativeQuestions array
} else if (quiz === 3) {
  listLength = selfGrowthQuestions.length;
}

const handleNext = () => {
  console.log("Next question clicked. Index:", currentIndex);
  if (currentIndex < listLength - 1) {
  setCurrentIndex(currentIndex + 1);
  }
    if (currentIndex >= listLength - 1) {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult.type);
    setPercentageResults(mbtiResult.percentages);
    console.log("MBTI Result:", mbtiResult);
    console.log("Percentage Results:", mbtiResult.percentages);
    //get the description for the result
    const result = mbtiPersonalities.find((p) => p.code === mbtiResult.type);
    setMbtiDescription(result?.description || "");
    setMbtiName(result?.name || "");


  

}

}
  const categories ={
    question: "Select a question mode",
    options: ["🎓 School & Learning", "💼 Work & Careers", "🎨 Creative", "🧠 Self-Growth"],
    descriptions: [
      "Explore questions related to academic settings and learning experiences.",
      "Dive into scenarios that reflect workplace dynamics and career choices.",
      "Engage with creative prompts that stimulate artistic thinking.",
      "Reflect on personal development and self-improvement challenges."
    ]
}

//track user responses


const handleOptionClick = (option: { text: string; value: string }) => {
  console.log("Selected option:", option);
  const updatedAnswers = [...answers];
  updatedAnswers[currentIndex] = option.value; // Store the selected option for the current question
  setAnswers(updatedAnswers);
};

const handleBack = () => {
  console.log("Back button clicked. Current index:", currentIndex);
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  } 
};




  return (
    <div className=" m-24 ">
   <div className="mb-12">
    <h1 className="text-4xl font-bold text-center">Personalities Quiz </h1>
    <p className="text-center">Take the quiz and discover your personality type, in different situations!</p>
   </div>
  <div>
        <div>
            <h2 className="text-2xl font-bold text-center"></h2>
            <div className="mt-4 space-y-2 grid grid-cols-2">
                {categories.options.map((option: string, index: number) => (
                   <button key={index} className='hover:scale-105' onClick={() => handleChangeQuiz(index)} > <Card  className="p-4 m-4">
                        <CardTitle >{option}</CardTitle>
                        {/* <CardDescription>
                        {categories.descriptions[index]}
                       </CardDescription> */}
                    </Card>
                    </button>
                ))}
            </div>

        </div>

        </div>
  <div className="mt-12 items-center justify-center">
    <h2 className="text-xl font-bold  mb-4 bg-purple-100 w-fit text-center p-2 rounded-lg mx-auto ">
      {quiz === 0
        ? "School & Learning"
        : quiz === 1
        ? "Work & Careers"
        : quiz === 2
        ? "Creative"
        : quiz === 3
        ? "Self-Growth"
        : "Unknown Quiz Type"}
    </h2>
  <div className={result ? 'hidden' : ''}>
<h3 className="text-center">Question: {currentIndex + 1}/{listLength}</h3>
     {quiz === 0 && schoolLearningQuestions[currentIndex] && (
      <Question
        key={currentIndex}
        question={schoolLearningQuestions[currentIndex].question}
        options={schoolLearningQuestions[currentIndex].options.map((choice: any) => choice)}
        onOptionClick={handleOptionClick}
      />
    )} 
    {quiz === 1 && workQuestions[currentIndex] && (
      <Question
        key={currentIndex}
        question={workQuestions[currentIndex].question}
        options={workQuestions[currentIndex].options.map((choice: any) => choice)}
        onOptionClick={handleOptionClick}
      />
    )}
    {/* 
    {quiz === 2 && creativeQuestions[currentIndex] && (
      <Question
        key={currentIndex}
        question={creativeQuestions[currentIndex].question}
        options={creativeQuestions[currentIndex].options.map((choice: any) => choice.text)}
      />
    )} */}
    {quiz === 3 && selfGrowthQuestions[currentIndex] && (
      <Question
        key={currentIndex}
        question={selfGrowthQuestions[currentIndex].question}
        options={selfGrowthQuestions[currentIndex].options.map((choice: any) => choice)}
        onOptionClick={handleOptionClick}
      />
    )}
    <Button
    className="mt-4 w-full bg-purple-100 hover:bg-purple-200 text-gray-800"
    onClick={handleBack}
    >
      Back

    </Button>
    <Button
      className="mt-4 w-full bg-purple-800 hover:bg-purple-900"
      onClick={handleNext}
     
    >
      {currentIndex === listLength - 1 ? "Submit" : "Next"}
      <ArrowBigRight />
    </Button>
    </div>
  </div>
  {result && (
    <div className="mt-12 text-center">
      <h2 className="text-2xl font-bold">Your MBTI Type is: {result}</h2>
      <h3 className="text-xl font-semibold mt-4">{mbtiName}</h3>
      <p> {mbtiDescription}</p>
      {/* <TraitsCard percentages={percentageResults} /> */}
      <p className="text-lg">Thank you for taking the quiz!</p>
    
    </div>
    
  )}
    </div>
  );
}




