const eventHub = document.querySelector('.container')
let journal = []

const dispatchChangeEvent = () => {
    const entriesChangeEvent = new CustomEvent('entryAdded')
    eventHub.dispatchEvent(entriesChangeEvent)
}

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

// Get entries from the local API
export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood")
        .then(response => response.json())
        .then(entries => {
            journal = entries;
        })
}

export const saveEntry = entry => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchChangeEvent)
}