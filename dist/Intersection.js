"use strict";
/**
 * Intersection
 */
// Intersection - i.e T & HasID
function addIdToValue(values) {
    const id = Math.random();
    // Intersection
    return Object.assign(Object.assign({}, values), { id });
}
const posts = addIdToValue({ title: "Hello", thumbUp: 100 });
console.log(posts.id, posts.thumbUp, posts.title);
