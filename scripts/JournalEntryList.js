import { useJournalEntries } from './JournalDataProvider.js'
import { journalEntry } from './JournalEntry.js'

const entryLog = document.querySelector('.entries');

export const EntryListComponent = () => {
    const entries = useJournalEntries();
    
    entryLog.innerHTML += entries.map(entry => journalEntry(entry));
}