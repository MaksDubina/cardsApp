import React from 'react';
import style from './Header.module.css'
import SuperButton from "../SuperComponents/c2-SuperButton/SuperButton";

type PropsType = {
    buttonName: string
}

export const Header = (props: PropsType) => {
    return (
        <div className={style.header}>
            <div className={style.HeaderContainer}>
                <h1>It incubator</h1>
                {/*<button>{props.buttonName}</button>*/}
                <SuperButton>{props.buttonName}</SuperButton>
            </div>
        </div>
    );
};
