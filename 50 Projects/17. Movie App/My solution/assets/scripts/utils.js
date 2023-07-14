export const formatMinutes = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes - 60 * hours;
    return `${hours < 10 ? '0' : ''}${hours}:${mins < 10 ? '0' : ''}${mins}`
}

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const formatMoney = (value) => {
    return USDollar.format(value)
}
