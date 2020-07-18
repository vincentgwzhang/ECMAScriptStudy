{
    // 最小精度
    console.log(Number.EPSILON);

    function equal(a, b) {
        if (Math.abs(a - b) < Number.EPSILON) {
            return true;
        } else {
            return false;
        }
    }

    console.log(equal(0.1 + 0.2, 0.3));
    console.log(0.1 + 0.2); //0.30000000000000004
}