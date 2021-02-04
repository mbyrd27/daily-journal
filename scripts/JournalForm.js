import {saveTag, findTag } from './TagProvider.js'
import { saveEntry } from './JournalDataProvider.js'
import { getMoods, useMoods } from './MoodDataProvider.js'
import {entryId} from './JournalDataProvider.js'
import { newTagId, saveEntryTag } from './TagProvider.js'



const targetElement = document.querySelector('.entryList')
const eventHub = document.querySelector('#container')

//START HERE - turn this into a function and run it when saving an edited entry//
eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.id === 'addEntry') {
        const entryDate = document.querySelector('#entryDate')
        const entryConcepts = document.querySelector('#concepts')
        const entryMood = document.querySelector('#mood')
        const entryContent = document.querySelector('#journalText')
        const tagList = document.querySelector('#tags').value.split(', ')

        const entryObj = {
            date: entryDate.value,
            concept: entryConcepts.value,
            entry: entryContent.value,
            moodId: parseInt(entryMood.value)
        }
        
        saveEntry(entryObj)
            .then(() => {
                tagList.forEach(tag => {
                    findTag(tag)
                        .then(matches => {
                            let matchingTagId = null
        
                            if(matches.length > 0) {
                                matchingTagId = matches[0].id
                            }
        
                            if (matchingTagId === null) {
                                saveTag({'subject': tag})
                                    .then(resp => {
                                        saveEntryTag(entryId, resp.id)
                                       
                                    })
                            }
                            else {
                                saveEntryTag(entryId, matchingTagId)
                            }
                        })
                })
            })
            
    }
})

export const JournalForm = () => {
    getMoods()
        .then(() => {
            const allMoods = useMoods();
            renderForm(allMoods);
        })
}

const renderForm = (mood) => {
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
                        <!-- 
                            <option value="Excited">Excited</option>
                            <option value="Nervous">Nervous</option>
                            <option value="Optimistic">Optimistic</option>
                            <option value="Sad">Sad</option>
                            <option value="Anxious">Anxious</option>
                            <option value="Content">Content</option>-->
                        ${
                            mood.map(feeling => {
                                return `<option value="${feeling.id}">${feeling.label}</option>`
                            }).join('')
                        }
                        </select>
                    </div>
                    <div class="entryForm--item">
                        <label for="tags">Tags</label>
                        <input type="text" id="tags" name="tags">
                    </div>
                </div>
            
            <!-- Right column for journal entry (textfield) -->
                <div class="entryForm--right">
                    <label for="journalText">Journal Entry</label>
                    <textarea id="journalText" name="journalText" rows="8" cols="30">
                    </textarea>
                    <button class="btn" id="addEntry" type="button">Record Journal Entry
                    </button>
                </div>
            </form>
        </section>
    `)
}