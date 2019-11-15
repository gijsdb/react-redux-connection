import {combineReducers} from 'redux'

const booksReducer = () => {
    return [
        {title: 'WEB6012', notes:'blah blah2'},
        {title: 'WEB6013', notes:'blah blah3'},
        {title: 'WEB6014', notes:'blah blah4'}
    ]
}

const selectedBookReducer = (selectedBook =null, action) => {
    if(action.type === 'BOOK_SELECTED') {
        return action.payload
    }
    return selectedBook
}

export default combineReducers({
    books: booksReducer,
    selectedBook: selectedBookReducer
})