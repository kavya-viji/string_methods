var firstName = "Vanakkam";
var lastName = new String("Friends")
var ln = " Love is God " ;
var x = "love is GOD"
console.log(firstName);
console.log(lastName);
console.log(ln);
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof ln);
//console.log(String.fromCharCode(82));
//console.log(String.fromCodePoint(82));
console.log(firstName.length);
console.log(firstName.charAt(5));
console.log(firstName.charCodeAt(0));
console.log(firstName.concat(' ',lastName));
console.log(firstName.includes("na"));
console.log(firstName.startsWith("Va"));
console.log(firstName.endsWith("ma"));
console.log(firstName.indexOf("m"));
console.log(firstName.repeat(5));
console.log(firstName.replace("Vanakkam","Hello"));
console.log(x.replace(/GOD/i/"GOd"));
console.log(firstName.padStart(10,"7"));
console.log(firstName.padEnd(10,"7"));
console.log(ln.slice(3)); //start from 0
console.log(ln.slice(-3));
console.log(ln.slice(3,6)); //start,end
console.log(ln.slice(-6,-3)); 
console.log(x.split(' '));
console.log(x.split(' ',2));
console.log(ln.substr(3));
console.log(ln.substr(3,6)); //start,length
console.log(ln.substring(3)); 
console.log(ln.substring(-3)); 
console.log(ln.substring(3,6));
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(ln.trim());
console.log(ln.trimStart());
console.log(ln.trimEnd());
console.log(ln.match(/[A-Z]/g)); //g lowerCase i upperCase returns array
console.log(ln.match(/[a-z]/g));
console.log(ln.match(/[A-Z]/i));
console.log(x.search("is")); //return index value






