var timer;

for(timer=100; timer>=0; timer--)
{
    if(timer%5==0&& timer>=10)
        console.log(timer);
    else if(timer<10 && timer >0)
        console.log(timer);
    else if(timer==0)
        console.log("출발");
}