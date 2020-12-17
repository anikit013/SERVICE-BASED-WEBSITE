var anikit=document.getElementById("id1")
function abc(obj)
{
    var pushed=obj.innerHTML;
    if(pushed=="=")
        {
            anikit.innerHTML=eval(anikit.innerHTML);
        }
    else if(pushed=="AC")
        {
            anikit.innerHTML="0";
        }
    else 
        {
            if(anikit.innerHTML=="0")
        {
            anikit.innerHTML=pushed;
        }
         else
             {
                 anikit.innerHTML=anikit.innerHTML+pushed
             }
             }
        }