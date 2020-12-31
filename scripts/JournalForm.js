import { saveEntry } from './JournalDataProvider.js'

const targetElement = document.querySelector('.entryList')
const eventHub = document.querySelector('#container')

eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.id === 'addEntry') {
        const entryDate = document.querySelector('#entryDate')
        const entryConcepts = document.querySelector('#concepts')
        const entryMood = document.querySelector('#mood')
        const entryContent = document.querySelector('#journalText')

        const entryObj = {
            date: entryDate.value,
            concept: entryConcepts.value,
            entry: entryContent.value,
            mood: entryMood.value
        }

        saveEntry(entryObj);
    }
})


export const JournalForm = () => {
    targetElement.insertAdjacentHTML('beforebegin', `
    <section class="formSection">
            <form class="entryForm">
            <!-- Left column for date, concepts, mood fields -->
                <div class="entryForm--left">
                    <div class="entryForm--item">
                        <label for="entryDate">Date:</label>
                        <input type="date" id="entryDate" name="entryDate">
                    </div>
                    <div class="entryForm--item">
                        <label for="concepts">Concepts Covered: </label>
                        <input type="text" id="concepts"  name="concepts">
                    </div>
                    <div class="entryForm--item">
                        <label for="mood">Today's Mood: </label>
                        <select name="mood" id="mood">
                            <option value="Excited">Excited</option>
                            <option value="Nervous">Nervous</option>
                            <option value="Optimistic">Optimistic</option>
                            <option value="Sad">Sad</option>
                            <option value="Anxious">Anxious</option>
                            <option value="Content">Content</option>
                        </select>
                    </div>
                </div>
            
            <!-- Right column for journal entry (textfield) -->
                <div class="entryForm--right">
                    <label for="journalText">Journal Entry</label>
                    <textarea id="journalText" name="journalText" rows="8" cols="30">
                    </textarea>
                    <button class="btn" type="submit" id="addEntry">Record Journal Entry
                    </button>
                </div>
            </form>
        </section>
    `)
}