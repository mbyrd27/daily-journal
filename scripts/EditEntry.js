export const EditEntry = (entry, moods, tags) => {
    return `
        <input class="entry-date" type="date" id="entryDate" name="entryDate" value="${entry.date}"></input>
        <p class="entry-concepts">
            <span class="heading">Concept(s): </span>
            <input type="text" id="concepts" name="concepts" value="${entry.concept}"></input>
        </p>    
        <p class="entry-mood">
            <span class="heading">Today's Mood: </span>
            <select name="mood" id="mood" value="${entry.mood}">
            ${
                moods.map(mood => {
                    return `<option value="${mood.id}">${mood.label}</option>`
                }).join('')
            }
            </select>
        </p>
        <textarea class="entry-content" id="journalText" name="journalText">${entry.entry}</textarea>
        <p class="entry-tags">
            <span class="heading">Tags: </span>
            <input type="text" id="tags" name="tags"
            value="${
                tags.map(tag => `${tag.subject}`)
            }"
            </input>
        </p> 
        <div class="btn-holder">
            <button id="saveEntry--${entry.id}"class="entry-btn edit">Save</button>
            <button id="cancelEntry--${entry.id}"class="entry-btn delete">Cancel</button>
        </div>
    `
}