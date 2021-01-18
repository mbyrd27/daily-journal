let tags = []
export let newTagId = null

export const getTags = () => {
    return fetch('http://localhost:8088/tags')
        .then(response => response.json())
        .then(apiTags => tags = apiTags)
}

export const useTags = () => tags.slice()

export const saveTag = tag => {
    return fetch('http://localhost:8088/tags', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
    .then(resp => resp.json())
    //.then(parsedResp => {newTagId = parsedResp.id})
    //.then(getTags)
}

export const findTag = (subject) => {
    return fetch(`http://localhost:8088/tags?subject=${subject}`)
        .then(response => response.json())
}

/*export const getEntryTag = () => {
    return fetch('http://localhost:8088/entryTags')
        .then(resp => resp.json())
        .then(apiEntryTag => entryTags = apiEntryTag)
}

export const useEntryTag = () => entryTags.slice()
*/
export const saveEntryTag = (entry, tag) => {
    const entryTags = {
        entryId: entry,
        tagId: tag
    }
    return fetch('http://localhost:8088/entryTags', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryTags)
    })
    //.then(getEntryTag)
}