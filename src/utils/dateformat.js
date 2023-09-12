export default function dateFormat(time,fmstring){
  let date = new Date(time)
  const dateObj = {
    'y+':date.getFullYear(),
    'M+':date.getMonth()+1,
    "d+":date.getDate(),
    "h+":date.getHours(),
    "m+":date.getMinutes(),
    "s+":date.getSeconds()
  }

  for (const key in dateObj) {
    if(new RegExp(key).test(fmstring)){
      const value = (dateObj[key]+"").padStart(2,'0')
      fmstring = String(fmstring).replace(new RegExp(key),value)
    }
  }
  return fmstring

}