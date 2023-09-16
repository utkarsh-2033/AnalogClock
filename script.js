const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hr = 30*h + m/2;
    mr = 6*m + s/10;
    sr = 6*s;
    hour.style.transform = `rotate(${hr}deg)`;
    min.style.transform = `rotate(${mr}deg)`;
    sec.style.transform = `rotate(${sr}deg)`;
    days=d.toLocaleDateString(undefined, options);
    time= h+':'+m+':'+s;
    document.getElementById("time").innerText=time
    document.getElementById("day").innerText=days
}, 1000);
