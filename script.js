var guess=Math.floor(Math.random()*100) +1
function calc()
{
  if(document.getElementById('in').value =='')
    { 
      document.getElementById('out').innerHtml='<h2>Kindly Enter the number</h2>'
        return
    }
  var n = parseInt(document.getElementById('in').value)
  if(n == guess)
     document.getElementById('out').innerHTML= '<h2>Congrats! You got it correctly👍😎</h2>'
  else if(n > guess)
    document.getElementById('out').innerHTML= '<h2>Guess a small number</h2>'
  else
    document.getElementById('out').innerHTML= '<h2>Guess a greater number</h2>'
  
}