const initialState = {
    activeBodyPart: 'all',
    exercises: [],
    bodyParts: [],
    exercisesLoadingStatus: 'idle',
    bodyPartsLoadingStatus: 'idle',
    filteredExercises: [],
    inputedValue: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EXERCISES__FETCHING':
            return {
                ...state,
                exercisesLoadingStatus: 'loading'
            }
        case 'EXERCISES__FETCHED':
            return {
                ...state,
                exercises: action.payload,
                exercisesLoadingStatus: 'idle',
                filteredExercises: action.payload
            }
        case 'EXERCISES__ERROR':
            return {
                ...state,
                bodyPartsLoadingStatus: 'error'
            }
        case 'BODYPARTS__FETCHING':
            return {
                ...state,
                bodyPartsLoadingStatus: 'loading'
            }
        case 'BODYPARTS__FETCHED':
            return {
                ...state,
                bodyParts: action.payload,
                bodyPartsLoadingStatus: 'idle'
            }
        case 'BODYPARTS__ERROR':
            return {
                ...state,
                exercisesLoadingStatus: 'error'
            }
        case 'BODYPARTS__SETNEW':
            return {
                ...state,
                activeBodyPart: action.payload,
                filteredExercises: action.payload === 'all' ? state.exercises : state.exercises.filter((exercise) => exercise.bodyPart.toLowerCase().includes(action.payload))
            }
        case 'NEW__VALUE__SUBMITTED':
            return {
                ...state,
                inputedValue: action.payload,
                filteredExercises: action.payload === state.inputedValue ? state.exercises : state.exercises.filter((exercise) => {
                                                                                                                    return exercise.bodyPart.toLowerCase().includes(action.payload) ||
                                                                                                                            exercise.target.toLowerCase().includes(action.payload) ||  
                                                                                                                            exercise.name.toLowerCase().includes(action.payload) ||
                                                                                                                            exercise.equipment.toLowerCase().includes(action.payload);
                                                                                                                    })
            }
        default: return state;
    }
}

export default reducer;