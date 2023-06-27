document.onmousemove = MouseEvent;
function MouseEvent(evenement)
{
        if(navigator=="Google Chrome")
        {
                var x = evenement.x+document.body.scrollLeft;
                var y = evenement.y+document.body.scrollTop;
        }
        else
        {
                var x =  evenement.pageX;
                var y =  evenement.pageY;
        }
        document.getElementById("bat").style.left = (x+1)+'px';
        document.getElementById("bat").style.top  = (y+1)+'px';
}