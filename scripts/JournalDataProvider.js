/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "11/7/2020",
        concept: 'Wireframing',
        entry: "Began wireframing and laying out first journal entry. This is filler text. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        mood: "Nervous"
    },

    {
        id: 2,
        date: "11/8/2020",
        concept: "Writing Semantic HTML elements",
        entry: "Started building semantic HTML elements to hold journal entries.",
        mood: "Optimistic"
    },

    {
        id: 3,
        date: "11/10/2020",
        concept: "Styling with CSS FlexBox",
        entry: "Tinkered with styling. This is still a work in progress. TODO: Explore media queries.",
        mood: "Content"
    },

    {
        id: 4,
        date: "11/11/2020",
        concept: "Styling",
        entry: `Got a bunch of styling done today but found some major gotchas. Still need to work with media queries in hopes 
        this will alleviate some of it. Was optimistic at first but got frustrated with myself for missing these issues. 
        Also still need to work on commiting changes more often. I nearly broke several items because I was trying to do 
        too much between commits.`,
        mood: "Anxious"
    },

    {
        id: 5,
        date: "11/12/2020",
        concept: "CSS Styling",
        entry: `I got media queries to work like I wanted them to for the purpose
        of this application. Still need to sharpen up on these`,
        mood: "Optimistic"
    },

    {
        id: 6,
        date: "11/13/2020",
        concept: "JS Modules",
        entry: `Started exploring JS modules and working with the single responsibility principle. Applied this within a practice exercise
                in another project.`,
        mood: "Content"
    },

    {
        id: 7,
        date: "11/16/2020",
        concept: "JS Modules/ JS Functions",
        entry: `Got more in-depth with JavaScript components. Have been learning a lot while reading "Eloquent JavaScript" in parallel
                with these exercises but am still working on wrapping my head around employing the correct arguments as bindings within
                these functions`,
        mood: "Nervous"
    },
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}