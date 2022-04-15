setInterval(()=>{
    let d=new Date();
    let h=d.getHours();
    let m= d.getMinutes();
    let s= d.getSeconds();
    hrotate=30*h+m/2;
    mrotate=6*m;
    srotate=6*s;


    hr.style.transform=`rotate(${hrotate}deg)`;
    min.style.transform=`rotate(${mrotate}deg)`;
    sec.style.transform=`rotate(${srotate}deg)`

},1000)