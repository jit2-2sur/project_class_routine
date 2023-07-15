window.onload = () => 
{
    //date and day
    let d= new Date();
    document.getElementById("tm").innerHTML=d.toDateString();

    //today's class
    let td= d.getDay()
    if (td==1) {
        document.getElementById('w0').classList.add("wc0");
    } else {
        document.getElementById('w0').classList.remove("wc0");
    }

    if (td==2) {
        document.getElementById('w1').classList.add("wc1");
    } else {
        document.getElementById('w1').classList.remove("wc1");
    }

    if (td==3) {
        document.getElementById('w2').classList.add("wc2");
    } else {
        document.getElementById('w2').classList.remove("wc2");
    }

    if (td==4) {
        document.getElementById('w3').classList.add("wc3");
    } else {
        document.getElementById('w3').classList.remove("wc3");
    }

    if (td==5) {
        document.getElementById('w4').classList.add("wc4");
    } else {
        document.getElementById('w4').classList.remove("wc4");
    }
    if (td==6 || td==0) {
        document.getElementById('w5').classList.add("wc5");
    } else {
        document.getElementById('w5').classList.remove("wc5");
    }

    //class now and next
    let thr = d.getHours();
    let tmin = d.getMinutes();
    const week=['w5','w0','w1','w2','w3','w4','w5'];
    // ..
    if (thr < 10 || thr > 17) 
    {
        document.getElementById('now').style.display= "none";
        document.getElementById('next').style.display= "none";
    }
    else
    {
        document.getElementById('nc1').style.display= "none";
        document.getElementById('nc2').style.display= "none";
    }
    //document.getElementById('subname1').innerHTML= snm1;
}