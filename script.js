const updateTime = () => {
    let d = new Date();

    india.innerHTML = d
      .toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      })
      .split(", ")[1];
    india_dt.innerHTML = d
      .toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      })
      .slice(0, 10);

    usa.innerHTML = d
      .toLocaleString("en-US", {
        timeZone: "America/Chicago",
      })
      .split(", ")[1];

    usa_dt.innerHTML = d
      .toLocaleString("en-US", {
        timeZone: "America/Chicago",
      })
      .slice(0, 10);

    australia.innerHTML = d
      .toLocaleString("en-US", {
        timeZone: "Australia/Sydney",
      })
      .split(", ")[1];
    australia_dt.innerHTML = d
      .toLocaleString("en-US", {
        timeZone: "Australia/Sydney",
      })
      .slice(0, 10);

    let alarmmin = alarm.value.split(":")[1]
    let alarmhour = alarm.value.split(":")[0]
    let audiourl = "https://nzt6ku-a.akamaihd.net/downloads/ringtones/files/mp3/7120-download-iphone-6-original-ringtone-42676.mp3"
    if (d.getHours() == alarmhour && d.getMinutes() == alarmmin){
      console.log('Alarm is ringing..')
      var audio = new Audio(audiourl);
      audio.play();
    }

  };
let intvClock = setInterval(updateTime, 1000);

function stop(){
    clearInterval(intvClock);
}

function start(){
    intvClock = setInterval(updateTime, 1000);
}