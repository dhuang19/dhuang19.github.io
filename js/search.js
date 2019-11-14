function searchProject() {
    //Convert input to upper case
    var input = document.getElementById("searchInput");
    var filter = input.nodeValue.toUpperCase();

    //List of possible projects
    var ul = document.getElementById("projectUL");
    var li = ul.getElementsByTagName('li');

    //List of accepted inputs
    var langs = ["C#", "C++", "C", "JAVA", "PYTHON", "CSS", "HTML", "JAVASCRIPT", "VISUAL BASIC", "MIPS", "ASSEMBLY", "VERILOG", "OCAML"];
    var engines = ["UNITY", "UNREAL"];
    var frameworks = ["VR", "OCULUS", "REACT NATIVE", "ASP.NET CORE", "RAZOR", "OKTA"];
    var fields = ["TOOLS", "GAMEPLAY", "SCRIPTING", "SSO", "UI", "MACHINE LEARNING", "ML", "NLP"];

    //Loop through list items & make those that match query appear
    for (i=0; i<li.length; i++) 
    {
        //Retrieve <a> element
        var a = li[i].getElementsByTagName("a")[0];
        //Retrieve class list of <a> element
        var cList = a.classList;

        var display = false;

        //Search in langs
        for (j=0; j<langs.length; j++)
        {
            if (langs[j].indexOf(filter) > -1)
            {
                display = true;
            } else 
            {
                display = false;
            }
        }

        //Search in engines
        for (j=0; j<engines.length; j++)
        {
            if (engines[j].indexOf(filter) > -1)
            {
                display = true;
            } else 
            {
                display = false;
            }
        }

        //Search in frameworks
        for (j=0; j<frameworks.length; j++)
        {
            if (frameworks[j].indexOf(filter) > -1)
            {
                display = true;
            } else 
            {
                display = false;
            }
        }

        //Search in fields
        for (j=0; j<fields.length; j++)
        {
            if (fields[j].indexOf(filter) > -1)
            {
                display = true;
            } else 
            {
                display = false;
            }
        }

        if (display)
        {
            li[i].style.display = "";
        } else 
        {
            li[i].style.display = "none";
        }
    }
}