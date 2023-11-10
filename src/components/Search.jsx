import { useState, useEffect } from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { callAPI } from '../utils/CallApi';
import { useNavigate, createSearchParams } from 'react-router-dom';

function Search() {
    const [suggestions, setSuggestion] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All');
    const navigate = useNavigate();

    function onHandleSubmit(e) {
        e.preventDefault();

        navigate({
            pathname: 'search',
            search: `${createSearchParams({
                category: `${category}`,
                searchTerm: `${searchTerm}`,
            })}`,
        });

        setSearchTerm('');
        setCategory('All');
    }

    function getSuggestions() {
        callAPI(`data/suggestions.json`).then((suggestionResults) => {
            setSuggestion(suggestionResults);
        });
    }

    useEffect(() => {
        getSuggestions();
    }, []);

    return (
        <div className="w-full">
            <div className="flex items-center h-10 bg-amazonClone-yellow rounded">
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    name="categories"
                    className="p-2 h-full bg-gray-300 text-black border text-xs xl:text-sm"
                >
                    <option value="All">All</option>
                    <option value="Deals">Deals</option>
                    <option value="Amazon">Amazon</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Computers">Computers</option>
                    <option value="Home">Home</option>
                    <option value="Mobiles">Mobiles</option>
                </select>
                <input
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                    value={searchTerm}
                    className="flex grow items-center h-full rounded-l text-black pl-4"
                    type="text"
                />
                <button onClick={onHandleSubmit} className="w-[45px]">
                    <HiOutlineMagnifyingGlass className="m-auto stroke-slate-900" size={'27px'} />
                </button>
            </div>
            {suggestions && (
                <div className="bg-white text-black w-full z-40 absolute">
                    {suggestions
                        .filter((suggestion) => {
                            const currentSearchTerm = searchTerm.toLowerCase();
                            const title = suggestion.title.toLowerCase();

                            return (
                                currentSearchTerm && title.startsWith(currentSearchTerm) && title !== currentSearchTerm
                            );
                        })
                        .slice(0, 10)
                        .map((suggestion) => (
                            <div className="pl-4" key={suggestion.id} onClick={() => setSearchTerm(suggestion.title)}>
                                {suggestion.title}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}

export default Search;
