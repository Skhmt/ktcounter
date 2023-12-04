export default function msToTime(time) {
    const ms = (time%1000).toString().padStart(3, '0');
    const sec = Math.trunc((time / 1000) % 60).toString().padStart(2, '0');
    const min = Math.trunc((time / (60*1000)) % 60).toString().padStart(2, '0');
    const hrs = Math.trunc((time / (60*60*1000)) % 60).toString();

    return {
        hrs,
        min,
        sec,
        ms
    };
}