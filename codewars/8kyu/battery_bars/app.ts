export function batteryBars(percent: number): string {
  let battery: string = ""
  if(percent === 100){
    battery = "[#####]"
  }else if(percent >= 80){
    battery = "[####.]"
  }else if(percent >= 60){
    battery = "[###..]"
  }else if(percent >= 40){
    battery = "[##...]"
  }else if(percent >= 20){
    battery = "[#....]"
  }else{
    battery = "[.....]"
  }
  return battery;
}