"use client";
import { Companies } from "@/prisma/generated/base";
import {
    Box,
    Checkbox,
    FormControlLabel,
    MenuItem,
    TextField,
    Tooltip,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/navigation"; // Import the router
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { useLandPage } from "../context/LandPageContext";
import { useProducts } from "../context/ProductsContext";
import { createInputsBuilder } from "../utils/inputsBuilderUsers";
import styles from "./CaptureForm.module.scss";


// Form types
interface FormData {
    selectedProducts: Record<string, boolean>;
    [key: string]: string | boolean | number | Record<string, boolean>;
}

interface UpdateData {
    LandPageRowId: string;
    user: FormData;
}

const CaptureForm = ({ companyData }: { companyData: Companies }) => {
    const router = useRouter();
    const inputsBuilder = createInputsBuilder();
    const { filteredProducts } = useProducts();
    const { landPageRowId } = useLandPage();
    const [formData, setFormData] = useState<FormData>(
        inputsBuilder.reduce((acc, input) => {
            acc[input.name] = input.defaultValue || "";
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
                        [product.ProductName]: prev.selectedProducts?.[product.ProductName] ?? true,
                    }),
                    {}
                ),
            }));
        }
    }, [filteredProducts]);

    const validateField = (
        name: string,
        value: string | number | boolean,
        validate: string[]
    ): string | null => {
        for (const rule of validate) {
            switch (rule) {
                case "notEmpty":
                    if (!value) return "שדה זה הוא חובה.";
                    break;
                case "upTo20":
                    if (String(value).length > 20)
                        return "מקסימום 20 תווים מותרים.";
                    break;
                case "tz":
                    if (!/^\d{9}$/.test(String(value)))
                        return "פורמט תעודת זהות שגוי.";
                    break;
                case "phone":
                    if (!/^\d{10}$/.test(String(value)))
                        return "מספר טלפון לא תקין.";
                    break;
                case "email":
                    if (
                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value))
                    )
                        return "אימייל לא תקין.";
                    break;
                default:
                    break;
            }
        }
        return null;
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        const inputConfig = inputsBuilder.find((input) => input.name === name);

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
            const response = await fetch("/api/update-landpage", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updateData),
            });

            if (!response.ok) throw new Error("Failed to update LandPage");

            toast.success("Form submitted successfully!");
        } catch (error) {
            console.error("Error updating LandPage:", error);
            toast.error("Failed to update LandPage.");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string | null> = {};
        router.push("/users/list");
        inputsBuilder.forEach((input) => {
            const error = validateField(
                input.name,
                formData[input.name] as any,
                input.validate || []
            );
            if (error) newErrors[input.name] = error;
        });

        setErrors(newErrors);

        if (Object.values(newErrors).some((error) => error)) {
            toast.warning("נא לתקן את השגיאות בטופס.");
            return;
        }

        if (!landPageRowId) {
            toast.error("LandPageRowId חסר.");
            return;
        }

        setLoading(true);

        try {
            await updateLandPage({
                LandPageRowId: landPageRowId,
                user: formData,
            });
            // Navigate only after successful submission
            //
            router.push("/users/list");
        } catch (error) {
            console.error("Error updating LandPage:", error);
            toast.error("Failed to update LandPage.");
        } finally {
            setLoading(false);

        }
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
            <h1 className={styles.title}>
                היי, {companyData?.CompanyName} טוב לראות אותך!
            </h1>

            <p className={styles.subTitle}>
                מלאו את הפרטים הבאים לפתיחת משתמש חדש
            </p>

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
                        <Grid2 container spacing={1}>
                            {filteredProducts.map((product) => (
                                <Box key={product.ProductName}>
                                    <Tooltip
                                        title={
                                            product.ProductDescription ||
                                            "No description available"
                                        }
                                        arrow
                                    >
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={
                                                        formData.selectedProducts?.[
                                                        product.ProductName
                                                        ] ?? false
                                                    }
                                                    onChange={() =>
                                                        handleProductChange(product.ProductsId)
                                                    }
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
            </form>
        </Box>
    );
};

export default CaptureForm;
