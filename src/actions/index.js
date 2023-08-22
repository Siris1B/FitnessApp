export const exercisesFetching = () => {
    return {
        type: 'EXERCISES__FETCHING'
    }
}

export const exercisesFetched = (exercises) => {
    return {
        type: 'EXERCISES__FETCHED',
        payload: exercises
    }
}

export const exercisesFetchingError = () => {
    return {
        type: 'EXERCISES__ERROR'
    }
}

export const bodyPartsFetching = () => {
    return {
        type: 'BODYPARTS__FETCHING'
    }
}

export const bodyPartsFetched = (bodyParts) => {
    return {
        type: 'BODYPARTS__FETCHED',
        payload: bodyParts
    }
}

export const bodyPartsFetchingError = () => {
    return {
        type: 'BODYPARTS__ERROR'
    }
}

export const setNewBodyPart = (bodyPart) => {
    return {
        type: 'BODYPARTS__SETNEW',
        payload: bodyPart
    }
}

export const newValueSubmitted = (value) => {
    return {
        type: 'NEW__VALUE__SUBMITTED',
        payload: value
    }
}