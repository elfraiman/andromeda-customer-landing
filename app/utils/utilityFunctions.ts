import moment from "moment-timezone";

export function dateNowToServer(): string {
    const hours = moment().tz("Israel").format('Z');

    const currentLocalDate = moment().local().format('YYYY-MM-DD HH:mm:ss');
    const result = moment(currentLocalDate).add(hours, 'hours').toISOString();
    return result;
}
