import { LoadButton } from "./Button.styled";

export const Button = ({ onClick, value }) => {
    return (
        <LoadButton onClick={onClick}>{value}</LoadButton>
    );
};