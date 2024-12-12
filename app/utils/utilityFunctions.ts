import moment from "moment-timezone";

export const dateNowToServer = (): string => {
    const hours = moment().tz("Israel").format('Z');

    const currentLocalDate = moment().local().format('YYYY-MM-DD HH:mm:ss');
    const result = moment(currentLocalDate).add(hours, 'hours').toISOString();
    return result;
}


export const generatePassword = (length: number = 12): string => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
};
