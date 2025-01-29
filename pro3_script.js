function calculateFLAMES() {
    const name1 = document.getElementById("name1").value.toLowerCase().replace(/\s/g, '');
    const name2 = document.getElementById("name2").value.toLowerCase().replace(/\s/g, '');

    if (!name1 || !name2) {
        document.getElementById("result").textContent = "Please enter both names.";
        document.getElementById("result").style.opacity = 1;
        return;
    }

    const flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'];

    const setOne = ['aravind', 'aravindm'];
    const setTwo = ['hemapriya', 'hemapriyarc', 'hemapriyarc'];

    // Normalize input names (remove spaces and convert to lowercase)
    const normalizedName1 = name1.replace(/\s/g, '');
    const normalizedName2 = name2.replace(/\s/g, '');

    // Check if names match the predefined sets
    if ((setOne.includes(normalizedName1) && setTwo.includes(normalizedName2)) ||
        (setOne.includes(normalizedName2) && setTwo.includes(normalizedName1))) {
        document.getElementById("result").textContent = "The relationship is: Love and Marriage";
        document.getElementById("result").style.opacity = 1;
        return;
    }

    let combinedString = name1 + name2;

    for (let i = 0; i < name1.length; i++) {
        for (let j = 0; j < name2.length; j++) {
            if (name1[i] === name2[j]) {
                combinedString = combinedString.replace(name1[i], '');
                combinedString = combinedString.replace(name2[j], '');
                break;
            }
        }
    }

    const remainder = combinedString.length % flames.length;
    const result = flames[remainder ? remainder - 1 : flames.length - 1];

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
