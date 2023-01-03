function CalculateTime(timeInSeconds: number): Array<number | string> {
  let hours: number = Math.floor(timeInSeconds / 3600);
  console.log(".....", timeInSeconds);
  console.log(".............", hours)
  let minutes: number = Math.floor((timeInSeconds - hours * 3600) / 60);
  let seconds: number = timeInSeconds - hours * 3600 - minutes * 60;

  let hoursFormat = hours < 10 ? `0${hours}` : hours;
  console.log("new hf is.....", hoursFormat)
  let minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
  let secondsFormat = seconds < 10 ? `0${seconds}` : seconds;
  return [hoursFormat, minutesFormat, secondsFormat];
}
export default CalculateTime;
