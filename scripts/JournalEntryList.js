import { useJournalEntries } from './JournalDataProvider.js'
import { journalEntry } from './JournalEntry.js'

const entryLog = document.querySelector('.entries');

export const EntryListComponent = () => {
    const entries = useJournalEntries();

    for (const entry of entries) {
        entryLog.innerHTML += journalEntry(entry);
    }
}