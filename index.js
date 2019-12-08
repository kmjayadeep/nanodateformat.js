const padZero = n => n < 9 ? `0${n}` : n;

exports.formatDate = (dateObj, separator) => {
    separator = separator || '-';
    const yyyy = dateObj.getFullYear();
    const MM = padZero(dateObj.getMonth() + 1);
    const dd = padZero(dateObj.getDate());

    return `${dd}${separator}${MM}${separator}${yyyy}`;
}

exports.formatTime = (dateObj) => {
    const hours = dateObj.getHours();
    const hh = padZero(hours % 12 || 12);
    const a = hours > 12 ? 'PM' : 'AM';
    const mm = padZero(dateObj.getMinutes());

    return `${hh}:${mm} ${a}`;
}

exports.formatDateTime = (dateObj, separator) => {
    separator = separator || '-';

    const yyyy = dateObj.getFullYear();
    const MM = padZero(dateObj.getMonth() + 1);
    const dd = padZero(dateObj.getDate());
    const hours = dateObj.getHours();
    const hh = padZero(hours % 12 || 12);
    const a = hours > 12 ? 'PM' : 'AM';
    const mm = padZero(dateObj.getMinutes());
    
    return `${dd}${separator}${MM}${separator}${yyyy} ${hh}:${mm} ${a}`;

}
