import React, {useState,useLayoutEffect} from 'react'


const QuizApp = () => {
  // Question with options and Also correct Answer
  const questions = [
    {
      question: 'Who won the 2018 FIFA World Cup?',
      options: ['Argentina', 'Brazil', 'France', 'Germany'],
      correctAnswer: 'France',
    },
    {
      question: 'Which nation has won the most World Cups?',
      options: ['Argentina', 'Brazil', 'Italy', 'Spain'],
      correctAnswer: 'Brazil',
    },
    {
      question: 'In what year did Spain win their first World Cup?',
      options: ['2022', '2014', '2002', '2010'],
      correctAnswer: '2010',
    },
    {
      question: 'In what year was Maradona’s ‘Hand of God’ incident?',
      options: ['1986', '1994', '1982', '2002'],
      correctAnswer: '1986',
    },
    {
      question: 'The 1966 final was played at which football stadium?',
      options: [
        'Wembley Stadium',
        'White City Stadium',
        'Old Trafford',
        'Goodison Park',
      ],
      correctAnswer: 'Wembley Stadium',
    },
  ]
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOption = e => {
    setSelectedOption(e.target.value)
  }

  const handleAnswerSubmit = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
      setSelectedOption(null)
    } else {
      setShowScore(true)
    }
  }

  const handleReload = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedOption(null)
  }

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#eaeef4"
    
});
  return (
    <>
      <div>
        <div className="w-[40%] mx-auto mt-[4%] bg-white rounded-md shadow-md ">
          {showScore ? (
            <>
              <h2 className="text-xl text-center flex justify-center items-center font-bold mt-7 mb-4 pt-7 ">
                You Answered {score}/{questions.length} Questions correctly
              </h2>
              <button
                className="bg-[#8e44ad] hover:bg-[#732d91] w-full text-white font-bold cursor-pointer py-5 px-10 rounded-b"
                onClick={handleReload}
              >
                Reload
              </button>
            </>
          ) : (
            <>
              <div className='p-[2%]'>
                <p className="text-lg text-center font-semibold text-[27px] mb-4 pt-12 font-sans ">
                  {questions[currentQuestion].question}
                </p>
                <form className='p-[6%]'>
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index}  className="mb-2 text-center ">
                      <label className="flex items-center cursor-pointer font-sans  text-black "  >
                        <input
                          type="radio"
                          value={option}
                          checked={selectedOption === option}
                          onChange={handleOption}
                          className="mr-2 text-center cursor-pointer"
                          required
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </form>
              </div>
              <button
                className="bg-[#8e44ad] hover:bg-[#732d91] text-white font-bold py-5 w-full px-6 cursor-pointer rounded-b"
                disabled={selectedOption === null}
                onClick={handleAnswerSubmit}
              >
                Submit
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default QuizApp
