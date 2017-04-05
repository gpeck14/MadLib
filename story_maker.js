function makeStory() {
    // get form values (2 points)
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var noun4 = document.getElementById('noun4').value;
    var noun5 = document.getElementById('noun5').value;
    var pluralnoun1 = document.getElementById('pluralnoun1').value;
    var pluralnoun2 = document.getElementById('pluralnoun2').value;
    var propernoun1 = document.getElementById('propernoun1').value;
    var verb1 = document.getElementById('verb1').value;
    var verb2 = document.getElementById('verb2').value;
    var adverb1 = document.getElementById('adverb1').value;
    var adjective1 = document.getElementById('adjective1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var adjective3 = document.getElementById('adjective3').value;
    var adjective4 = document.getElementById('adjective4').value;

    // Set title of story. Use at least one form value in the title. (2 points)
    var title = "Ice Cream";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = "Ice cream comes in all shapes and sizes. You can have " + noun1 + " flavored ice cream with " + noun2 +
                     " on top. Ice cream is so good it makes my day " + adjective1 + " . I " + adverb1 +
                     "eat it in a cone or a cup. Sometimes, me and my " + pluralnoun1 + " go to eat ice cream together. ";

    var paragraph2 = "My favorite ice cream place is called" + noun3 + " Ice Cream. After I eat ice cream, I have a sugar rush and always " +
                     verb1 + "down the street. I especially like the ice cream truck and I always get the " + adjective2 +
                     " bar. The ice cream man's name is " + propernoun1 + " and he is always " + adjective3 +  " . ";

    var paragraph3 = " Ice cream is best when it is " + adjective4 + " . My favorite flavor is " + noun4 +
                      " chip. I have heard ice cream is so good even " + pluralnoun2 +
                      "eat it! But don't eat too much or you'll get a " + noun5 +
                      " ache! If it wasn't for ice cream, I think I would " + verb2 + " ! " ;


    // Display story by putting title & paragraphs into appropriate divs. (3 points)
document.getElementById('title').innerHTML = title;
document.getElementById('one').innerHTML = paragraph1;
document.getElementById('two').innerHTML = paragraph2;
document.getElementById('three').innerHTML = paragraph3;

}
