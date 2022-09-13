import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Results from './Results'
import RepoDetails from '../RepoDetails'


const  SearchRepos = (e) => {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [details,setDetails] = useState({});
    const [detailsLoading, setDetailsLoading] = useState(false);


    useEffect(()=> {
        const getDetails = async => {
            setDetailsLoading(true);
            const res = axios.get('https://api.github.com/repos/1-grid/GitIntegration/labels');
            setDetails(res.data);
            setDetailsLoading(false);
        }
        getDetails();
    },[]);
    // console.log(details);
    function handleSubmit(e) {
        e.preventDefault();
        searchRepos();
        // getDetails();
    }

    function searchRepos(){
        setLoading(true);
        axios({
            methode: "get",
            url: "https://api.github.com/repos/1-grid/GitIntegration/issues",
        }).then(res =>{
        // console.log(res.data);
           setRepos(res.data)
           setLoading(false);
           
        })

    }


    function renderRepo(repo) {
        return (
            <div className="container" /*onClick={() => getDetails(repo.name)} */key={repo.id}>
                <h2 className="repo-name">
                  {repo.name}
                </h2>
            </div>

        )
    }

    return (
        <>
        <div className="landing-page-container">
            <div className="left-side">
                <form className="form">
                    <input
                    type="text"
                    value={username}
                    placeholder="Github 1 Grid"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <button className="button" onClick={handleSubmit}>{loading? "Searching..." : "Search"}</button>
                </form>
                <div className="results-container">
                    {repos.map(renderRepo)} 
                </div>
                <div className="results-container">
                </div>
            </div>
        </div>
        <RepoDetails details={details} loading={detailsLoading} />
        <Results repos={repos}  />
     </>
    )
}

export default SearchRepos;