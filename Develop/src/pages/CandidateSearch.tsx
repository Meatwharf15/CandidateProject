import {useState, useEffect} from 'react';
import {searchGithub, searchGithubUser} from '../api/API';
import Candidate from "../interfaces/Candidate.interface";
import CandidateCard from "../components/CandidateCard.tsx";

const CandidateSearch = () => {
  //const [search, setSearch] = useState<Candidate[]>([]);
  const [candidate, setCandidate] = useState<Candidate>({
    id: null,
    login: null,
    image: null,
    name: null,
    location: null,
    email: null,
    html_url: null,
    avatar_url: null,
    company: null,
    bio: null,
  }); 

  const addCandidates = () => {
    let parsedCandidates = [];
    const storedCandidates = localStorage.getItem("candidates");
    if (typeof storedCandidates === "string") {
      parsedCandidates = JSON.parse(storedCandidates);
    }
    parsedCandidates.push(candidate);
    localStorage.setItem("candidates", JSON.stringify(parsedCandidates));
  };

  const searchForCandidateByName = async(login: string) => {
    const user: Candidate = await searchGithubUser(login);
    setCandidate(user);
    console.log(user);
  };

  // Something wrong with this function. Check searchGithub functions. Print line debugging.
  const searchCandidates = async() => {
    const users: Candidate[] = await searchGithub();
    // setSearch(users);
    console.log(users[0].login);
    await searchForCandidateByName(users[0].login || "")
  }

  useEffect(() => {
    searchCandidates(); 
    //searchForCandidateByName(candidate.login || "")}
  },[] 
  );

  return (
    <>
      {candidate?.login ? (
        <CandidateCard currentCandidate = {candidate} 
        addCandidates = {addCandidates}/>):
        (<div></div>)
      }
    </>
  )
};

export default CandidateSearch;