export interface Skills {
    name: string;
    icon: string;
}

export interface Experience {
    title: string;
    role: string;
    company: string;
    duration: string;
    responsibilities: string[];
    startDate: string;
    endDate: string;
    totalExperience: string;
    place: string;
    state: string;
    address: string;
    platforms: string;
    webLink: string;
    key: string;
}

export interface Education {
    name: string;
    year: string;
    class: string;
    classInWords: string;
    place: string;
    state: string;
    address: string;
    cgpa: string;
    grade: string;
    webLink: string;
    key: string;
}



export interface Details {
    education: Education[];
    experience: Experience[];
    skills: Skills[];
}