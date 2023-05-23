import React from 'react';

const JournalEntry = () => {
    return (
        <div className={'bg-gray-900 h-auto w-full text-white overflow-hidden transition-all ease-in-out flex my-2 rounded-lg hover:bg-yellow-500 cursor-pointer'}>
            <div className={'w-14'}>
            <img alt={'...'} className={'object-cover h-full'} src={'https://picsum.photos/seed/picsum/200'}/>
            </div>
            <div className={'w-fit text-start py-2 ms-2 justify-center flex flex-col'}>
                <p className={'font-medium'}>Marion Bustamante</p>
                <p className={''}>Today I went to the park</p>
            </div>
            <div className={'flex px-2 flex-1 flex-col justify-center font-normal items-center text-sm'}>
                <p className={''}>Monday</p>
                <p className={''}>03:34</p>
            </div>

        </div>
    );
};


export default JournalEntry;
