// add the value "codewars" to the websites array 1,000 times
var websites = new Array(1000).fill("codewars")

// alternate solution
var websites = []
while(websites.length < 1000) websites.push("codewars")

// alternate solution
var websites = []
for(let i=0; i<1000; i++){
  websites.push("codewars")
}