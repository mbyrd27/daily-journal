import { getEntries, useJournalEntries } from './JournalDataProvider.js'
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