import { MoodFilter } from './MoodFilters.js'

const contentTarget = document.querySelector('.filters')
const eventHub = document.querySelector('#container')

export const FilterBar = () => {
    const render = () => {
        contentTarget.innerHTML = `${MoodFilter()}`
    }
    render()
}

eventHub.addEventListener('change', changeEvent => {
    if (changeEvent.target.name === "moodOption") {
       const moodFilterSelected = new CustomEvent('radioSelected', {
           detail: {moodId: changeEvent.target.value}
       })
       eventHub.dispatchEvent(moodFilterSelected);
    }
})