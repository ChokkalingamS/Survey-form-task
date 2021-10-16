
let s1=1;
function star1()
{
    if(s1==1)
    {
      return  star1ON();
    }
      return  star1OFF();
    
}

function star1ON()
{
    document.querySelector('#year1').style.color='gold';
    s1=0;

}

function star1OFF()
{
    document.querySelector('#year1').style.color='black';
    s1=1;
}


let s2=1;
function star2()
{
    if(s2==1)
    {
      return  star1ON(),star2ON();
    }
      return  star1OFF(),star2OFF();
    
}

function star2ON()
{
    document.querySelector('#year2').style.color='gold';
    s2=0;

}

function star2OFF()
{
    document.querySelector('#year2').style.color='black';
    s2=1;
}




let s3=1;
function star3()
{
    if(s3==1)
    {
      return  star1ON(),star2ON(),star3ON();
    }
      return  star1OFF(),star2OFF(),star3OFF();
    
}

function star3ON()
{
    document.querySelector('#year3').style.color='gold';
    s3=0;

}

function star3OFF()
{
    document.querySelector('#year3').style.color='black';
    s3=1;
}






let s4=1;
function star4()
{
    if(s4==1)
    {
      return  star1ON(),star2ON(),star3ON(),star4ON();
    }
      return  star1OFF(),star2OFF(),star3OFF(),star4OFF();
    
}

function star4ON()
{
    document.querySelector('#year4').style.color='gold';
    s4=0;

}

function star4OFF()
{
    document.querySelector('#year4').style.color='black';
    s4=1;
}





let s5=1;
function star5()
{
    if(s5==1)
    {
      return  star1ON(),star2ON(),star3ON(),star4ON(),star5ON();
    }
      return  star1OFF(),star2OFF(),star3OFF(),star4OFF(),star5OFF();
    
}

function star5ON()
{
    document.querySelector('#year5').style.color='gold';
    s5=0;

}

function star5OFF()
{
    document.querySelector('#year5').style.color='black';
    s5=1;
}