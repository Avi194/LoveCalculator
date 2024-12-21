let resText = document.getElementById('ppp'); // Get the result <p> element
resText.innerHTML = ''; // Clear the initial text

function reverseLoveCalculator(name1, name2) {
    // Normalize input (lowercase and remove spaces)
    const n1 = name1.toLowerCase().replace(/\s+/g, '');
    const n2 = name2.toLowerCase().replace(/\s+/g, '');

    // Create sets of unique characters for each name
    const uniqueChars1 = new Set(n1);
    const uniqueChars2 = new Set(n2);

    // Count total unique characters across both names
    const allUniqueChars = new Set([...uniqueChars1, ...uniqueChars2]);

    // Count shared characters
    let sharedCount = 0;
    for (let char of uniqueChars1) {
        if (uniqueChars2.has(char)) {
            sharedCount++;
        }
    }

    // Calculate the percentage (reverse logic)
    const percentage = Math.round((1 - (sharedCount / allUniqueChars.size)) * 100);

    // Generate simpler messages with original emojis
    let message = '';
    if (percentage > 80) {
        message = "You two are a perfect match! ❤️";
    } else if (percentage > 50) {
        message = "There's a good connection here! 😊";
    } else {
        message = "Hmm, you might need to work on it! 💔";
    }

    return { percentage, message };
}

function clicked() {
    const him = document.querySelector('.himm').value; // Get input value for "His Name"
    const her = document.querySelector('.herr').value; // Get input value for "Her Name"

    // Call reverseLoveCalculator and store the result
    const result = reverseLoveCalculator(him, her);

    // Update the result text with the message from reverseLoveCalculator
    resText.innerHTML = `${result.message} (${result.percentage}%)`;
    console.log(result.percentage);
}
