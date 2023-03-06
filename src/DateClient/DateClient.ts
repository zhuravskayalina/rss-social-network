export class DateClient {
  public static formatPost(date: string | number): string {
    const timestamp = Number(date);
    const newDate = new Date(timestamp);
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    const year = newDate.getFullYear();
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const time = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

    return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year} ${time}`;
  }
}
