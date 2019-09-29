//https://learning.oreilly.com/videos/modern-javascript-from/9781789539509/9781789539509-video2_8


const name = 'John';
const age = 30;
const job = 'Web developer';
const city = 'Miami';

// Without template string
html = '<ul><li>Name: ' + name + '</li><li><age>Age: ' + age + '</age></li><job>Job: ' + job + '</job><city>City: ' + city + '</city></ul>';

function hello() {
    return 'hello'
}

//With template string
html = `
<ul><li>Name: ${name}</li>
<li><age>Age: ${age}</age></li>
<li><job>Job: ${job}</job></li>
<li><city>City: ${city}</city></li>
<li><city>Hello: ${hello()}</city></li>
<li><city>Line: ${age > 30 ? 'Over 30':'Not over 30'}</city></li>
</ul>
`;
console.log(html);