import { deleteEntry, getEntries, useJournalEntries, updateEntry } from './JournalDataProvider.js'
import { getMoods, useMoods } from './MoodDataProvider.js'
import { getEntryTags, useEntryTags, getTags, useTags } from './TagProvider.js'
import { journalEntry } from './JournalEntry.js'
import { EditEntry } from './EditEntry.js'

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

eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.id.startsWith('editEntry--')) {
        const [prefix, id] = clickEvent.target.id.split('--')
        const contentTarget = document.querySelector(`#entry--${id}`)
        getEntries()
            .then(getMoods)
            .then(getEntryTags)
            .then(getTags)
            .then(() => {
                const entries = useJournalEntries()
                const moods = useMoods()
                const entryToEdit = entries.find(entry => entry.id === parseInt(id))
                const tags = useTags()
                const entryTags = useEntryTags()
                const filteredTags = entryTags.filter(et => et.entryId === parseInt(id))
                    .map(ft => tags.find(tag => ft.tagId === tag.id))
                contentTarget.innerHTML = EditEntry(entryToEdit, moods, filteredTags)
            })
    }
})

// eventHub.addEventListener('click', clickEvent => {
//     if (clickEvent.target.id.startsWith('saveEntry--')) {
//         const [prefix, id] = clickEvent.target.id.split('--')
//         updateEntry(id)
//             .then(() => {
//                 const entries = useJournalEntries();
//                 entryLog.innerHTML = entries.map(entry => journalEntry(entry))
//             })
//     }
// })
