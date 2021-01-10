import { deleteEntry, getEntries, useJournalEntries } from './JournalDataProvider.js'
import { journalEntry } from './JournalEntry.js'

const entryLog = document.querySelector('.entries');
const eventHub = document.querySelector('#container');

const EntryListComponent = () => {
    getEntries().then(() => {
        const entries = useJournalEntries();
        entryLog.innerHTML += entries.map(entry => journalEntry(entry));
    })
}

eventHub.addEventListener('entryAdded', EntryListComponent)

EntryListComponent();

eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.id.startsWith('deleteEntry--')) {
        const [prefix, id] = clickEvent.target.id.split('--')
        console.log(id)
        deleteEntry(id)
            .then(() => {
                const entries = useJournalEntries();
                entryLog.innerHTML = entries.map(entry => journalEntry(entry))
            })
    }
})