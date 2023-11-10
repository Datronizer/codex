import { Container } from "react-bootstrap";
import resume from "./json/chiens-resume-nov-23.json";
import { EducationDto } from "./dtos/Education.dto";
import { formatShortDateRange } from "../../util";

export function Resume()
{
    const education = resume.education.map(e => EducationDto.from(e));

    if (!resume) 
    {
        return (
            <Container>
                Hmm... there doesn't seem to be anything here?
            </Container>
        )
    }

    return (
        <Container>
            {education.map(e => <EducationBlock education={e} />)}
            {/* {work.map(e => <WorkBlock work={e} />)} */}
        </Container>
    );
}

function EducationBlock(props: { education: EducationDto }) // make new type
{
    const edu = props.education;
    
    return (
        <div>
            <h3>Education</h3>
            <p>
                <strong>{edu.institution}</strong> | {edu.end ? formatShortDateRange(edu.start, edu.end) : "Ongoing"}
                <br />
                {edu.degree} in {edu.majors.map(e => <em>{e}</em>)}. Minored in {edu.minors?.map(e => <em>{e}</em>)}.
                <br />
                Achievements: {edu.achievements?.map(e => <li>{e}</li>)}
                Accolades: {edu.accolades?.map(e => <li>{e}</li>)}
            </p>
        </div>
    )
}

