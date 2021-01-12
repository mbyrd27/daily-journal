export const MoodFilter = () => {
    return `
    <fieldset>
        <legend>Filter Entries by Mood</legend>
        <input type="radio" value = "1" name="moodOption">
        <label for="moodOption--excited">Excited</label>
        <input type="radio" value = "2" name="moodOption">
        <label for="moodOption--nervous">Nervous</label>
        <input type="radio" value = "3" name="moodOption">
        <label for="moodOption--optimistic">Optimistic</label>
    </fieldset>`
}