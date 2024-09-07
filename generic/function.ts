function countAndDescribe<T> (element: T) {
    let descriptionText = 'Has no value';
    if (element.length === 1) {
        descriptionText = 'Has 1 element';
    } else if (element.length > 1) {
        descriptionText = 'Has ' + element.length + ' elements';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hello'));

/**
 * Materi:
 * Membuat interface Lengthy
 * Jadikan constraint
 * Return [T, string]
 */