export const getDayName = (data) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(data.dt * 1000);
    const dayName = days[date.getDay()];
    return dayName
}