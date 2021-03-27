new WOW().init();
var i = 0,
    text;
var j = 0,
    text2;
var element = document.getElementById("ram");
text = "رمــضــان كــريــم";
text2 =
    "اللهم اجعل صيامي فيه صيام الصائمين وقيامي فيه قيام القائمين، ونبهني فيه عَن نومة الغافلين، وهب لي جرمي فيه يا رب العالمين، واعف عني يا عافيًا عن المجرمين";

function typing() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 90);
        if (i == 18) {
            typing2();
        }
    }
}

function typing2() {
    if (j < text2.length) {
        document.getElementById("text2").innerHTML += text2.charAt(j);
        j++;
        setTimeout(typing2, 90);
        if (j == text2.length) {
            element.classList.remove("d-none");
            element.classList.add("d-block");
        }
    }
}
typing();
console.log(text.length);
