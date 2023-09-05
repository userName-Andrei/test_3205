import React, {FC} from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInputs, Response } from '../../types';
import styles from './SearchForm.module.css';

interface SearchFormProps {
    setResponse: React.Dispatch<React.SetStateAction<Response | null>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchForm: FC<SearchFormProps> = ({setResponse, setLoading}) => {

    const {register, handleSubmit, formState: { errors }} = useForm<IFormInputs>({
        mode: 'onBlur'
    });

    const onChangeMaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let matrix = '__-__-__',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = e.currentTarget.value.replace(/\D/g, '');

        if(def.length >= val.length) {
            val = def;
        }

        e.currentTarget.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) 
                : i >= val.length ? '' : a;
        })

        if(e.type === 'blur') {
            if(e.currentTarget.value.length == 2) {
                e.currentTarget.value = '';
            }
        }
    }

    const onSubmit: SubmitHandler<IFormInputs> = async data => {
        setLoading(state => true)

        const response: Response = await fetch("http://localhost:4000/search", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({...data, number: data.number.replaceAll('-', '')})
        }).then(res => res.json())

        setLoading(state => false)

        setResponse(state => response)
    };

    return (
        <div className={styles.search}>
            <h1 className={styles.search__title}>Search in JSON file</h1>
            <form 
                className={styles.searchForm}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles.searchForm__group}>
                    <label className={styles.searchForm__label} htmlFor="email">
                        Enter Email
                    </label>
                    <input className={styles.searchForm__input} type="text" id='email' 
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Email is required!'
                            },
                            pattern: {
                                value: 
                                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email format!"
                            }
                        })}  
                    />
                    <p className={styles.searchForm__error}>{errors.email?.message}</p>
                </div>

                <div className={styles.searchForm__group}>
                    <label className={styles.searchForm__label} htmlFor="number">
                        Enter number
                    </label>
                    <input className={styles.searchForm__input} type="text" id='number'
                        {...register('number', {
                            onChange: onChangeMaskInput
                        })}  
                    />
                    <p className={styles.searchForm__error}>{errors.number?.message}</p>
                </div>
                
                <button className={styles.searchForm__submit}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SearchForm;