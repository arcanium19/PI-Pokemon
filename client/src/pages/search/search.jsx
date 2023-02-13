import SearchContainer from '../../components/searchContainer/searchContainer';
import style from './search.module.css';

function Search(){

    return (
        <div className={style.container}>
            <div className={style.leftCont}></div>
            <div className={style.wrap}>
                <SearchContainer />
            </div>
            <div className={style.rightCont}></div>
        </div>
    );
}

export default Search;