"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { TextField, Box, Grid, InputAdornment } from "@mui/material";
import { toast } from "react-toastify";
import { Button, Spinner } from "react-bootstrap";
import Image from "next/image";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import styles from "./CaptureForm.module.scss";
import username from "@/img/svg/username.svg";
import LanguageRestrictedInput from "./LanguageRestrictedInput";

// Form types
interface FormData {
    firstName: string;
    lastName: string;
    firstNameHeb: string;
    lastNameHeb: string;
    personId: string; // Changed to string for validation
    phoneNumber: string; // Changed to string for validation
    email: string;
    dateOfBirth: Dayjs | null;
}

const CaptureForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        firstNameHeb: "",
        lastNameHeb: "",
        personId: "",
        phoneNumber: "",
        email: "",
        dateOfBirth: null,
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [showErrors, setShowErrors] = useState<boolean>(false);

    // Error state for individual fields
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validateField = (name: keyof FormData, value: string | Dayjs | null): string | null => {
        switch (name) {
            case "firstName":
            case "lastName":
                return value ? null : "שדה זה חובה";
            case "firstNameHeb":
            case "lastNameHeb":
                return /^[א-ת\s]+$/.test(value as string) ? null : "חייב להיות בעברית.";
            case "personId":
                return /^\d{9}$/.test(value as string) ? null : "תעודה מזהה חייבת להיות בת 9 ספרות.";
            case "phoneNumber":
                return /^\d{10}$/.test(value as string) ? null : "מספר הטלפון חייב להיות בן 10 ספרות.";
            case "email":
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string) ? null : "הזן אימייל חוקי.";
            case "dateOfBirth":
                return value ? null : "תאריך לידה נדרש";
            default:
                return null;
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        const error = validateField(name as keyof FormData, value);
        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));
    };

    const handleDateChange = (date: Dayjs | null): void => {
        setFormData((prev) => ({
            ...prev,
            dateOfBirth: date,
        }));

        const error = validateField("dateOfBirth", date);
        setErrors((prev: any) => ({
            ...prev,
            dateOfBirth: error,
        }));
    };

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        setShowErrors(true);

        // Check for any remaining errors
        const newErrors: Partial<FormData> = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key as keyof FormData, formData[key as keyof FormData]);
            if (error) newErrors[key as keyof FormData] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            toast.warning("Please fix the errors in the form.");
            return;
        }

        setLoading(true);

        // Simulate form submission
        setTimeout(() => {
            setLoading(false);
            toast.success("Form submitted successfully!");
        }, 2000);
    };

    const hasErrors = Object.values(errors).some((error) => error !== null);

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
            <h1 className={styles.title}>היי, סססס טוב לראות אותך!</h1>
            <p className={styles.subTitle}>מלאו את הפרטים הבאים כדי לרשום לקוח</p>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="firstName"
                            placeholder="שם פרטי בלועזית"
                            label={formData.firstName ? "שם פרטי בלועזית" : ""}
                            className={styles.formInput}
                            value={formData.firstName}
                            onChange={handleChange}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Image width={26} height={26} src={username} alt={`Icon`} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="lastName"
                            placeholder="שם משפחה בלועזית"
                            label={formData.lastName ? "שם משפחה בלועזית" : ""}
                            className={styles.formInput}
                            value={formData.lastName}
                            onChange={handleChange}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Image width={26} height={26} src={username} alt={`Icon`} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LanguageRestrictedInput
                            name="firstNameHeb"
                            icon={username}
                            placeholder="שם פרטי בעברית"
                            label="שם פרטי בעברית"
                            value={formData.firstNameHeb}
                            showError={!!errors.firstNameHeb}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LanguageRestrictedInput
                            name="lastNameHeb"
                            icon={username}
                            placeholder="שם משפחה בעברית"
                            label="שם משפחה בעברית"
                            value={formData.lastNameHeb}
                            showError={!!errors.lastNameHeb}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="personId"
                            type="number"
                            className={styles.formInput}
                            placeholder="תעודת זהות"
                            label={formData.personId ? "תעודת זהות" : ""}
                            value={formData.personId}
                            onChange={handleChange}
                            error={!!errors.personId}
                            helperText={errors.personId}
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Image width={26} height={26} src={username} alt={`Icon`} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="phoneNumber"
                            type="number"
                            className={styles.formInput}
                            placeholder="טלפון נייד"
                            label={formData.phoneNumber ? "טלפון נייד" : ""}
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            error={!!errors.phoneNumber}
                            helperText={errors.phoneNumber}
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Image width={26} height={26} src={username} alt={`Icon`} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="email"
                            placeholder="אימייל"
                            label={formData.email ? "אימייל" : ""}
                            className={styles.formInput}
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Image width={26} height={26} src={username} alt={`Icon`} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DatePicker
                            label="תאריך לידה"
                            value={formData.dateOfBirth}
                            onChange={handleDateChange}
                            slotProps={{
                                textField: {
                                    error: !!errors.dateOfBirth,
                                    helperText: errors.dateOfBirth || "",
                                    fullWidth: true,
                                    className: styles.formInput,
                                },
                            }}
                        />
                    </Grid>
                </Grid>

                <Box mt={3}>
                    <Button type="submit" disabled={loading || hasErrors} className={styles.loginBtn}>
                        {loading ? <Spinner animation="border" variant="light" /> : "שליחה"}
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default CaptureForm;
