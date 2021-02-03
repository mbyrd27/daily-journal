export const journalEntry = (entry, tags) => {
    return`
    <li class="entry" id="entry--${entry.id}">
        <p class="entry-date">${entry.date}</p>
        <p class="entry-concepts"><span class="heading">Concept(s): </span>${entry.concept}</p>
        <p class="entry-mood"><span class="heading">Today's Mood: </span>${entry.mood.label}</p>
        <p class="entry-content">${entry.entry}</p> 
        <p class="entry-tags"><span class="heading">Tags: </span>
        ${tags.map(tag => `<em> #${tag.subject}</em>`)}
        </p> 
        <div class="btn-holder">
            <button class="entry-btn edit">Edit</button>
            <button id="deleteEntry--${entry.id}"class="entry-btn delete">Delete</button>
        </div>
    </li>
    `
}

