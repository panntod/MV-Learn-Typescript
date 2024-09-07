class DataStorage<T> {
    private data: T[] = []

    addData(data: T) {
        this.data.push(data)
    }

    removeData(data: T) {
        this.data.splice(this.data.indexOf(data), 1)
    }

    getData() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addData('Max')
textStorage.addData('Manu')
textStorage.removeData('Max')
console.log(textStorage.getData())