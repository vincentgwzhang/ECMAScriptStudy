//http://es6.ruanyifeng.com/#docs/regex

{
    const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;

    const matchObj = RE_DATE.exec('1999-12-31');
    const year = matchObj[1]; // 1999
    const month = matchObj[2]; // 12
    const day = matchObj[3]; // 31
}

{
    const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

    const matchObj = RE_DATE.exec('1999-12-31');
    const year = matchObj.groups.year; // 1999
    const month = matchObj.groups.month; // 12
    const day = matchObj.groups.day; // 31
}

{
    const string = 'test1test2test3';
    const regex = /t(e)(st(\d?))/g;
    for (const match of string.matchAll(regex)) {
        console.log(match);
    }
}