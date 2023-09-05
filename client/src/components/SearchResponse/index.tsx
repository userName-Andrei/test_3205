import React, {FC} from 'react';
import { Response } from '../../types';
import styles from './SearchResponse.module.css';

interface SearchResponseProps {
    response: Response | null,
    loading?: boolean
}

const SearchResponse: FC<SearchResponseProps> = ({response, loading}) => {

    if (loading) {
        return <div className={styles.loading}></div>
    }
    
    if (!response) return null

    if ('message' in response) {
        return <div>
            <p className={styles.data}>{response.message}</p>
        </div>
    }

    return (
        <ul>
            {response.map((res, i) => (
                <li className={styles.person} key={res.email + i}>
                    <p className={styles.data}>Email: {res.email}</p>
                    <p className={styles.data}>Number: {res.number}</p>
                </li>
            ))}
        </ul>
    );
};

export default SearchResponse;