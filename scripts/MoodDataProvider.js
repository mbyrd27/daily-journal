let moodsList = [];

export const getMoods = () => {
    return fetch('http://localhost:8088/moods')
        .then(response => response.json())
        .then(parsedMoods => moodsList = parsedMoods);
}

export const useMoods = () => moodsList.slice();