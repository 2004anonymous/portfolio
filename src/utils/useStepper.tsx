import { ReactElement, useState } from "react"

export const useStepper = (steps: ReactElement[]) => {
    const [currentstate, setcurrentstate] = useState(0);
    function next(){
        if(currentstate <= steps.length-1){
        setcurrentstate(currentstate+1);
        }
    }
    function back(){
        if(currentstate > 0){
        setcurrentstate(currentstate-1);

        }    }

    function isCompleted(){
        if(currentstate >= 3){
            return true;
        }
        return false;
    }
    return {
        isCompleted,
        steps,
        currentstate,
        step: steps[currentstate],
        next,
        back
    }
}