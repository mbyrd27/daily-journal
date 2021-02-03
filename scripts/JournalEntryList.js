import { deleteEntry, getEntries, useJournalEntries } from './JournalDataProvider.js'
import { getEntryTags, useEntryTags, getTags, useTags } from './TagProvider.js'
import { journalEntry } from './JournalEntry.js'

const entryLog = document.querySelector('.entries');
const eventHub = document.querySelector('#container');

const EntryListComponent = () => {
    getEntries()
    .then(getEntryTags)
    .then(getTags)
    .then(() => {
        const entries = useJournalEntries();
        const entryTags = useEntryTags();
        const tags = useTags();
        entryLog.innerHTML += entries.map(entry => {
            const filteredTags = entryTags.filter(et => et.entryId === entry.id)
            .map(ft => tags.find(tag => ft.tagId === tag.id))
            return journalEntry(entry, filteredTags)
        }).join('')
    })
}

eventHub.addEventListener('entryAdded', EntryListComponent)

EntryListComponent();

eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.id.startsWith('deleteEntry--')) {
        const [prefix, id] = clickEvent.target.id.split('--')
        deleteEntry(id)
            .then(() => {
                const entries = useJournalEntries();
                entryLog.innerHTML = entries.map(entry => journalEntry(entry))
            })
    }
})

eventHub.addEventListener('radioSelected', e => {
    getEntries().then(() => {
        const allEntries = useJournalEntries();
        entryLog.innerHTML = allEntries.filter(entry => entry.moodId === parseInt(e.detail.moodId))
            .map(entry => journalEntry(entry));
        })
    })
