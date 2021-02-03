let tags = []
let entryTags = []
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
}

export const findTag = (subject) => {
    return fetch(`http://localhost:8088/tags?subject=${subject}`)
        .then(response => response.json())
}

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
}

export const getEntryTags = () => fetch('http://localhost:8088/entrytags')
    .then(resp => resp.json())
    .then(data => entryTags = data)

export const useEntryTags = () => entryTags.slice()