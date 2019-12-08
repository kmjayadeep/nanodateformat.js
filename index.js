const padZero = n => n < 9 ? `0${n}` : n;

exports.formatDate = (dateObj) => {
    const yyyy = dateObj.getFullYear();
    const MM = padZero(dateObj.getMonth() + 1);
    const dd = padZero(dateObj.getDate());
    
    return `${dd}-${MM}-${yyyy}`;
}

exports.formatTime = (dateObj) => {
    const hours = dateObj.getHours();
    const hh = padZero(hours % 12 || 12);
    const a = hours > 12 ? 'PM' : 'AM';
    const mm = padZero(dateObj.getMinutes());

    return `${hh}:${mm} ${a}`;
}

exports.formatDateTime = (dateObj) => {
    const yyyy = dateObj.getFullYear();
    const MM = padZero(dateObj.getMonth() + 1);
    const dd = padZero(dateObj.getDate());
    const hours = dateObj.getHours();
    const hh = padZero(hours % 12 || 12);
    const a = hours > 12 ? 'PM' : 'AM';
    const mm = padZero(dateObj.getMinutes());
    
    return `${dd}-${MM}-${yyyy} ${hh}:${mm} ${a}`;

}
