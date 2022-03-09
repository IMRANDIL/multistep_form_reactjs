import React, { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import Account from "./components/steps/Account";
import Details from "./components/steps/Details";
import Final from "./components/steps/Final";






const App = () => {

  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    "Account Information",
    "Personal Details",
    "Complete"


  ]



  const displayStep = (step) => {


    switch (step) {
      case 1:
        <Account />

        break;
      case 2:
        <Details />
        break;
      case 3:
        <Final />
        break;
      default:
        break;
    }

  }



  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* stepper */}
      <div className="container horizontal mt-5">
        <Stepper
          steps={steps}
          currentStep={currentStep}

        />

      </div>



      {/* navigation controls */}

      <StepperControl />

    </div>
  );
}

export default App;
