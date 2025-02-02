import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@/shared/ui/button';

import { getCounterValue } from '../model/selectors/get-counter-value/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();

    const counterValue = useSelector(getCounterValue);

    const incHandler = () => {
        dispatch(counterActions.increment());
    };

    const decHandler = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1>
                {counterValue}
            </h1>
            <Button onClick={incHandler}>+</Button>
            <Button onClick={decHandler}>-</Button>
        </div>
    );
};
