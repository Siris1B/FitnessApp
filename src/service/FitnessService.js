import { useHttp } from '../hooks/http.hook';

const useFitnessService = () => {
    const {request} = useHttp();
    const _url = 'https://exercisedb.p.rapidapi.com/exercises';
    const _youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com';
    const _exercisesHeaders = {
        'X-RapidAPI-Key': '766772ba4fmsh37c11debed721d6p19c8abjsn70d22472458c',
        // 'X-RapidAPI-Key':'6a22450097mshaa2b70d0054cbd6p1014e0jsndd4fde3473e3',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
    const _videoHeaders = {
                  'X-RapidAPI-Key': '766772ba4fmsh37c11debed721d6p19c8abjsn70d22472458c',
                  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
            };

    const getBodyParts = async () => {
        const res = await request(`${_url}/bodyPartList`, _exercisesHeaders);
        return res;
    }

    const getExercises = async (additional = '') => {
        const res = await request(`${_url}${additional}`, _exercisesHeaders)
        return res;
    }

    const getVideos = async (additional = '') => {
        const res = await request(`${_youtubeUrl}${additional}`, _videoHeaders)
        return res;
    }

    return {getBodyParts, getExercises, getVideos};
}

export default useFitnessService