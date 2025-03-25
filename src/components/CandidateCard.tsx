import type Candidate from "../interfaces/Candidate.interface";
import {IoAddCircle} from "react-icons/io5";
import {IoRemoveCircle} from "react-icons/io5";

type candidateCardProps = {
    currentCandidate: Candidate;
    addCandidates?: (() => void) | null;
    searchForCandidateByName?: (() => void) | null;
};

const CandidateCard = ({
    currentCandidate,
    addCandidates,
}: candidateCardProps) => {
    return (
        <>
            {currentCandidate?.name && (
                <section className = "candidateCard">
                    <figure>
                        <img src = {currentCandidate.avatar_url || ""} alt = {`$currentCandidate.name`}/>
                    </figure>

                    <article className = "details">
                        <h2> {currentCandidate.name} </h2>
                        <p>
                            <strong> Location: </strong> {currentCandidate.location}
                        </p>
                        <p> 
                            <strong> Email: </strong> {currentCandidate.email}
                        </p>
                        <p> 
                            <strong> Company: </strong> {currentCandidate.company}
                        </p>
                        <p>
                            <strong> Bio: </strong> {currentCandidate.bio}
                        </p>
                    </article>

                    <aside className = "icons">
                        <IoAddCircle 
                            style = {{fontSize: "50px", cursor: "pointer"}}
                            onClick = {() => addCandidates?.()}
                        />
                        <IoRemoveCircle 
                            style = {{fontSize: "50px", cursor: "pointer"}}
                            onClick = {() => addCandidates?.()}
                        />
                    </aside>
                </section>
            )}
        </>
    );
}

export default CandidateCard;