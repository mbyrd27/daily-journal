import { findTag } from "./TagProvider.js"

export const matchTags = tags => {
    tags.map(tag => {
        findTag(tag)
            .then(matches => {
                let matchingTagId = null

                if (matches.length > 0)
            })
    })
}