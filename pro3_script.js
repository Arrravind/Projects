function calculateFLAMES() {
    const name1 = document.getElementById("name1").value.toLowerCase().replace(/\s/g, '');
    const name2 = document.getElementById("name2").value.toLowerCase().replace(/\s/g, '');

    if (!name1 || !name2) {
        document.getElementById("result").textContent = "Please enter both names.";
        document.getElementById("result").style.opacity = 1;
        return;
    }

    const flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'];

    const setOne = ['aravind', 'Aravind', 'Aravind M', 'ARAVIND M', 'aravind m'];
    const setTwo = ['hemapriya', 'Hemapriya', 'Hemapriya RC', 'Hemapriya R C', 'Hemapriya r c', 'hemapriya r c'];

    let combinedString = name1 + name2;

    let name1Arr = name1.split('');
    let name2Arr = name2.split('');

    for (let char of name1Arr) {
        let index = name2Arr.indexOf(char);
        if (index !== -1) {
            name2Arr.splice(index, 1);
            name1Arr.splice(name1Arr.indexOf(char), 1);
        }
    }

    const uniqueLength = name1Arr.length + name2Arr.length;
    const remainder = uniqueLength % flames.length;

    let result;
    if ((setOne.includes(name1) && setTwo.includes(name2)) || (setOne.includes(name2) && setTwo.includes(name1))) {
        result = "Love & Marriage";
    } else {
        result = flames[remainder ? remainder - 1 : flames.length - 1];
    }

    document.getElementById("result").textContent = `The relationship is: ${result}`;
    document.getElementById("result").style.opacity = 1;

    document.getElementById("name1").disabled = true;
    document.getElementById("name2").disabled = true;
    document.getElementById("calculate-btn").style.display = 'none';
    document.getElementById("reset-btn").style.display = 'inline-block';
}

function resetFields() {
    document.getElementById("name1").value = '';
    document.getElementById("name2").value = '';
    document.getElementById("name1").disabled = false;
    document.getElementById("name2").disabled = false;
    document.getElementById("result").style.opacity = 0;

    document.getElementById("calculate-btn").style.display = 'inline-block';
    document.getElementById("reset-btn").style.display = 'none';
}
