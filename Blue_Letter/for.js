for(var i=20; i>=0; i--)
{
    if(i==20 || i==15)
    {
        console.log(i,"초");
        sleep(5000);
    }
    else if(i==0)
    {
        console.log("출발!");
    }
    else if(i<=10)
    {
        console.log(i,"초");
        sleep(1000);
    }
}

function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}