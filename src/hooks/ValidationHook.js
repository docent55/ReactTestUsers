import { useState, useEffect } from 'react';

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect( () => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLenght':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    break;

                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
                    break;

                case 'isEmail':
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
                    break;
                default:
                    
            }
        }
    }, [value, validations]);

    useEffect( () => {
        if (isEmpty || maxLengthError || minLengthError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [isEmpty, maxLengthError, minLengthError]);

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        inputValid,
    }
};

export default useValidation;