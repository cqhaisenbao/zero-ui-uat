import Button from "../../../components/Button";
import React from "react";
import './ButtonDemo.scss';

export const ButtonDemo: React.FC = (props: any) => {
    return (
        <div className="buttonDemo">
            <h1>button</h1>
            <h4>支持大小</h4>
            <Button/>
            <Button size="lg"/>
            <Button size="sm"/>
        </div>
    );
};
