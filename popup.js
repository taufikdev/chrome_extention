var streetNumber = ["25489", "87459", "35478", "15975", "95125", "78965"];
var streetName = ["A street", "B street", "C street", "D street", "E street", "F street"];
var cityName = ["Casablanca", "Rabat", "Fez", "Marrakech", "Tanger", "Agadir", "Oujda"];
var stateName = ["Qassem State", "North State", "East State", "South State", "West State"];
var zipCode = ["28889", "96459", "35748", "15005", "99625", "71465"];
var fullName = ["Murtadi Younis","Almanzor Nasrallah","Ulfah Ansari","Tehmina Sarwar","Naziah Mostafa","Raaina Basha","Wajee Allee","Youness Fakhir","Kamal Azzan"];
var phone =["+212 61 806 5861","+212 61 151 3750","+212 61 456 4241","+212 61 467 7436","+212 61 436 5109","+212 61 719 4042","+212 81 789 7055"];
var template = [streetNumber, " ", streetName, ", ", cityName, " ", stateName, ", ", zipCode];
var lorem1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos similique ut cupiditate. Dolorum molestiae ut maiores id eius ratione totam eaque est quae tenetur, repellendus libero reiciendis laudantium nemo quisquam!";
var lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta, tortor aliquet eleifend cursus, arcu tellus efficitur arcu, eget lobortis augue turpis et magna. In pharetra molestie orci rutrum auctor. Proin sit amet tellus commodo, facilisis orci egestas, tempus ante. Praesent feugiat, libero eget ultrices euismod, odio diam vulputate nunc, ac sollicitudin nunc lacus sit amet dolor. Pellentesque efficitur commodo tellus, eu tempor massa tincidunt vel. Mauris vulputate tortor at sapien vulputate volutpat. Nam volutpat vitae lacus et hendrerit. Nulla facilisi. Aliquam erat volutpat. Maecenas non nibh nec ante pellentesque hendrerit non non risus.

Ut euismod, neque non condimentum sodales, mauris urna malesuada mauris, sed consectetur ligula elit ut libero. Aenean nec augue vitae nisi sollicitudin dignissim. Cras vel elit ullamcorper, scelerisque sapien ut, sagittis libero. Nulla ornare tellus vitae lectus accumsan imperdiet. Sed rhoncus orci iaculis odio tincidunt porta. Integer erat massa, gravida vitae lorem sed, rhoncus imperdiet est. Phasellus mattis ac tortor non facilisis. Praesent a sem et metus pretium pellentesque. Sed convallis aliquet libero faucibus laoreet. Donec sed bibendum lorem, at rhoncus ex. In iaculis vehicula justo, fermentum blandit erat faucibus quis. Morbi nec eleifend magna. Nullam tortor nunc, lacinia sit amet libero vel, sagittis maximus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus fringilla augue sit amet pretium vulputate. Vivamus sit amet massa sagittis, tristique neque quis, facilisis libero.
`
var lorem3 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta, tortor aliquet eleifend cursus, arcu tellus efficitur arcu, eget lobortis augue turpis et magna. In pharetra molestie orci rutrum auctor. Proin sit amet tellus commodo, facilisis orci egestas, tempus ante. Praesent feugiat, libero eget ultrices euismod, odio diam vulputate nunc, ac sollicitudin nunc lacus sit amet dolor. Pellentesque efficitur commodo tellus, eu tempor massa tincidunt vel. Mauris vulputate tortor at sapien vulputate volutpat. Nam volutpat vitae lacus et hendrerit. Nulla facilisi. Aliquam erat volutpat. Maecenas non nibh nec ante pellentesque hendrerit non non risus.

Praesent non blandit lectus, at gravida turpis. Praesent pellentesque ante quis nibh commodo rutrum. Morbi posuere justo id nisl consequat condimentum. Donec cursus lacinia ipsum, in convallis risus porta vitae. Curabitur ultrices magna magna, vitae gravida ipsum placerat sed. Maecenas blandit diam nec orci fringilla, id ullamcorper lorem vulputate. Integer facilisis tincidunt erat, non cursus diam feugiat quis. Cras molestie aliquam justo a tristique. Morbi quis arcu id lacus malesuada ultricies. Mauris et enim id ipsum pellentesque ultrices. Cras dui odio, facilisis at justo quis, ultricies ultrices mi.

Ut euismod, neque non condimentum sodales, mauris urna malesuada mauris, sed consectetur ligula elit ut libero. Aenean nec augue vitae nisi sollicitudin dignissim. Cras vel elit ullamcorper, scelerisque sapien ut, sagittis libero. Nulla ornare tellus vitae lectus accumsan imperdiet. Sed rhoncus orci iaculis odio tincidunt porta. Integer erat massa, gravida vitae lorem sed, rhoncus imperdiet est. Phasellus mattis ac tortor non facilisis. Praesent a sem et metus pretium pellentesque. Sed convallis aliquet libero faucibus laoreet. Donec sed bibendum lorem, at rhoncus ex. In iaculis vehicula justo, fermentum blandit erat faucibus quis. Morbi nec eleifend magna. Nullam tortor nunc, lacinia sit amet libero vel, sagittis maximus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus fringilla augue sit amet pretium vulputate. Vivamus sit amet massa sagittis, tristique neque quis, facilisis libero.
`
var lorem4 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta, tortor aliquet eleifend cursus, arcu tellus efficitur arcu, eget lobortis augue turpis et magna. In pharetra molestie orci rutrum auctor. Proin sit amet tellus commodo, facilisis orci egestas, tempus ante. Praesent feugiat, libero eget ultrices euismod, odio diam vulputate nunc, ac sollicitudin nunc lacus sit amet dolor. Pellentesque efficitur commodo tellus, eu tempor massa tincidunt vel. Mauris vulputate tortor at sapien vulputate volutpat. Nam volutpat vitae lacus et hendrerit. Nulla facilisi. Aliquam erat volutpat. Maecenas non nibh nec ante pellentesque hendrerit non non risus.

Praesent non blandit lectus, at gravida turpis. Praesent pellentesque ante quis nibh commodo rutrum. Morbi posuere justo id nisl consequat condimentum. Donec cursus lacinia ipsum, in convallis risus porta vitae. Curabitur ultrices magna magna, vitae gravida ipsum placerat sed. Maecenas blandit diam nec orci fringilla, id ullamcorper lorem vulputate. Integer facilisis tincidunt erat, non cursus diam feugiat quis. Cras molestie aliquam justo a tristique. Morbi quis arcu id lacus malesuada ultricies. Mauris et enim id ipsum pellentesque ultrices. Cras dui odio, facilisis at justo quis, ultricies ultrices mi.

Etiam facilisis nec eros nec consectetur. Nam pharetra diam vitae dolor vehicula hendrerit. Cras ac pharetra velit. Suspendisse maximus feugiat sagittis. Integer sodales blandit mauris id dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam congue massa vel ante pretium, vel volutpat elit cursus. Suspendisse suscipit pretium nibh, et egestas nisi aliquet a. Donec tristique facilisis enim, in hendrerit magna porta ornare.

Ut euismod, neque non condimentum sodales, mauris urna malesuada mauris, sed consectetur ligula elit ut libero. Aenean nec augue vitae nisi sollicitudin dignissim. Cras vel elit ullamcorper, scelerisque sapien ut, sagittis libero. Nulla ornare tellus vitae lectus accumsan imperdiet. Sed rhoncus orci iaculis odio tincidunt porta. Integer erat massa, gravida vitae lorem sed, rhoncus imperdiet est. Phasellus mattis ac tortor non facilisis. Praesent a sem et metus pretium pellentesque. Sed convallis aliquet libero faucibus laoreet. Donec sed bibendum lorem, at rhoncus ex. In iaculis vehicula justo, fermentum blandit erat faucibus quis. Morbi nec eleifend magna. Nullam tortor nunc, lacinia sit amet libero vel, sagittis maximus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus fringilla augue sit amet pretium vulputate. Vivamus sit amet massa sagittis, tristique neque quis, facilisis libero.
`
var lorem5=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta, tortor aliquet eleifend cursus, arcu tellus efficitur arcu, eget lobortis augue turpis et magna. In pharetra molestie orci rutrum auctor. Proin sit amet tellus commodo, facilisis orci egestas, tempus ante. Praesent feugiat, libero eget ultrices euismod, odio diam vulputate nunc, ac sollicitudin nunc lacus sit amet dolor. Pellentesque efficitur commodo tellus, eu tempor massa tincidunt vel. Mauris vulputate tortor at sapien vulputate volutpat. Nam volutpat vitae lacus et hendrerit. Nulla facilisi. Aliquam erat volutpat. Maecenas non nibh nec ante pellentesque hendrerit non non risus.

Praesent non blandit lectus, at gravida turpis. Praesent pellentesque ante quis nibh commodo rutrum. Morbi posuere justo id nisl consequat condimentum. Donec cursus lacinia ipsum, in convallis risus porta vitae. Curabitur ultrices magna magna, vitae gravida ipsum placerat sed. Maecenas blandit diam nec orci fringilla, id ullamcorper lorem vulputate. Integer facilisis tincidunt erat, non cursus diam feugiat quis. Cras molestie aliquam justo a tristique. Morbi quis arcu id lacus malesuada ultricies. Mauris et enim id ipsum pellentesque ultrices. Cras dui odio, facilisis at justo quis, ultricies ultrices mi.

Etiam facilisis nec eros nec consectetur. Nam pharetra diam vitae dolor vehicula hendrerit. Cras ac pharetra velit. Suspendisse maximus feugiat sagittis. Integer sodales blandit mauris id dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam congue massa vel ante pretium, vel volutpat elit cursus. Suspendisse suscipit pretium nibh, et egestas nisi aliquet a. Donec tristique facilisis enim, in hendrerit magna porta ornare.

Ut euismod, neque non condimentum sodales, mauris urna malesuada mauris, sed consectetur ligula elit ut libero. Aenean nec augue vitae nisi sollicitudin dignissim. Cras vel elit ullamcorper, scelerisque sapien ut, sagittis libero. Nulla ornare tellus vitae lectus accumsan imperdiet. Sed rhoncus orci iaculis odio tincidunt porta. Integer erat massa, gravida vitae lorem sed, rhoncus imperdiet est. Phasellus mattis ac tortor non facilisis. Praesent a sem et metus pretium pellentesque. Sed convallis aliquet libero faucibus laoreet. Donec sed bibendum lorem, at rhoncus ex. In iaculis vehicula justo, fermentum blandit erat faucibus quis. Morbi nec eleifend magna. Nullam tortor nunc, lacinia sit amet libero vel, sagittis maximus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus fringilla augue sit amet pretium vulputate. Vivamus sit amet massa sagittis, tristique neque quis, facilisis libero.

Curabitur lobortis, est at luctus mollis, elit ante ullamcorper nibh, eget volutpat lorem ligula quis tellus. Morbi sollicitudin varius elit sit amet ultrices. Nulla faucibus tempus nibh, ornare consectetur velit mollis vitae. Integer hendrerit neque id efficitur egestas. Ut ac tellus varius mi hendrerit rhoncus in sed orci. Aenean cursus pharetra nulla sit amet rutrum. Proin ac commodo neque. Fusce consectetur augue sit amet luctus bibendum. Curabitur posuere, purus quis interdum dapibus, dui tortor efficitur ex, nec consequat orci diam congue felis. Aenean at sapien id dolor blandit maximus et in dolor. Nulla mollis urna eu nisl auctor convallis. Donec feugiat dui non placerat ornare.`


function getRandomAddress() {
  return template.map(getRandomElement).join("");
}

function getRandom(arr){
    if (arr instanceof Array) return arr[Math.floor(Math.random()*arr.length)]
}

function getRandomElement(array) {
  if (array instanceof Array) return array[Math.floor(Math.random() * array.length)];
  else return array;
}

document.querySelector("#refresh").addEventListener("click", function() {
  

    if(document.querySelector("#FullName:checked") !==null){
        document.querySelector("#name").textContent = getRandom(fullName);
        document.querySelector("#name").style.display="block"
    }else{
        document.querySelector("#name").style.display="none"
    }
    if(document.querySelector("#Phone:checked") !==null){
        document.querySelector("#phone").textContent = getRandom(phone);
        document.querySelector("#phone").style.display="block"
    }else{
        document.querySelector("#phone").style.display="none"
    }
    if(document.querySelector("#Adress:checked") !==null){
        document.querySelector("#adress").textContent = getRandomAddress();
        document.querySelector("#adress").style.display="block"
    }else{
        document.querySelector("#adress").style.display="none"
    }
    if(document.querySelector("#Text:checked") !==null){
        
    
    
    switch(parseInt(document.getElementById("number").value)){
        case 1:
            document.querySelector("#lorem").textContent = lorem1;
            document.querySelector("#lorem").style.display="block"
        break;
        case 2:
            document.querySelector("#lorem").textContent = lorem2;
            document.querySelector("#lorem").style.display="block"
        break;
        case 3:
            document.querySelector("#lorem").textContent = lorem3;
            document.querySelector("#lorem").style.display="block"
        break;
        case 4:
            document.querySelector("#lorem").textContent = lorem4;
            document.querySelector("#lorem").style.display="block"
        break;
        case 5:
            document.querySelector("#lorem").textContent = lorem5;
            document.querySelector("#lorem").style.display="block"
        break;
    }
    }else{
        document.querySelector("#lorem").style.display="none"
    }

});
