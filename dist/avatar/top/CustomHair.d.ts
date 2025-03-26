import * as React from 'react';
interface CustomHairProps {
    svgPath: string;
    children?: React.ReactNode;
}
export default class CustomHair extends React.Component<CustomHairProps> {
    static optionValue: string;
    private mask1;
    private path1;
    render(): JSX.Element;
}
export {};
