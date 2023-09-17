interface ChipProps {
    variant?: "filled" | "outlined";
    color?: "neutral";
    children: React.ReactNode;
}

const Chip = (props: ChipProps) => {
    const {
        variant = "outlined",
        color = "neutral",
        children
    } = props;

    return <div className="Chip" data-variant={variant} data-color={color}> {children}</div>
}

export default Chip;