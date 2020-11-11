
    var i=0;
var name_array=[
  "Ranvir Singh-  My father",
  "Jyotika Sharma-  My Mother",
  "Sushma Sharma- My Maternal Grandmother , Gurjeet- Kaur My Paternal Grand Mother",
  "V.M Sharma- My Maternal Grandfather , Jagjit Singh- My Paternal Grand Father",
    "My self- Jujhar Singh"];
  var images_array=[
    "https://learnenglishkids.britishcouncil.org/sites/kids/files/RS1677_Father%20col-web.jpg",
    "https://learnenglishkids.britishcouncil.org/sites/kids/files/image/RS1681_Mother%20col-web_0.jpg",
    "http://o.quizlet.com/i/7UdlyUl_owBPiOPp_I2c5A_m.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhwGHlrm39GuGk7OziBdmYfb4fkxuPN27OlA&usqp=CAU",
    "https://i.dlpng.com/static/png/6383243_preview.png",
       ];
function next(){
  document.getElementById("Image").src=images_array[i];
  document.getElementById("Name").innerHTML=name_array[i];
  i++
}