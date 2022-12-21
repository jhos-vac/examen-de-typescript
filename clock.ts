import { time } from "console";
let MinutesinDay:number=1440;
let MinutesinHour:number= 60;
export class Clock {
  private minutes: number=0;
  private Totalminutes(minutes: number): number {
    if (minutes < 0)
      return MinutesinDay + ~~(minutes % MinutesinDay);
    else if (minutes >= MinutesinDay)
      return ~~(minutes % MinutesinDay);
    return minutes;
  }
  constructor(hour: number, minute:  number=0) {
    this.minutes = this.Totalminutes((hour * MinutesinHour) + minute);
  }
  public toString(): string {
    let minutos= this.minutes%60
    let hora= this.minutes/60

    return String(hora).padStart(2, "0") + ":" + String(minutos).padStart(2, "0")

  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.minutes + minutes)
  }

  public minus(minutes: number): Clock {
    return new Clock(0, this.minutes - minutes)
  }

  public equals(other: Clock): boolean{
    return this.minutes == other.minutes;
  }
}
