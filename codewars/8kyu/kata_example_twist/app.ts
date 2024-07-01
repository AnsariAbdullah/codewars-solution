// add the value "codewars" to the websites array 1,000 times
const websites: string[] = new Array(1000).fill("codewars")

// alternate solution
const websites: string[] = []
while (websites.length < 1000) websites.push("codewars")

// alternate solution
const websites: string[] = []
for (let i = 0; i < 1000; i++) {
  websites.push("codewars")
}
