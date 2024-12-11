"use client";
import React, { ChangeEvent } from "react";
import { TextField, InputAdornment } from "@mui/material";
import Image from "next/image"; // Ensure this is available for your project
import styles from "./CaptureForm.module.scss"; // Separate styles for this component

interface LanguageRestrictedInputProps {
    name: string;
    placeholder: string;
    label: string;
    value: string;
    showError: boolean;
    icon: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LanguageRestrictedInput: React.FC<LanguageRestrictedInputProps> = ({
    name,
    placeholder,
    label,
    value,
    showError,
    icon,
    onChange,
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const isValid = /^[א-ת\s]+$/.test(inputValue); // Only allow Hebrew letters and spaces

        if (isValid || inputValue === "") {
            onChange(e); // Update parent state only if valid or empty
        }
    };

    return (
        <TextField
            className={styles.formInput}
            name={name}
            value={value}
            onChange={handleChange}
            error={!value && showError}
            helperText={!value && showError ? `${placeholder} is required` : ""}
            label={value ? label : ""}
            placeholder={placeholder}
            fullWidth
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Image width={26} height={26} src={icon} alt={`${placeholder} Icon`} />
                    </InputAdornment>
                ),
            }}
            inputProps={{
                dir: "rtl", // Hebrew is RTL, ensure proper text alignment
            }}
        />
    );
};

export default LanguageRestrictedInput;
