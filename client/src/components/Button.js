import React from "react";
import Button from "@material-tailwind/react/Button";

export default function Button2({text, onClick}) {
    return (
        <Button
            color="lightBlue"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={onClick}
        >
            {text}
        </Button>
    )
}