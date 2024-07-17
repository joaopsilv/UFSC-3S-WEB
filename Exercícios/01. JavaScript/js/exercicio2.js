function tratadorDeCliqueExercicio2() {
    let [time, period] = new Date().toLocaleTimeString('en-US').split(" ")
    let [hour, minutes, seconds] = time.split(":")
    console.log(`${hour} ${period} : ${minutes}m : ${seconds}s`)
}