import React, { useEffect, useState, useRef } from 'react'






const Stepper = ({ steps, currentStep }) => {


    const [newStep, setNewStep] = useState([]);


    const stepRef = useRef()


    const updateStep = (stepNumber, steps) => {

    }







    useEffect(() => {

        //create object...

        const stepsState = steps.map((step, i) =>

            Object.assign({}, {
                description: step,
                completed: false,
                highlighted: i === 0 ? true : false,
                selected: i === 0 ? true : false
            })

        )


        stepRef.current = stepsState;
        const current = updateStep(currentStep - 1, stepRef.current)

        setNewStep(current)

    }, [steps, currentStep])







    const displaySteps = newStep.map((step, i) => {
        return (
            <div className='w-full flex items-center'>


                <div className='relative flex flex-col items-center text-teal-600'>
                    <div className='rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3'> {/* display number */}1</div>



                    <div className='absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase'> {/* display description */}Description</div>

                </div>




                <div className='flex-auto border-t-2 transition duration-500 ease-in-out '>
                    {/* display line */}
                </div>



            </div>


        )
    })










    return (
        <div className='mx-4 p-4 flex justify-between items-center'>
            {displaySteps}
        </div>
    )
}

export default Stepper