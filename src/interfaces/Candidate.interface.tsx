// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    id: number | null;
    login: string | null;
    image: string | null;
    name: string | null;
    location: string | null;
    email: string | null;
    html_url: string | null;
    avatar_url: string | null;
    company: string | null;
    bio: string | null;
}

