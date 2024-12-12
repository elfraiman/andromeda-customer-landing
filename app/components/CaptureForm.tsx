"use client";
import { Companies } from "@/prisma/generated/base";
import { Box, Checkbox, FormControlLabel, MenuItem, TextField, Tooltip } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { useLandPage } from "../context/LandPageContext";
import { useProducts } from "../context/ProductsContext";
import { createInputsBuilder } from "../utils/inputsBuilderUsers";
import { generatePassword } from "../utils/utilityFunctions";
import styles from "./CaptureForm.module.scss";

// Form types
interface FormData {
    selectedProducts: Record<string, boolean>;
    [key: string]: string | boolean | number | Record<string, boolean>; // Allow dynamic fields
}

interface UpdateData {
    LandPageRowId: string;
    user: FormData;
}

const CaptureForm = (props: { companyData: Companies }) => {
    const inputsBuilder = createInputsBuilder();
    const { filteredProducts } = useProducts();
    const { landPageRowId } = useLandPage();
    const [formData, setFormData] = useState<FormData>(
        inputsBuilder.reduce((acc, input) => {
            acc[input.name] = input.defaultValue;
            return acc;
        }, { selectedProducts: {} })
    );
    const [errors, setErrors] = useState<Record<string, string | null>>({});
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        if (filteredProducts.length > 0) {
            setFormData((prev) => ({
                ...prev,
                selectedProducts: filteredProducts.reduce(
                    (acc, product) => ({
                        ...acc,
                        [product.ProductName]: prev.selectedProducts?.[product.ProductName] ?? true, // Preserve existing values or default to true
                    }),
                    {}
                ),
            }));
        }
    }, [filteredProducts]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validateField = (name: string, value: any, validate: string[]): string | null => {
        for (const rule of validate) {
            switch (rule) {
                case "notEmpty":
                    if (!value) return "This field is required.";
                    break;
                case "upTo20":
                    if (value.length > 20) return "Maximum 20 characters allowed.";
                    break;
                case "tz":
                    if (!/^\d{9}$/.test(value)) return "Invalid ID format.";
                    break;
                case "phone":
                    if (!/^\d{10}$/.test(value)) return "Invalid phone number.";
                    break;
                case "email":
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email.";
                    break;
                default:
                    break;
            }
        }
        return null;
    };

    const handleGeneratePassword = () => {
        const newPassword = generatePassword();
        setFormData((prev) => ({
            ...prev,
            password: newPassword, // Assuming "password" is the field name
        }));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, action: string) => {
        const { name, value } = e.target;
        const inputConfig = inputsBuilder.find((input) => input.name === name);

        // Handle number validation
        if (action === 'number') {
            const numericValue = Number(value);
            if (numericValue < 0 || isNaN(numericValue)) {
                return; // Exit early for invalid values
            }
        }
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (inputConfig?.validate) {
            const error = validateField(name, value, inputConfig.validate);
            setErrors((prev) => ({
                ...prev,
                [name]: error,
            }));
        }
    };

    const handleProductChange = (productName: string) => {
        setFormData((prev) => ({
            ...prev,
            selectedProducts: {
                ...prev.selectedProducts,
                [productName]: !prev.selectedProducts[productName],
            },
        }));
    };

    const updateLandPage = async (updateData: UpdateData) => {
        try {
            const response = await fetch('/api/update-landpage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateData),
            });

            if (!response.ok) {
                throw new Error('Failed to update LandPage');
            }

            setLoading(false);
            toast.success("Form submitted successfully!");
        } catch (error) {
            setLoading(false);
            console.error('Error updating LandPage:', error);
            toast.error("Form submitted successfully!");
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string | null> = {};

        inputsBuilder.forEach((input) => {
            const error = validateField(input.name, formData[input.name], input.validate || []);
            if (error) newErrors[input.name] = error;
        });

        setErrors(newErrors);

        if (Object.values(newErrors).some((error) => error)) {
            toast.warning("Please fix the errors in the form.");
            return;
        }

        setLoading(true);

        if (!landPageRowId) {
            console.log('No LandPageRowId provided.');
            return;
        }

        const updateData = {
            LandPageRowId: landPageRowId,
            user: formData,
        }

        await updateLandPage(updateData);
    };

    return (
        <Box
            className={styles.box}
            sx={{
                maxWidth: "900px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <h1 className={styles.title}>היי, {props?.companyData?.CompanyName} טוב לראות אותך!</h1>
            <p className={styles.subTitle}>מלאו את הפרטים הבאים לפתיחת משתמש חדש</p>

            <form onSubmit={handleSubmit}>
                <Grid2 container spacing={2}>
                    {inputsBuilder.map((input) => (
                        <Grid2 key={input.name} xs={12} sm={input.colSize || 6}>
                            {input.type === "select" ? (
                                <TextField
                                    select
                                    name={input.name}
                                    label={input.label}
                                    value={formData[input.name]}
                                    onChange={handleChange}
                                    error={!!errors[input.name]}
                                    helperText={errors[input.name]}
                                    fullWidth
                                    SelectProps={{
                                        MenuProps: {
                                            PaperProps: {
                                                style: {
                                                    maxHeight: 200, // Adjust dropdown max height
                                                    overflow: "auto", // Scroll if options exceed max height
                                                },
                                            },
                                        },
                                    }}
                                >
                                    {input.options?.map((option) => (
                                        <MenuItem key={option.id} value={option.id}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            ) : (
                                <TextField
                                    name={input.name}
                                    type={input.type}
                                    placeholder={input.label}
                                    label={formData[input.name] ? input.label : ""}
                                    value={formData[input.name]}
                                    onChange={handleChange}
                                    error={!!errors[input.name]}
                                    helperText={errors[input.name]}
                                    fullWidth
                                />
                            )}
                        </Grid2>
                    ))}
                </Grid2>

                {filteredProducts.length > 0 && (
                    <Box mt={3}>
                        <h3>בחר מוצרים</h3>
                        <Grid2 container spacing={1} >
                            {filteredProducts.map((product) => (
                                <Box key={product.ProductName} >
                                    <Tooltip title={product.ProductDescription || "No description available"} arrow>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={formData.selectedProducts?.[product.ProductName] ?? false}
                                                    onChange={() => handleProductChange(product.ProductsId)}
                                                    color="primary"
                                                />
                                            }
                                            label={product.ProductName}
                                        />
                                    </Tooltip>
                                </Box>
                            ))}
                        </Grid2>
                    </Box>
                )}

                <Box mb={3}>
                    <Button type="submit" disabled={loading} className={styles.loginBtn}>
                        {loading ? <Spinner animation="border" variant="light" /> : "הוסף משתמש"}
                    </Button>
                </Box>
            </form >
        </Box >
    );
};

export default CaptureForm;
