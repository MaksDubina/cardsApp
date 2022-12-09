import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import SuperButton from "../components/SuperComponents/c2-SuperButton/SuperButton";
import SuperInputText from "../components/SuperComponents/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "../components/SuperComponents/c3-SuperCheckbox/SuperCheckbox";

export const Test = () => {
    return (
        <div className={styleContainer.container}>
            <div style={{display:'flex', flexDirection:'column', gap: '20px'}}>
                <SuperInputText placeholder={'Super Input'}/>
                <SuperButton>Super Button</SuperButton>
                <SuperCheckbox>Super Checkbox</SuperCheckbox>
            </div>

        </div>
    );
};
