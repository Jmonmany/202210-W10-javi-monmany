import { useState } from 'react';
import '../../index.css';

export function CheckButton({
    getGentleman,
}: {
    getGentleman: () => void;
}) {
    const classState = {
        check: 'gentleman__icon',
    };

    const [checkedClass, setCount] = useState(classState);

    const handlerCheck = () => {
        setCount({
            ...checkedClass,
            check: 'gentleman__icon--checked',
        });
        getGentleman();
    };

    return (
        <>
            <i
                className={`icon ${checkedClass.check} fas fa-check`}
                onClick={() => {
                    handlerCheck();
                }}
            ></i>
        </>
    );
}
