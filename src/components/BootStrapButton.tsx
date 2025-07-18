import Button from 'react-bootstrap/Button';

interface Props {
    children: string;
    onClick: () => void;
    variant?: "primary" | "secondary" |"danger";
}
const  BootStrapButton =({children, variant = 'primary', onClick}:Props) => {
    return (<Button variant={variant} onClick={onClick}>
        {children}
        </Button>
    )

}

export default BootStrapButton