export const getDayName = (data) => {
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    const date = new Date(data.dt*1000);
    const dayName = days[date.getDay()];
    return dayName
}