import { Row, Col, Input } from 'antd';
import { searchMovies } from '../../redux/movies/actions';
// import * as reselect from '../../redux/movies/reselect';
// import { createStructedSelector } from 'reselect';
import { useDispatch } from 'react-redux';

const { Search } = Input;

export default function SearchMovies() {
    const dispatch = useDispatch();
    const searchFilm = (name) => {
        dispatch(searchMovies(name))
    }
    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <Search
                        placeholder="Movies ...."
                        onSearch={val => searchFilm(val)}
                        enterButton 
                    />
                </Col>
            </Row>
        </>
    )
}