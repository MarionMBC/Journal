import React from 'react';
import {AiOutlineStar} from "react-icons/ai";

const NothingSelected = () => {
    return (
        <div className={'flex h-full'}>
            <div className={'flex-1 flex flex-col justify-center items-center'}>
                {/*Icon*/}
                <AiOutlineStar className={'w-20 h-20 text-yellow-500'}/>
                <p className={'text-2xl font-medium'}>Select something</p>
                <p className={'text-xl font-normal'}>or create an entry</p>
            </div>
        </div>
    );
};

export default NothingSelected;
