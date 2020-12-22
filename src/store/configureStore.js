import { createStore } from 'redux'

import Reducers from '../reducers'

export default configureStore = (initialState) => {

    return createStore(Reducers)

}


