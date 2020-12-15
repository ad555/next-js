import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';
import * as api from '../api/movies';

function* searchMovieSaga({ name }) {
    try {
        yield put(actions.startSearchMovies(true));
        const response = yield call(api.searchMovieByKeywords, name)
        if(response){
            yield put(actions.searchMoviesSuccess(response));
        } else {
            yield put(actions.searchMoviesFailure({
                code: 404,
                message: 'Movie not found'
            }))
        }
    } catch (e) {
        yield put(actions.searchMoviesFailure(e));
    } finally {
        yield put(actions.cancelSearchMovies(false));
    }
}

export function* followSearchMovies() {
    yield takeLatest(types.SEARCH_MOVIES, searchMovieSaga);
}