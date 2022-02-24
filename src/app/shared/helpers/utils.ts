

export class Utils {

  public static convertDateFormat(date: any, separator = '/') {
    const d = new Date(date);
    return `${this.pad(d.getDate())}/${this.pad((d.getMonth() + 1))}/${d.getFullYear()}
      ${this.pad(d.getHours())}:${this.pad(d.getMinutes())}:${this.pad(d.getSeconds())}`;
  }

  public static pad(s: number) {
    return s < 10 ? '0' + s : s;
  }
}
