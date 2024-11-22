/**
 * Intersection
 */

interface HasID {
    id: number
}

// Intersection - i.e T & HasID
function addIdToValue <T> (values: T): T & HasID {
    
    const id = Math.random()

    // Intersection
return { ...values, id}
}

interface Post {
    title:  string
    thumbUp: number
}

const posts = addIdToValue <Post> ({title: "Hello", thumbUp: 100})

console.log(posts.id, posts.thumbUp, posts.title)