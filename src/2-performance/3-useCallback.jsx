import React, { useState, memo, useCallback } from 'react';

const ResetButton = props => console.log("render") || <button style={{padding: 20}} onClick={props.onClick}>Reset!</button>;
const ResetButtonMemo = memo(ResetButton);


const Component = () => {
    const [ value, setValue ] = useState(0);

    // const reset = useCallback(() => {
    //     setValue(0);
    // }, [setValue])

    const reset = () => {
        setValue(0);
    }

    console.log("render main component");

    return (
        <div>
            <div>
                {value}
            </div>
            <button onClick={() => setValue(value + 1)}>ADD ONE</button>
            <button onClick={() => setValue(value - 1)}>SUBSTRACT ONE</button>
            <hr/>
            No memo: <ResetButton onClick={reset} />
            <br/>
            Memo: <ResetButtonMemo onClick={reset} />
        </div>
    );
};

// --------------------- MAIN ---------------------

const Main = () => <Component />;

export default Main;
