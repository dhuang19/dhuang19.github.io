//Detects when there's no input automatically
function detectEmpty()
{
  var ul = document.getElementById("projectUL");
  var li = ul.getElementsByTagName('li');

  var input = document.getElementById("input");
  if (input.value == "") 
  {
    for (i=0; i<li.length; i++)
    {
      li[i].style.display = "none";
    }
  }
}

//Search projecs list on enter with keyword
function searchProjects() 
{
  var ul = document.getElementById("projectUL");
  var li = ul.getElementsByTagName('li'); 

  //Convert input to upper case & remove whitespace
  var input = document.getElementById("input");
  var filter = input.value.toUpperCase().replace(/\s+/g, '');

  if (input.value == "")
  {
    for (i=0; i<li.length; i++)
    {
      li[i].style.display = "none";
    }
  }
  else 
  {
    //Loop through list items & make those that match query appear
    for (i=0; i<li.length; i++) 
    {
        //Retrieve <a> element
        var a = li[i].getElementsByTagName("a")[0];
        //Retrieve class list of <a> element
        var cList = a.classList;

        //Go through all classes
        for (j=1; j<cList.length; j++)
        {
          if (filter != "C") {
            if (cList[j].indexOf(filter) > -1)
            {
              li[i].style.display = "";
              break;
            }
            else 
            {
              li[i].style.display = "none";
            }
          }
          else {
            //Handle C special case
            if (cList[j] == "C") {
              li[i].style.display = "";
              break;
            }
          }
        }
      }
    }
}