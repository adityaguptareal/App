let hunger = 50;
let happiness = 50;

function updateStatus() {
    document.getElementById('hunger').textContent = hunger;
    document.getElementById('happiness').textContent = happiness;

    const petImage = document.getElementById('petImage');
    if (happiness > 70) {
        petImage.src = 'happy-pet.png';
    } else if (happiness > 30) {
        petImage.src = 'neutral-pet.png';
    } else {
        petImage.src = 'sad-pet.png';
    }
}

function feedPet() {
    hunger = Math.max(0, hunger - 10);
    happiness = Math.min(100, happiness + 5);
    updateStatus();
}

function playWithPet() {
    happiness = Math.min(100, happiness + 10);
    hunger = Math.min(100, hunger + 5);
    updateStatus();
}

// Automatically decrease happiness and increase hunger over time
setInterval(() => {
    hunger = Math.min(100, hunger + 1);
    happiness = Math.max(0, happiness - 1);
    updateStatus();
}, 3000); // Updates every 3 seconds
