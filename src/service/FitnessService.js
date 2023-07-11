import { useHttp } from '../hooks/http.hook';

const useFitnessService = () => {
    const {loading, request, error, clearError} = useHttp();
    const _url = 'https://exercisedb.p.rapidapi.com/exercises';
    const _youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com';
    const _exercisesHeaders = {
        'X-RapidAPI-Key': '766772ba4fmsh37c11debed721d6p19c8abjsn70d22472458c',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
    const _videoOptions = {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '766772ba4fmsh37c11debed721d6p19c8abjsn70d22472458c',
                  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
                }
            };

    const getBodyParts = async () => {
        const res = await request(`${_url}/bodyPartList`, _exercisesHeaders);
        return res;
    }

    // const getExercises = async (additional) => {
    //     const res = await this.fetchData(`${_url}${additional}`, _exercisesOptions)
    //     return res;
    // }

    return {loading, error, getBodyParts, clearError};
}

export default useFitnessService